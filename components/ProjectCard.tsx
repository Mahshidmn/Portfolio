import React from 'react';
import Image from 'next/image';
import { BsArrowUpRightSquare, BsGithub } from 'react-icons/bs';


interface Props {
    image: string;
    title: string;
    tech1: string;
    tech2: string;
    tech3: string;
    tech4: string;
    github: string;
    demo: string;
    description: string
}

function ProjectCard({image, title, tech1, tech2, tech3, tech4, github, demo, description }: Props) {
  return (
    <div className='grid w-[80%] mx-auto pt-[3rem] grid-cols-1 lg:grid-cols-2 gap-10 items-center'>
       <div className='p-4 rounded-x1 relative cursor-pointer hover:-translate-y-6 transform transition-allduration-200 bg-gray-800 shadow-md'>
            <Image 
                src={`${image}`} 
                alt={title} 
                width={500} 
                height={500} 
                className='object contain rounded-x1 mx-auto shadow-md' 
            />
       </div>
       <div>
            <div className='flex justify-start'>
                <h1 className='text-[25px] text-white'>{title}</h1>
                    <a href={github} target="_blank">
                        <BsGithub
                            size={40}
                            className='hover:-translate-y-1 transition-transform cursor-pointer ml-[2rem] bg-white rounded-lg'
                        />
                    </a>
                    <a href={demo} target="_blank">
                        <BsArrowUpRightSquare
                            size={40}
                            className='hover:-translate-y-1 transition-transform cursor-pointer ml-[1rem] bg-white rounded-lg'
                        />
                    </a>
            </div>
            <p className='text-white opacity-65 text-[15px] mt-[1rem] text-justify'>
                { description }
            </p>
            <div className='mt-[1.5rem] grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-[1rem] text-center whitespace-nowrap'>
                <h1 className='px-6 py-3 bg-blue-700 text-white rounded-lg text-center'>
                    {tech1}
                </h1>
                <h1 className='px-6 py-3 bg-white text-black rounded-lg text-center'>
                    {tech2}
                </h1>
                <h1 className='px-6 py-3 bg-sky-500 text-black rounded-lg text-center'>
                    {tech3}
                </h1>
                <h1 className='px-6 py-3 bg-blue-500 text-white rounded-lg text-center'>
                    {tech4}
                </h1>
               
            </div>
        </div>
    </div>
  );
};

export default ProjectCard;
