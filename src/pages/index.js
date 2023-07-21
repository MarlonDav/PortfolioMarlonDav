import Image from 'next/image'
import NavBar from '@/components/NavBar'
import Layout from '@/components/Layout'
import HireMe from '@/components/HireMe'
import pic1 from '../../public/images/pic.png'
import pic3 from '../../public/images/pic3.png'
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import {HiOutlineExternalLink} from 'react-icons/hi'
import Head from 'next/head'
import TransitionEffect from '@/components/TransitionEffect'


export default function Home() {
  return (
    
      <>
      <Head>
        <title></title>
      </Head>   
      <TransitionEffect/> 
      <main className='flex items-center text-black w-full min-h-screen dark:text-white'>
         <Layout className='pt-0 md:pt-16 sm:pt-8'>        
         <div className='flex items-center justify-between w-full md:flex-col'>
          <div className='w-1/2 '>
            <Image src={pic1} alt="marlon" className='w-auto h-auto md:inline-block'
            priority
            sizes="100vw"
        style={{
          width: '70%',
          height: 'auto',
        }}
            />
         </div>
          <div className='w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center'>
          
          <AnimatedText text="El poder de la creatividad digital plasmado en tu sitio web." className='!text-xl !text-left
          xl:!text-4xl lg:!text-center lg:!text-3xl md:!text-2xl sm:!text-xl
          '/>
            <p className='my-4 text-base font-medium md:text-sm sm:text-xs  '>
            Me considero un mago del desarrollo web, mezclando ingredientes como HTML, CSS, JavaScript, React y Node.js en mi caldero digital. 
            ¡Dejo mi huella creativa y divertida en cada proyecto que toco, creando experiencias mágicas en la web!
            </p>
            <div className='flex items-center self-start mt-2 lg:self-center '>
              <Link href="" target={"_blank"}
              className='flex items-center bg-black text-lime-50 px-2.5 rounded-lg text-lg font-semibold hover:bg-white hover:text-black 
              border border-solid border-transparent hover:border-black dark:bg-white dark:text-black hover:dark:bg-black hover:dark:text-white
              hover:dark:border-white md:p-2 md:px-4 md:text-base
              '
              download={true}
              >Hoja de vida    <HiOutlineExternalLink className={"w-6 ml-1"}/> </Link>
              <Link href="mailto:marlon.bernal.riveros@gmail.com" target={"_blank"} 
              className='ml-4 text-lg font-medium capitalize text-black underline dark:text-white'
              >Contacto</Link>
            </div>
        </div>
      </div>

      </Layout>
      </main>
       
      <HireMe/>
     

    </>
    
  )
}
