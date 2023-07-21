import React from 'react'
import { motion } from 'framer-motion'

const Skill = ({name, x, y  }) => {

return(
    <motion.div className='flex items-center justify-center rounded-full font-semibold bg-black text-white
    py-3 px-6 shadow-black cursor-pointer absolute dark:text-black dark:bg-white lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent
    xs:text-black xs:dark:text-white xs:font-bold
    '
    whileHover={{scale:1.05}}
    initial={{x:0, y:0}}
    whileInView={{ x:x, y:y, transition: {duration: 1.5} }}
    viewport={{ once: true }}
    >
       { name }
    </motion.div>

)
}
const Skills = () => {
  return (
    <>
        <h2 className='font-bold text-4xl mt-28 w-full text-center md:text-3xl md:mt-14'> Skills</h2>
        <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark
        lg:h-[80vh] sm:h-[60vh] xs:h-[50vh]
        lg:bg-circularLightLg lg:dark:bg-circularDarkLg
        md:bg-circularLightMd md:dark:bg-circularDarkMd
        sm:bg-circularLightSm sm:dark:bg-circularDarkSm
        '>

            <motion.div className='flex items-center justify-center rounded-full font-semibold bg-black text-white
            p-8 shadow-black cursor-pointer dark:text-black dark:bg-white lg:p-6 md:p-4 xs:text-xs xs:p-2
            '
            whileHover={{scale:1.05}}
           
            >
               Web 
            </motion.div>

            <Skill name="CSS" x="-5vw" y="-10vw"/>
            <Skill name="HTML" x="-30vw" y="2vw"/>
            <Skill name="JavaScript" x="20vw" y="6vw"/>
            <Skill name="ReactJS" x="-7vw" y="10Svw"/>
            <Skill name="NextJS" x="-18vw" y="-14vw"/>
            <Skill name="NodeJS" x="19vw" y="-13vw"/>
            <Skill name="Express" x="30vw" y="-5vw"/>
            <Skill name="TailwindCSS" x="0vw" y="-22vw"/>
            <Skill name="MongoDB" x="-25vw" y="18vw"/>
            <Skill name="PosgreSQL" x="18vw" y="18vw"/>




        </div>
    </>
  )
}

export default Skills