import React from 'react'
import { ArrowDownTrayIcon } from "@heroicons/react/20/solid";
import Image from 'next/image';

function About() {
  return (
    <section id="about">
      <div className='bg-[#02050a] pb-[4rem] pt-[5rem] md:pt[8rem]'>
        <div className='grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto gap-[6rem] items-center pt-[4rem]'>
          <div data-aos="fade-left" className='lg:w-[500px] lg:h-[500px] mx-auto  md:mx-0 mt-[3rem] lg:mt-[0] w-[300px] h-[300px] relative transform scale-x-[-1] border-1px border-white'>
              <Image src="/images/about.jpeg" alt="user" layout='fill' objectFit='contain' className='relative z-[11] w-[100%] h-[100%] rounded-lg' />
              <div className='absolute w-[100%] h-[100%] z-[10] border-t-[3px] border-l-[3px] border-[#6d98d3] bottom-[2rem] left-[-2rem] rounded-lg px-auto py-auto shadow-md '></div>
          </div>
          <div>
              <h1 className='text-[20px] font-bold text-blue-500 mb-[1rem]'>
                  About Me
              </h1>
              <h2 className='text-[25px] md:text-[35px] lg:text-[45px] leading-[2rem] md:leading-[3rem] capitalize mb-[3rem] font-bold text-white'>
                  Transforming 
                  <span className='text-yellow-400'> Visions</span>
              </h2>
              <div className='mb-[3rem] flex flex-col items-center '>
                  <p className='text-[19px] text-slate-300 w-[100%] text-justify'>
                      Hi, my name is <span className='text-yellow-400'>Mahshid</span>. I am a versatil, self-motivated and highly ambitious Software Engineer based in Australia.
                  </p>
                  <br></br>
                  <p className=' text-[19px] text-slate-300 w-[100%] text-justify'>
                      I hold a PhD in Microelectronics from Universiti Teknologi Malaysia and have work experience as an electronics engineer. Having recently moved to Australia, I encountered limited opportunities in the semiconductor industry, prompting my transition to the field of software development, about which I have always been curious.
                  </p>
                  <br></br>
                  <p className='text-[19px] text-slate-300 w-[100%] text-justify'>
                      I have a wide range of hobbies and passions that keep me happy and motivated. From reading and exercising to enjoying nature, I am always seeking new experiences and love to keep myself engaged in new activities.
                  </p>
                  <br></br>
                  <p className='text-[19px] text-slate-300 w-[100%] text-justify'>
                      I have come to realize that <span className='text-yellow-400'>continuous learning</span> and solving real-world problems provide me with a profound sense of fulfillment. My passion for technology and my desire to continuously push the boundaries of what is possible fuel my enthusiasm. I thrive on using my expertise to positively impact people's lives and deliver significant value to the organizations I serve. Driven by a desire to be recognized as someone creative and instrumental in turning new ideas into practical solutions, I cherish the chance to work alongside a highly creative and open-minded team, where I can grow both personally and professionally.
                  </p>
              </div>
              <button className='px-[2rem] py-[1rem] hover:bg-yellow-400 transition-all duration-200  text-[18px] font-bold uppercase bg-blue-500 text-black flex items-center rounded-xl '>
                  <a href="./Mahshid_CV_SE.pdf" target="_blank">Download CV</a>
                  <ArrowDownTrayIcon className='w-[4rem] h-[1.7rem] text-black' />
              </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
