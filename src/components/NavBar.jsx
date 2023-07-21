import Link from 'next/link'
import React, { useState } from 'react'
import Logo from './Logo'
import { useRouter } from 'next/router'
import {BsTwitter, BsGithub, BsLinkedin, BsWhatsapp, BsInstagram, BsFillMoonStarsFill, BsFillSunFill} from 'react-icons/bs'
import {RiMoonClearLine} from 'react-icons/ri'
import { motion } from 'framer-motion'
import useThemeSwitcher from './hooks/useThemeSwitcher'

const CustomLink = ({href, tittle, className=""}) => {
 const router = useRouter();

  return(
    <Link href={href} className={`${className} relative group` }>
      {tittle}
      <span className={`
      h-[1px] inline-block w-0 bg-black 
      absolute left-0 -bottom-0.5 
      group-hover:w-full transition-[width] ease duration-300
      ${router.asPath === href ? 'w-full' : 'w-0'}
      dark:bg-white`}
      
      >
        &nbsp;</span>
    </Link>
  ) 
};

const CustomLinkMobile = ({href, tittle, className="", toggle}) => {
  const router = useRouter();
  const handleClick = () => {
    toggle();
    router.push(href)
  }
 
   return(
     <button href={href} className={`${className} relative group my-2` }onClick={handleClick}>
       {tittle}
       <span className={`
       h-[1px] inline-block w-0 bg-white
       absolute left-0 -bottom-0.5 
       group-hover:w-full transition-[width] ease duration-300
       ${router.asPath === href ? 'w-full' : 'w-0'}
       dark:bg-black`}
       
       >
         &nbsp;</span>
     </button>
   ) 
 }

const NavBar = () => {

  const [mode, setMode]= useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = ()=>{
    setIsOpen(!isOpen)
  }


  return (
    <header
    className='w-full px-5 py-8 font-extralight flex items-center justify-between
    dark:text-white relative z-10 lg:px-16 md:px-12 sm:px-8
    '
    >
      <button className='flex-col justify-center items-center hidden md:flex' onClick={handleClick}>
        <span className={`bg-black dark:bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm  ${isOpen ? 'rotate-45 translate-y-0' : '-translate-y-0.5'}`}></span>
        <span className={`bg-black dark:bg-white block transition-all duration-300 ease-out  h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
        <span className={`bg-black dark:bg-white block transition-all duration-300 ease-out  h-0.5 w-6 rounded-sm  ${isOpen ? '-rotate-45 -translate-y-2' : 'translate-y-0.5'}`}></span>
      </button>
    
     <div className='w-full flex justify-between items-center md:hidden'>
     <nav>
        <CustomLink href="/" tittle="Home" className='mr-4'/>
        <CustomLink href="/about" tittle="About" className='mx-4'/>
        <CustomLink href="/projects" tittle="Projects" className='mx-4'/>
      </nav>
      
     
        <nav className='flex item-center justify-center flex-wrap'>
          <motion.a href="https://www.instagram.com/" target={"_blank"}
            whileHover={{y:-2}}
            className='w-6 mr-3'
          > 
          <BsInstagram/></motion.a>
          <motion.a href="https://github.com/MarlonDav" target={"_blank"}
            whileHover={{y:-2}}
            whileTap={{scale:0.9}}
            className='w-6 mr-3'
          >
            <BsGithub/>
            </motion.a>
          <motion.a href="https://www.linkedin.com/in/marlon-david-bernal-riveros-desarrollador/" target={"_blank"}
            whileHover={{y:-2}}
            whileTap={{scale:0.9}}
            className='w-6 mr-3'
           
          >
            <BsLinkedin/>
            </motion.a>
          <motion.a href="https://web.whatsapp.com/" target={"_blank"}
            whileHover={{y:-2}}
            whileTap={{scale:0.9}}
            className='w-6 mr-3'
          >
            <BsWhatsapp/>
          </motion.a>
          <button
          onClick={() => setMode(mode === "light" ? "dark" : "light")}
          
          className={`flex items-center justify-center 
          ${mode === "light" ? " text-white" : " text-white" }
          `}
          >
          {
            mode === "dark" ? 
            <BsFillSunFill className={"fill-white"} /> 
            : <RiMoonClearLine className={"fill-black"} />

          }
          </button>
    
        </nav>
     </div>

     {
      isOpen ? 
      <motion.div
        initial={{scale:0, opacity:0, x:"-50%", y:"-50%"}}
        animate={{scale:1, opacity:1}}    
      className='min-w-[70vw] flex flex-col justify-between z-30 items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
      bg-black/75 dark:bg-white/75 rounded-md backdrop-blur-sm py-32 text-white dark:text-black
      '>
      <nav className='flex items-center flex-col justify-center'>
         <CustomLinkMobile href="/" tittle="Home" className=''  toggle={handleClick}/>
         < CustomLinkMobile href="/about" tittle="About" className='' toggle={handleClick} />
         <CustomLinkMobile href="/projects" tittle="Projects" className='' toggle={handleClick} />
       </nav>
       
      
         <nav className='flex item-center justify-center flex-wrap mt-2'>
           <motion.a href="https://www.instagram.com/" target={"_blank"}
             whileHover={{y:-2}}
             className='w-6 mr-3 xs:mx-1'
           > 
           <BsInstagram/></motion.a>
           <motion.a href="https://github.com/MarlonDav" target={"_blank"}
             whileHover={{y:-2}}
             whileTap={{scale:0.9}}
             className='w-6 mr-3 xs:mx-1'
           >
             <BsGithub/>
             </motion.a>
           <motion.a href="https://www.linkedin.com/in/marlon-david-bernal-riveros-desarrollador/" target={"_blank"}
             whileHover={{y:-2}}
             whileTap={{scale:0.9}}
             className='w-6 mr-3 xs:mx-1'
            
           >
             <BsLinkedin/>
             </motion.a>
           <motion.a href="https://web.whatsapp.com/" target={"_blank"}
             whileHover={{y:-2}}
             whileTap={{scale:0.9}}
             className='w-6 mr-3 md:mx-1'
           >
             <BsWhatsapp/>
           </motion.a>
           <button
           onClick={() => setMode(mode === "light" ? "dark" : "light")}
           
           className={`flex items-center justify-center 
           ${mode === "light" ? " text-white" : " text-white" }
           `}
           >
           {
             mode === "dark" ? 
             <BsFillSunFill className={"fill-black"} /> 
             : <RiMoonClearLine className={"fill-white"} />
 
           }
           </button>
     
         </nav>
      </motion.div>
      :null
     }
    

        <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
        <Logo/>
        </div>
      </header>
  )
}

export default NavBar