import React, { useEffect, useRef } from 'react'
import NavBar from '@/components/NavBar'
import Head from 'next/head'
import Image from 'next/image'
import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import profilepic from '../../public/images/profilepic.png'
import { useMotionValue, useSpring, useInView } from 'framer-motion'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import TransitionEffect from '@/components/TransitionEffect'



const  AnimatedNumbers = ({value}) => {
const ref = useRef(null);

const motionValue = useMotionValue(0);
const springValue = useSpring(motionValue, { duration: 3000})
const isInView = useInView(ref);

useEffect(() => {
if(isInView){
  motionValue.set(value);
}
}, [isInView, value, motionValue])

useEffect(() => {
  springValue.on("change", (latest)=> {
    if(ref.current && latest.toFixed(0) <= value ){
      ref.current.textContent = latest.toFixed(0);
    }
  })

},[springValue, value])


  return <span ref={ref}> </span>
}
const about = () => {
  return (
      <div>
       

       <Head>
        <title>MarlonDav | About page</title>
        <meta name="description" content="<NAME>'s personal website." />
       </Head>
       <TransitionEffect/>
       <main className='flex w-full flex-col items-center justify-center dark:text-white'>
        <Layout>
        <AnimatedText text="el viaje de un desarrollador web en busca de la perfección creativa!" className='xl:text-4xl lg:!text-3xl sm:!text-2xl xs:text-xl lg:mb-10 sm:mb-6'></AnimatedText>
        <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>
          <div className='col-span-3 flex flex-col items-start justify-start lg:col-span-4 md:order-2 md:col-span-8'>
            <h2 className='mb-4 text-lg font-bold uppercase text-slate-700 dark:text-white'>Biografia</h2>

            <p className='font-medium'>¡Hola! Soy Marlon Bernal, un apasionado desarrollador web con un deseo incansable de plasmar toda mi creatividad en cada proyecto y trabajo que se me presente. 
              Cuento con un año de experiencia en este campo y disfruto mantenerme actualizado sobre las nuevas tecnologías para poder innovar en cada uno de mis proyectos. 
              Estoy emocionado por las oportunidades que me brinda esta industria y ansío dejar una huella memorable en cada proyecto en el que participe.</p>

            <p className='my-4 font-medium'>Mi enfoque en el desarrollo web va más allá de la funcionalidad. 
            Busco crear experiencias hermosas y agradables para los usuarios, combinando diseño y usabilidad en cada proyecto. 
            Mi objetivo es superar expectativas y ofrecer experiencias memorables en la web.</p>

          </div>
<div className='col-span-3  relative h-max rounded-2xl border-2 border-solid border-black bg-white p-8 lg:col-span-4 md:order-1 md:col-span-8'>
  <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-black'/>
  <Image src={profilepic} alt="MarlonDav" className='w-full h-auto rounded-2xl   ' 
  
  ></Image>

</div>
<div className='col-span-2 flex flex-col items-end justify-between xl:col-span-8 lg:flex-row md:order-3'>

    <div className='flex flex-col items-end justify-center xl:items-center'> 
      <span className='inline-block text-4xl font-bold md:text-3xl sm:text-2xl xs:text-xl'>
       <AnimatedNumbers value={2}/> +
      </span>
      <h2 className='text-[17px] font-medium capitalize text-black  dark:text-white xl:text-center md:text-lg sm:text-base xs:text-sm'>Clientes satisfechos</h2>
    </div>

    <div className='flex flex-col items-end justify-center xl:items-center'>
      <span className='inline-block text-4xl font-bold md:text-3xl sm:text-2xl xs:text-xl'>
        <AnimatedNumbers value={ 10 }/> +
      </span>
      <h2 className='text-[15px] font-medium capitalize text-black  dark:text-white xl:text-center md:text-lg sm:text-base xs:text-sm'>Proyectos completados</h2>
    </div>

    <div className='flex flex-col items-end justify-center xl:items-center'>
      <span className='inline-block text-4xl font-bold  md:text-3xl sm:text-2xl xs:text-xl'>
        <AnimatedNumbers value={1}/>+
      </span>
      <h2 className='text-[17px] font-medium capitalize text-black  dark:text-white xl:text-center md:text-lg sm:text-base xs:text-sm'>Años de experiencia</h2>
    </div>

</div>

        </div>
        
        <Skills/>
        <Experience/>
        <Education />
        </Layout>
       </main>
     

       

  
  </div>
  )
}

export default about