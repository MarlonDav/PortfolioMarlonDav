import Image from 'next/image'
import React from 'react'
import foto from  '../../public/images/foto.png'
import Link from 'next/link'

const HireMe = () => {
  return (
    <div className='fixed bottom-4
    flex items-center justify-center overflow-hidden md:right-8 md:left-auto md:top-0 md:bottom-auto md:absolute sm:right-0
    '>
        <div className='w-[120px] h-auto flex items-center justify-center relative'>
            <Image src={foto} alt='' className='fill-black animate-spin-slow dark:fill-white'></Image>
            <Link href="mailto:marlon.bernal.riveros@gmail.com" className='flex items-center justify-center 

            absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-black 
            text-white shadow-md border border-solid border-black w-[60px] h-[60px] rounded-full
            font-semibold hover:bg-white hover:text-black  text-[10px]  dark:bg-white dark:text-black hover:dark:bg-black hover:dark:text-white
            hover:dark:border-white
            md:w-12 md:h-12 md:text[10px]
            '>
              Hire Me
            </Link>

        </div>
    </div>
  )
}

export default HireMe