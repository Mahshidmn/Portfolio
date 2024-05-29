

import { EnvelopeIcon, LinkIcon } from '@heroicons/react/16/solid';
import { CodeBracketIcon } from '@heroicons/react/24/solid';
import React from 'react'

const Footer = () => {
  return (
    <div className='pt-[8rem] pb-[4rem] bg-[#02050a]'>
        <div className='grid border-b-[1px] pb-[6rm] border-gray-400 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-[3rem]'>
            <div className='flex items-center justify-center space-x-6 py-[2rem] ml-[4rem]'>
                <div className='md:w-[6.5rem] md:h-[6.5rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-[#55e6a5]'>
                    <EnvelopeIcon className='md:w-[4rem] md:h-[4rem] w-[3.5rem] h-[3.5rem] text-black' />
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
            <div className='flex items-center space-x-6 py-[2rem]'>
                <div className='md:w-[6.5rem] md:h-[6.5rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-[#55e6a5]'>
                    <LinkIcon className='md:w-[4rem] md:h-[4rem] w-[3.5rem] h-[3.5rem] text-black' />
                </div>
                <div>
                    <h1 className='text-[25px] mb-[0.2rem] font-bold text-white'>
                        Linked in
                    </h1>
                    <p className='text-[17px] w-[90%] text-white opacity-60'>
                        www.linkedin.com/in/mahshidmnaeini
                    </p>
                </div>
            </div>
            <div className='flex items-center space-x-6 py-[2rem]'>
                <div className='md:w-[6.5rem] md:h-[6.5rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-[#55e6a5]'>
                    <CodeBracketIcon className='md:w-[4rem] md:h-[4rem] w-[3.5rem] h-[3.5rem] text-black' />
                </div>
                <div>
                    <h1 className='text-[25px] mb-[0.2rem] font-bold text-white'>
                        Github
                    </h1>
                    <p className='text-[17px] w-[90%] text-white opacity-60'>
                        www.github.com/Mahshidmn
                    </p>
                </div>
            </div>
        </div>
        <div className='w-[80%] mt-[1rem] mb-[-3rem] mx-auto grid grid-cols-1 md:grid-cols-2 items-center justify-between whitespace-nowrap '>
                <div className='text-[16px] mb-[2rem] md:mb-0 text-white opacity-50'>
                    MNWEB 2024 | all Rights Reserved
                </div>
                <div className='flex items-center space-x-10 text-white pl-[10rem]'>
                    <p className='text-[16px] text-white opacity-50'>Terms & Condition</p>
                    <p className='text-[16px] text-white opacity-50'>Privacy Policy</p>
                    <p className='text-[16px] text-white opacity-50'>Sitemap</p>
                </div>
            </div>
    </div>
  );
};

export default Footer;
