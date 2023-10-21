"use client"
import React, { useContext, useEffect } from 'react';
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Link from 'next/link';
import { GlobalContext } from '../../context/state';
import Question from '../../components/Question.jsx';
import { systemConditions4 } from "@/components/systemConditions/systemConditions4"
import Avatar from '@/components/Avatar';

const inter = Inter({ subsets: ['latin'] })


export default function Home(props) {
    const { reply } = useContext(GlobalContext)

    const createSpeech = async (text) => {
        // const speech = new SpeechSynthesisUtterance(text);
        // speechSynthesis.speak(speech);
    }

    // useEffect(() => {
    //     createSpeech('Welcome to the companion app. Please ask a question.')
    // }, [])

    useEffect(() => {
        if (reply !== '') {
            // createSpeech(reply)
        }
    }, [reply])


    return (
        <div className='page flex flex-col'>
            <Avatar />
            <Question systemConditions={systemConditions4} />
            
        </div>
    )
}


