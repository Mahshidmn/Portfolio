import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <section id="projects">
        <div className='pt-[8rem] pb-[3rem] bg-gray-900'>
        <div className='text-center'>
            {/* <p className='text-[#d3d2d2] text-[20px]'> Recent Works</p> */}
            <h1 className='font-bold text-white text-[50px] mb-[4rem] mx-auto'>My  Recent <span className='text-yellow-300'>Projects</span></h1>
        </div>
        <div data-aos="fade-up">
            <ProjectCard 
                title="Workout Tracker" 
                description="A workout tracker app, designed to enhance fitness journeys by offering platform for recording and tracking workout sessions. Featuring CRUD systems and MVC architecture, Google OAuth, Mongoos ODM library."
                tech1="Node Js" 
                tech2="Express Js" 
                tech3="MongoDB" 
                tech4="Bootsrap"
                image="/images/p2.png"
                github="https://github.com/Mahshidmn/mongoose-workout"
                demo="https://workout-track-aea60d7f6624.herokuapp.com"
            />
        </div>
        <div data-aos="fade-up" data-aos-delay="300">
            <ProjectCard 
                title="Travel WikiMedia" 
                description=" Travel Blog Web App, was built as a group project, It is a social media app that is focused on Travelling. Featuring CRUD systems and MVC architecture implemented with JavaScript and MERN stack development, Google Map and REST Country API, User authentication and authorization."
                tech1="React" 
                tech2="Node Js" 
                tech3="Express Js" 
                tech4="MongoDB"
                image="/images/p3.png"
                github="https://github.com/Mahshidmn/travel-blog"
                demo="https://travel-wikkimedia-e201bd728fb6.herokuapp.com/"
            />
        </div>
        <div data-aos="fade-up" data-aos-delay="600">
            <ProjectCard 
                title="JobFrontier" 
                description="Job Portal Web App, a dynamic online platform to bridge the gap between job seekers and recruiters. MVT architecture, Customised user model, User authentication, authorization & admin account, AWS S3 is employed as storage service."
                tech1="Python" 
                tech2="Django" 
                tech3="PostgreSQL" 
                tech4="Tailwind"
                image="/images/p4.png"
                github="https://github.com/Mahshidmn/job-portal"
                demo="https://jobfrontier-66cc5b968814.herokuapp.com/"
            />
        </div>
        </div>
    </section>
  );
};

export default Projects;
