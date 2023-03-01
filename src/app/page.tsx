
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import UserName from '@/components/UserName'
import LeetCode from 'leetcode-query'
import { subtle } from 'crypto'
import { Suspense } from 'react'



const inter = Inter({ subsets: ['latin'] })
//fetch data
export default async function Home() {
  
  return (
    <main className={styles.main}>
      <h1>Hey</h1>
     
     
      
    </main>
  )
}
