import {Profile} from "../components/profile"
import { ExpirienceBar} from '../components/ExpirienceBar';
import styles from '../styles/pages/Home.module.css';
import {CompletedChallenges} from '../components/CompletedChallenges'
import {Countdown} from '../components/Countdown'
import React from "react";
import Head from "next/Head"
export default function Home() {
  return (
    
    <div className={styles.container}>
     <Head>
      <title>MoveIt</title>
    </Head>
     <ExpirienceBar/>
     <section>
       <div>
      <Profile/>
      <CompletedChallenges/>
      <Countdown/>
       </div>
       <div>

       </div>
     </section>
   </div>
  )
}
