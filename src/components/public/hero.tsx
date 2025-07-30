'use client'
import React from 'react';
import { BackgroundLines } from '../ui/background-lines';
import { Button } from '../ui/button';
import { useRouter } from 'next/navigation';
import MyMarquee from './mymarquee';


export default function Hero() {
  const router = useRouter()
  const handleSignIn = ()=>{
    router.push('/signup')
  }
  const handlePricing = ()=>{
    router.push('/pricing')
  }

  return (
<BackgroundLines className="flex items-center justify-center w-full flex-col">
      <h2 className="bg-clip-text text-transparent text-center bg-accent dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:pt-10 relative z-20 font-bold tracking-tight">
        Dashboards are cool you know, <br /> dive into the world of <span className='bg-gradient-to-r from-primary to-accent text-transparent bg-cover bg-clip-text font-extrabold'>Analytics</span>
      </h2>
      <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center font-bold md:py-5">
        Analyze , Visualise and generate profit with the help of charts
      </p>
      <div className='flex flex-row space-x-5 justify-center items-center content-center pb-5'>
        <Button variant={'outline'} onClick={handlePricing}>Pricing</Button>
        <Button variant={"default"} onClick={handleSignIn}>Sign up</Button>
      </div>
      <MyMarquee/>
    </BackgroundLines>


  );
}