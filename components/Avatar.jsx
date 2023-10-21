import React, { useEffect, useState, useContext, useMemo } from "react"
import Image from 'next/image'
import Loading from "../app/(Shared)/Loading.jsx"
import dalleCall from '../functions/dalleCall'
import brain from '../images/brain.jpg'

import { GlobalContext } from '../context/state';

export default function Avatar() {
    const { personality, reply } = useContext(GlobalContext)
    const [loading, setLoading] = useState(false)
    const [image, setImage] = useState(brain)
    console.log(`personality ${personality}`)

    // const prompt = useMemo(() => {
    //     return `An image of ${personality} standing in front of you.`
    // }, [personality])

    useEffect(() => {
        const getImage = async () => {
            setLoading(true)
            const prompt = `An image of ${personality} standing in front of you.`
            const response = await dalleCall(prompt)
            setImage(response)
            setLoading(false)
        }
        if (personality !== '') {
            getImage()
        }
    }, [personality])

    useEffect(() => {
        const getImage = async () => {
            setLoading(true)
            const prompt = `An image of ${personality} in a movie, acting out the following scene: ${reply}`
            const response = await dalleCall(prompt)
            setImage(response)
            setLoading(false)
        }
        if (reply !== '') {
            getImage()
        }
    }, [reply])



    return (
        <div className='avatar flex flex-col items-center'>
            <div className='avatar-image'>
                {loading && <Loading />}
                {!loading && (
                    <Image
                        src={image}
                        alt='avatar'
                        width={600}
                        height={600}
                        priority={true}
                    />
                )}
            </div>
            <div className='avatar-name'>
                <h1>{personality}</h1>
            </div>
        </div>
    )
}
