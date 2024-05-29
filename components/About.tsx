import React from 'react'
import { ArrowDownTrayIcon } from "@heroicons/react/20/solid";
import Image from 'next/image';

function About() {
  return (
    <div className='bg-[#02050a] pb-[4rem] pt-[6rem] md:pt[8rem]'>
      <div className='grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto gap-[6rem] items-center'>
        <div>
            <h1 className='text-[20px] font-bold uppercase text-[#55e6a5] mb-[1rem]'>
                ABOUT ME
            </h1>
            <h2 className='text-[25px] md:text-[35px] lg:text-[45px] leading-[2rem] md:leading-[3rem] capitalize mb-[3rem] font-bold text-white'>
                Transforming <span className='text-yellow-400'>Visions</span>
            </h2>
            <div className='mb-[3rem] flex items-center md:space-x-10'>
            <span className="w-[100px] hidden md:block h-[5px] bg-slate-400 rounded-sm"></span>
                <p className='text-[19px] text-slate-300 w-[80%]'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem impedit tenetur eaque doloremque cumque commodi iusto? Dolorem, nemo, quas dolores quidem maiores, molestiae quam nesciunt magnam fugiat sapiente aspernatur voluptas quis hic sed eaque. Nesciunt expedita sint incidunt iure cumque!
                </p>
            </div>
            <button className='px-[2rem] py-[1rem] hover:bg-yellow-400 transition-all duration-200  text-[18px] font-bold uppercase bg-[#55e6a5] text-black flex items-center '>
                <p>Download CV</p>
                <ArrowDownTrayIcon className='w-[4rem] h-[1.7rem] text-black' />
            </button>
        </div>
        <div data-aos="fade-left" className='lg:w-[500px] lg:h-[500px] mx-auto  md:mx-0 mt-[3rem] lg:mt-[0] w-[300px] h-[300px] relative transform scale-x-[-1]'>
            <Image src="/images/about.jpeg" alt="user" layout='fill' objectFit='contain' className='relative z-[11] w-[100%] h-[100%] object-contain rounded-lg' />
            <div className='absolute w-[100%] h-[100%] z-[10] bg-[#55e6a5] bottom-[2rem] left-[-2rem] rounded-lg'></div>
        </div>
      </div>
    </div>
  )
}

export default About
