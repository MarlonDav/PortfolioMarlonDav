import React from 'react'
import { useRef } from 'react'
import {motion, useScroll } from 'framer-motion'
import LiIcon from './LiIcon';

const Details = ({ type, time, place, info }) => {
        const ref = useRef(null)
    return (
    <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'>

            <LiIcon reference={ref}/>

        <motion.div
        initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration:0.5, type:"spring"}}
        >
            <h3 className='capitalize font-bold text-2xl xs:text-lg'>{type}</h3>
            <span className='capitalize font-medium text-black/50 dark:text-white/50 xs:text-sm'>
                {time} | {place}
            </span>
            <p className='font-medium w-full md:text-sm xs:text-sm'>
                {info}
            </p>
        </motion.div>
    </li>
    );
};
const Education = () => {
    const ref = useRef(null)
    const {scrollYProgress} = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )
  return (
    <div className='my-28'>
        <h2 className='font-bold text-4xl mb-14 w-full text-center md:text-3xl xs:text-2xl md:mb-7 '> Education </h2>
        <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>
            <motion.div 
            style={{scaleY: scrollYProgress}}
            className='absolute left-9 top-0 w-[4px] h-full bg-black origin-top dark:bg-white
            md:w-[2px] md:left-[30px] xs:left-[20px]
            ' 
            
            />

            <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
               <Details 
               type="Bootcamp desarrollo web fullstack" 
               time="agosto 2022 - abril 2023"
               place="Protalento en asociacion con DEV.f "
               info="
               Completé un bootcamp donde adquirí habilidades fundamentales para el desarrollo web, centrándome en el front-end con HTML, CSS, JavaScript y React. Además, obtuve conocimientos en el backend utilizando Node.js y Express, junto con el manejo de bases de datos con MongoDB y PostgreSQL. Durante este intenso programa, fui expuesto a diversas tecnologías clave que me permiten crear aplicaciones web completas y funcionales."               
               />
            </ul>

        </div>
    </div>
  )
}

export default Education