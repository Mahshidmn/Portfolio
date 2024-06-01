import React from 'react'
import SkillsItem from './SkillsItem';
import SkillsLanguages from './SkillsLanguages';

const Skills = () => {
  return (
    <section id="skills">
        <div className='pt-[8rem] md:pt-[8rem] pb-[5rem] bg-[#02050a] flex flex-col text-center'>
            <div>
                <h1 className='font-bold text-white text-[50px] mb-[2rem] mx-auto'>
                    Skills
                </h1>
            </div>
            <div className='w-[80%] mx-auto pt-[4rem] md:pt-[8rem] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[4rem] items-center text-justify tracking-tighter'>
                <div>
                    <SkillsItem 
                        title="React Developer" 
                        year="2023- 2024" 
                        detail=" As a React Developer, I focus on building responsive and scalable web interfaces using React's component-based architecture. My proficiency extends to JSX, state management, and performance optimization, delivering dynamic solutions that enhance user engagement and meet business needs."                        
                    />
                    <SkillsItem 
                        title="MERN Stack Developer" 
                        year="2023- 2024"
                        detail="As a MERN Stack Developer, I specialize in full-stack solutions utilizing MongoDB, Express.js, React, and Node.js. My skills range from developing RESTful APIs, managing databases, and handling server-side logic to crafting dynamic and interactive front-ends, ensuring comprehensive development that drives efficient and robust web applications."
                    />
                    <SkillsLanguages 
                        skill1="Node Js"
                        skill2="MongoDB"
                        skill3="JavaScript"
                        level1="[91%]"
                        level2="[88%]"
                        level3="[80%]"
                    />
                </div>
                <div>
                    <SkillsItem 
                        title="Next Js Developer" 
                        year="2023- 2024"
                        detail=" As a Next.js Developer, I focus on building server-rendered React applications with Next.js, enhancing performance. My proficiency extends to implementing features like static site generation and server-side rendering, which streamline the user experience and improve load times across highly interactive web platforms."
                    />
                    <SkillsItem 
                        title="Node Js Developer" 
                        year="2023- 2024"
                        detail=" As a Node.js Developer, I focus on crafting scalable server-side applications, creating efficient APIs and managing asynchronous operations. I excel in building robust back-end services that integrate seamlessly with various databases and front-end technologies, ensuring the applications I develop are fast and adept at handling complex business logic."
                    />
                    <SkillsLanguages 
                        skill1="React Js"
                        skill2="Next Js"
                        skill3="TypeScript"
                        level1="[81%]"
                        level2="[78%]"
                        level3="[60%]"
                        />
                </div>
                <div>
                    <SkillsItem 
                        title="Python Developer" 
                        year="2023- 2024"
                        detail=" As a Python Developer, I specialize in building robust back-end systems using Python's extensive libraries. My expertise includes developing APIs, enhancing web functionalities, and system optimization, enabling me to deliver efficient solutions that improve performance and meet business objectives."
                    />
                    <SkillsItem 
                        title="Django Developer" 
                        year="2023- 2024"
                        detail=" As a Django Developer, I specialize in creating scalable and secure web applications using Django's robust framework. I have experience in developing RESTful APIs, implementing authentication systems, and optimizing database interactions, enabling me to deliver efficient solutions that enhance performance and meet business goals."
                    />
                    <SkillsLanguages 
                        skill1="Python"
                        skill2="Django"
                        skill3="PostgreSQL"
                        level1="[81%]"
                        level2="[78%]"
                        level3="[60%]"
                    />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills;
