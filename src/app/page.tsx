
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
  let leetcode = new LeetCode();
  let user = await leetcode.user("yordi1");
  let acceptedFilter = user.recentSubmissionList?.filter((item) => item.statusDisplay == "Accepted");
  let today = (item: any) => {
    let date = new Date();
    let subM = new Date(item*1000);
    if (date.getMonth() != subM.getMonth()) return false;
    else if (date.getDay() != subM.getDay()) return false;
    return true;
  }
  
    
  

 // June 12, 2017
  var d2 = new Date();
  let todaySubmissions = acceptedFilter?.filter(item => today(item.timestamp));
  
      
  console.log(todaySubmissions?.length);
  todaySubmissions?.forEach((sub, index) => {
    console.log(
    
      `<p key={index} className="">
        ${index + 1} <span>${sub.title} time complexity O(1) and space complexity O(1)</span>
      </p>`
    )
  })
  
  return (
    <main className={styles.main}>
      <h1>hello world</h1>
      <Suspense fallback={`hello world`}>
        <div>
          {todaySubmissions?.map((sub, index) => {
            return (
              <p key={index} className="">
               {index + 1}. <span>{sub.title} time complexity O(1) and space complexity O(1)</span>
              </p>
            )
          })}
        </div>
      </Suspense>
      
    </main>
  )
}
