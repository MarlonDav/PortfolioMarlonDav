import React from 'react'
import Head from 'next/head'
import NavBar from '@/components/NavBar'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import Image from 'next/image'
import {BsGithub} from 'react-icons/bs'
import ecommerce from '../../public/images/ecommerce.png'
import spiderAtm from '../../public/images/spiderAtm.png'
import TransitionEffect from '@/components/TransitionEffect'

const FeaturedProject = ({ type, tittle, summary, img, link, github }) => {

  return(
    
    <article 
     className='w-full flex items-center justify-between relative rounded-br-2xl
      rounded-3xl border border-solid border-black bg-white shadow-2xl p-12 dark:border-white dark:bg-black
      lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4

     '
      >
      
      
     <Link 
          href={link} 
          target="_blank"  
          className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full'
      >
      <Image src={img} alt={tittle} className='w-full h-auto'/>     
     </Link>

      <div className='w-1/2 flex flex-col items-start justify-between pl-6 dark:text-white lg:w-full lg:pl-0 lg:pt-6'>
        <span className='text-red-500 font-medium text-xl xs:text-base'>{type}</span>
        <Link href={link} target="_blank" className='hover:underline underline-offset-2'
       
        >
           <h2 className='my-2 w-full text-left text-4xl font-bold dark:text-white sm:text-sm' >{tittle}</h2>
        </Link>
        <p className='my-2 font-medium text-black dark:text-white sm:text-sm'>{summary}</p>
        <div className='mt-2 mb-2 flex items-center dark:text-white'>
          <Link 
              href={github} 
              target="_blank" 
              > <BsGithub /></Link>
          <Link 
              href={link} target="_blank"
             className='ml-4 rounded-lg bg-black text-white p-2 px-6 text-[10px] font-semibold dark:bg-white dark:text-black sm:px-4 sm:text-base '
               > Visita mi proyecto </Link>
     
        </div>
      </div>

    </article>
  )
} 
const Project = ({tittle, type, img, link, github}) => {
  return (
    <article className='w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-black bg-white p-6 relative dark:border-white dark:bg-black
    xs:p-4
    '>


 
    <Link href={link} target="_blank"  className='w-full cursor pointer overflow-hidden rounded-lg'>
      <Image src={img} alt={tittle} className='w-full h-auto'/>     
     </Link> 
      <div className='w-full flex flex-col items-start justify-between mt-4 dark:text-white'>
        <span className='text-red-500 font-medium text-xl lg:text-lg md:text-base'>{type}</span>
        <Link href={link} target="_blank" className='hover:underline underline-offset-2'
       
        >
           <h2 className='my-2 w-full text-left text-3xl font-bold lg:text-2xl' >{tittle}</h2>
        </Link>
      
       <div className='w-full mt-2 flex items-center justify-between'>
        <Link
            href={link}
            target="_blank"
            className=' text-lg font-semibold underline md:text-base'
        >
           Visita
          
        </Link>
       <Link href={github} target="_blank" className='w-8 md:w-6' > <BsGithub /></Link>
       
     
       </div>
      </div>
    
  
     

    </article>
  )
}
const projects = () => {
  return (
    
   <>
   

   <Head>
    <title>MarlonDav | Projects page</title>
    <meta name="description" content="<NAME>'s personal website." />
   </Head>
   <TransitionEffect/>
   <main className='w-full mb-16 flex flex-col items-center justify-center'>
    <Layout className='pt-16'>
      <AnimatedText text="Transformando Ideas en Realidad: Nuestros Proyectos Inspiradores" className="!text-3xl xl:text-4xl lg:!text-3xl sm:!text-2xl xs:text-xl lg:mb-10 sm:mb-6 "/>

    <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0 '>

      <div className='col-span-12'>
        <FeaturedProject 
          tittle="Ecommerce-app"
          img={ecommerce}
          summary="
          Desarrolle un comercio electrónico de  productos electrónicos y tecnológicos, con las funcionalidades carritos de compras, lading page, filtro. Además de consumo de una API Rest que conecta con la base de datos del stock de la marca. Utilice tecnologías como React, Tailwind CSS, NodeJs, Express, Next JS, Redux, Mongodb.

          Diseñe una plataforma con experiencia de usuario fluida y una arquitectura robusta. Además, aproveché las ventajas de Next.js para optimizar el rendimiento y la carga rápida de la página.
          "   
          link="/"
          github="/"
          type="Proyecto Destacado"     
        />
      </div>
      <div className='col-span-6 sm:col-span-12'>
        <Project 
          tittle="Spider-ATM"
          img={spiderAtm}
          link="/"
          github="/"
          type="Proyecto Destacado"     
        />
        </div>
      <div className='col-span-6 dark:text-white'>
        Comming soon...
      </div>
      <div className='col-span-12'>
        
      </div>
      <div className='col-span-6'>
      
      </div>
      <div className='col-span-6'>
        
      </div>


    </div>

    </Layout>

   </main>

   </> 
  )
}

export default projects