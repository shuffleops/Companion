"use client"
import { useContext } from 'react';
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import Link from 'next/link';
import { GlobalContext } from '../context/state'

import Question from '@/components/Question';
import { systemConditions1 } from "../components/systemConditions/systemConditions1"
import { systemConditions2 } from "../components/systemConditions/systemConditions2"
import { systemConditions3 } from "../components/systemConditions/systemConditions3"

const inter = Inter({ subsets: ['latin'] })

export default function Home(props) {
  const { } = useContext(GlobalContext)


  return (
    <div className='page'>
      <Question systemConditions={systemConditions1}/>
      <Question systemConditions={systemConditions2}/>
      <Question systemConditions={systemConditions3}/>
    </div>
  )
}


