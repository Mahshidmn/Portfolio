import { CodeBracketSquareIcon, CommandLineIcon, RocketLaunchIcon } from '@heroicons/react/16/solid'
import React from 'react'

const Services = () => {
  return (
    <section id="services">
        <div className='bg-[#02050a] pt-[8rem] md:pt-[8rem] pb-[5rem] flex flex-col'>
            <p className='font-bold text-white text-[50px] mb-[5rem] mx-auto'>
                My <span className='text-yellow-400'>Services</span>
            </p>
            <div>       
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] mx-auto items-center gap-[3rem] text-white'>
                    <div data-aos="fade-right">
                        <div className='bg-red-700 hover:scale-110 transform transition-all duration-300 hover:-rotate-6 font-semibold text-center p-[2rem]'>
                            <CodeBracketSquareIcon className='w-[4rem] h-[6rem] mx-auto text-[#d3fae8]' />
                            <h1 className='text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]'>
                                Frontend
                            </h1>
                            <p className='text-[15px] text-[#d3d2d2] font-normal tracking-tighter text-justify'>
                            Utilizing React, Next.js, JavaScript/TypeScript, Tailwind, and Bootstrap, our frontend development services focus is to create responsive, high-performance websites. I deliver user-friendly designs that enhance engagement and drive business growth, ensuring a visually appealing and interactive experience across all platforms..
                            </p>
                        </div>
                    </div>
                    <div data-aos="zoom-in" data-aos-delay="300">
                        <div className='bg-orange-700 hover:scale-110 transform transition-all duration-300 hover:-rotate-6 font-semibold text-center p-[2rem]'>
                            <RocketLaunchIcon className='w-[4rem] h-[6rem] mx-auto text-[#d3fae8]' />
                            <h1 className='text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]'>
                                Backend
                            </h1>
                            <p className='text-[15px] text-[#d3d2d2] font-normal text-justify'>
                                Backend development services leverages Node.js, Python, and both SQL and No-SQL databases to build reliable and efficient server-side solutions. I focus on constructing scalable architectures that support smooth data operations and consistent performance, laying a solid foundation for digital infrastructures.
                            </p>
                        </div>
                    </div>
                    <div data-aos="fade-left" data-aos-delay="600">
                        <div className='bg-blue-700 hover:scale-110 transform transition-all duration-300 hover:-rotate-6 font-semibold text-center p-[2rem]'>
                            <CommandLineIcon className='w-[4rem] h-[6rem] mx-auto text-[#d3fae8]' />
                            <h1 className='text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]'>
                                Full Stack
                            </h1>
                            <p className='text-[15px] text-[#d3d2d2] font-normal tracking-tighter text-justify'>
                            Leveraging cutting-edge technologies, our full-stack development services combine frontend expertise in React and Next.js with backend proficiency in Node.js, MongoDB, PostgreSQL, and Python. This integration ensures robust, scalable, and efficient full-cycle development solutions that meet complex business needs effectively.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Services;
