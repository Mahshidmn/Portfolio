import React from 'react'
import Image from 'next/image'

const Perojects = () => {
  return (
    <div className='bg-[#121121] pt-[4rem] md:pt-[8rem] pb-[5rem] flex flex-col text-center'>
        <div>
            <h1 className='font-bold text-white text-[30px] mb-[2rem] mx-auto'>
                Pro<span className='text-yellow-400'>Jects</span>
            </h1>
            <div className='w-[80%] h-[100%] pt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem]'>
                <div data-aos="fade-up">
                    <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-300 relative w-[100%] h-[200px] md:h-[300px]'>
                        <Image
                            src="/images/p2.png"
                            alt="project1"
                            layout="fill"
                            
                        />
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-delay="300">
                    <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-300 relative w-[100%] h-[200px] md:h-[300px]'>
                        <Image
                            src="/images/p3.png"
                            alt="project1"
                            layout="fill"
                            
                        />
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-delay="600">
                    <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-300 relative w-[100%] h-[200px] md:h-[300px]'>
                        <Image
                            src="/images/p4.png"
                            alt="project1"
                            layout="fill"
                            
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Perojects;
