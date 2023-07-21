import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-black
    font-medium text-lg dark:text-white dark:border-white sm:text-base
    '>
        <Layout className='py-8 flex items-center justify-between lg:flex-col lg:py-6'>
            <span>{new Date().getFullYear()} &copy; All Rights Reserved. </span>
            <div className='flex items-center'>
              Build with<span className=' text-red-700 text-2xl px-1'>&#9825;</span>by&nbsp;<Link href='/'>MarlonDav</Link>   
            </div>
            <Link href='/'>Di hola</Link>
        </Layout>

    </footer>
  )
}

export default Footer