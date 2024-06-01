import { XMarkIcon } from '@heroicons/react/16/solid';
import React from 'react';

interface Props {
    nav: Boolean;
    closeNav: () => void;
}

const MobileNav = ({ nav, closeNav }: Props) => {
    const navAnimation = nav ? "translate-x-0" : "translate-x-[-100%]";

    const handleNavClick = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
            closeNav();
        }
    };

    return (
        <div className={`fixed ${navAnimation} transform transition-all duration-300 top-0 left-0 right-0 bottom-0 z-[1000000] bg-[#09101a]`}>
            <div className='w-[100vw] h-[100vh] flex flex-col items-center justify-center'>
                <div className='nav-link-mobile' onClick={() => handleNavClick('home')}>HOME</div>
                <div className='nav-link-mobile' onClick={() => handleNavClick('about')}>ABOUT</div>
                <div className='nav-link-mobile' onClick={() => handleNavClick('services')}>SERVICES</div>
                <div className='nav-link-mobile' onClick={() => handleNavClick('skills')}>SKILLS</div>
                <div className='nav-link-mobile' onClick={() => handleNavClick('projects')}>PROJECTS</div>
                <div className='nav-link-mobile' onClick={() => handleNavClick('footer')}>CONTACT</div>
            </div>
            <div onClick={closeNav} className='absolute z-[100000000] cursor-pointer top-[2rem] right-[2rem] w-[2rem] h-[2rem] text-yellow-400'>
                <XMarkIcon />
            </div>
        </div>
    );
};

export default MobileNav;
