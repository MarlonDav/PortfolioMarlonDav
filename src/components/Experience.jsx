import React from 'react'
import { useRef } from 'react'
import {motion, useScroll } from 'framer-motion'
import LiIcon from './LiIcon';

const Details = ({position, company, companyLink, time, address, work }) => {
        const ref = useRef(null)
    return (
    <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'>

            <LiIcon reference={ref}/>

        <motion.div
        initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration:0.5, type:"spring"}}
        >
            <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>
                {position}&nbsp;<a href={companyLink}
            target="_blank"
            className='text-red-700 capitalize'
            >@{company}</a> </h3>
            <span className='capitalize font-medium text-black/50 dark:text-white/60 xs:text-sm'>
                {time} | {address}
            </span>
            <p className='font-medium w-full md:text-sm'>
                {work}
            </p>
        </motion.div>
    </li>
    );
};
const Experience = () => {
    const ref = useRef(null)
    const {scrollYProgress} = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )
  return (
    <div className='my-28'>
        <h2 className='font-bold text-4xl mb-14 w-full text-center md:text-3xl xs:text-2xl md:mb-7 '> Experience </h2>
        <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>
            <motion.div 
            style={{scaleY: scrollYProgress}}
            className='absolute left-9 top-0 w-[4px] h-full bg-black origin-top dark:bg-white
            md:w-[2px] md:left-[30px] xs:left-[20px]
            '/>

            <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
               <Details 
               position="Desarrollador web" company="Chepelin technology"
               companyLink="https://chepelintechnology.com/"
               time="Mayo-Junio 2023" address="Centro Comercial La 21, local 141"
               work="Realizar mantenimiento y actualización de la base de datos e interfaz del usuario (UI), Optimizar la infraestructura de la página web, para mejorar la velocidad de carga y contribuir a una experiencia de usuario más fluida y eficiente.
        ,Diagnosticar los errores de la arquitectura del interfaz y mejorar el aplicativo basado en la experiencia del usuario."
               />
            </ul>

        </div>
    </div>
  )
}

export default Experience