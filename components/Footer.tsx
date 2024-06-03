

import { EnvelopeIcon, LinkIcon } from '@heroicons/react/16/solid';
import { CodeBracketIcon } from '@heroicons/react/24/solid';
import React from 'react'
import { BsGithub, BsLinkedin } from 'react-icons/bs';

const Footer = () => {
  return (
    <section id="footer">
        <div className='pt-[8rem] md:pt-[8rem] pb-[5rem] bg-[#02050a]'>
            <h1 className='font-bold text-white text-[50px] mb-[3rem] mx-auto text-center'>Contact</h1>
            <div className='flex flex-col pb-[3rem] border-gray-400  sm:ml-[1rem] ml-[2rem] md:ml-[6rem]'>
                <div className='flex items-center justify-start space-x-4 py-[2rem] '>
                    <div className='md:w-[4rem] md:h-[4rem] w-[3rem] h-[3rem] flex items-center justify-center rounded-full bg-yellow-400'>
                        <EnvelopeIcon className='md:w-[2.5rem] md:h-[2.5rem] w-[2rem] h-[2rem] text-black' />
                    </div>
                    <div>
                        <h1 className='text-[25px] mb-[0.2rem] font-bold text-white'>
                            Email
                        </h1>
                        <p className='text-[17px] w-[90%] text-white opacity-60'>
                            ma.mojtabavi@gmail.com
                        </p>
                    </div>
                </div>
                <div className='flex items-center space-x-5 py-[2rem]'>
                    <a href="https://www.linkedin.com/in/mahshidmnaeini" target='_blank'>
                        <div className='md:w-[4rem] md:h-[4rem] w-[2.7rem] h-[2.7rem] ml-[0.1rem] flex items-center justify-center rounded bg-yellow-500'>
                            <BsLinkedin className='md:w-[4rem] md:h-[4rem] w-[2rem] h-[2rem] cursor-pointer' />
                        </div>
                    </a>
                    <div>
                        <h1 className='text-[25px] mb-[0.2rem] font-bold text-white'>
                            LinkedIn
                        </h1>
                        <a href="https://www.linkedin.com/in/mahshidmnaeini" target='_blank' className='text-[17px] w-[90%] text-white opacity-60'>
                            www.linkedin.com/in/mahshidmnaeini
                        </a>
                    </div>
                </div>
                <div className='flex items-center space-x-4 py-[2rem]'>
                    <a href="https://github.com/Mahshidmn" target='_blank'>
                    <div className='md:w-[4rem] md:h-[4rem] w-[3rem] h-[3rem] flex items-center justify-center rounded-full bg-yellow-400'>
                        <BsGithub className='md:w-[4rem] md:h-[4rem] w-[2rem] h-[2rem]' />
                    </div>   
                    </a>
                    <div>
                        <h1 className='text-[25px] mb-[0.2rem] font-bold text-white'>
                            Github
                        </h1>
                        <a href="https://github.com/Mahshidmn" target='_blank' className='text-[17px] w-[90%] text-white opacity-60'>
                            www.github.com/Mahshidmn
                        </a>
                    </div>
                </div>
            </div>
            <div className='border-t-[1px]'>
                <div className='mt-[1rem] mb-[-3rem] mx-auto grid grid-cols-1 md:grid-cols-2 items-center justify-center text-center md:justify-between md:text-left whitespace-nowrap '>
                     <div className='text-[16px] mb-[2rem] md:mb-0 md:ml-[8rem] text-white opacity-50'>
                         Mahshid M.Naeini 2024 | all Rights Reserved
                    </div>
                    <div className='flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-10 text-white md:pl-[10rem]'>
                        <p className='text-[16px] text-white opacity-50'>Terms & Condition</p>
                        <p className='text-[16px] text-white opacity-50'>Privacy Policy</p>
                        <p className='text-[16px] text-white opacity-50'>Sitemap</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Footer;
