import React from 'react';
import Particle from './Particle';
import TextEffect from './TextEffect';
import Image from 'next/image';
import { ArrowDownTrayIcon, PlayCircleIcon } from '@heroicons/react/16/solid';

const Hero = () => {
  return (
    <section id="home">
        <div className="h-[88vh] bg-[url('/images/banner.jpg')] mt-[10vh] bg-cover bg-center">
            <Particle />
            <div className="w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[7rem] h-[100%] items-center">
                <div>
                    <h1 className='text-[#c4cfde] mb-[1.3rem]'>Welcome To My World</h1>
                    <h1 className='text-[35px] md:text-[45px] text-white font-bold'>
                    Hi, I'm <span className='text-yellow-400'>Mahshid!</span>
                    </h1>
                    <TextEffect />
                    <p className='mt-[1.5rem] text-[18px] text-[#ffffff92] '>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, ipsam, eum sunt eligendi in quas explicabo blanditiis, quo fuga doloremque soluta! Nemo error velit eius.
                    </p>
                    <div className='mt-[2rem] flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6'>
                        <button className='px-[2rem] py-[1rem] hover:bg-yellow-400 transition-all duration-200  text-[18px] font-bold uppercase bg-blue-500 text-black flex items-center rounded-xl'>
                        <a href="./Mahshid_CV_SE.pdf" target="_blank">Download CV</a>
                        <ArrowDownTrayIcon className='w-[4rem] h-[1.7rem] text-black' />
                        </button>
                        {/* <button className='flex items-center space-x-2'>
                        <PlayCircleIcon className='w-[4rem] h-[4rem] hover:text-yellow-400 transition-all duration-200 text-[#55e6a5]' />
                        <p className='text-[20px] font-semibold text-white'>
                            Watch The Video
                        </p>
                        </button> */}
                    </div>
                </div>
                <div className=' w-[400px] h-[400px] hidden bg-[#55e6a5] relative lg:flex items-center rounded-full transform scale-x-[-1]'>
                    <Image src="/images/about.jpeg" alt="user" layout="fill" className="object-cover rounded-full" />
                </div>
            </div>     
        </div>
        
    </section>
  ) 
};

export default Hero;
