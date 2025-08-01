import Navbar from '@/components/public/navbar'
import React from 'react'
import Pricing from './pricing'

export default function Page() {
    

    return (
        <div className='flex-row justify-center items-center content-center'>
            <Navbar/>
            <Pricing/>
        </div>
    )
}
