import React from 'react';

interface Props {
    skill1: string;
    skill2: string;
    skill3: string;
    level1: string;
    level2: string;
    level3: string;
}

const SkillsLanguages = ({
    skill1,
    skill2,
    skill3,
    level1,
    level2,
    level3,

}: Props) => {
  return (
    <div>   
        <div className='relative mb-[3rem]'>
            <h1 className='p-5 w-[100%] uppercase bg-gray-800 text-white rounded-sm text-[20px] font-bold'>
                { skill1 }
            </h1>
            <span className={`w-${level1} bottom-0 h-[6px] absolute bg-[#55e6a5]`}>
            </span>
        </div>
        <div className='relative mb-[3rem]'>
            <h1 className='p-5 w-[100%] uppercase bg-gray-800 text-white rounded-sm text-[20px] font-bold'>
                { skill2 }
            </h1>
            <span className={`w-${level2} bottom-0 h-[6px] absolute bg-[#55e6a5]`}>
            </span>
        </div>
        <div className='relative mb-[3rem]'>
            <h1 className='p-5 w-[100%] uppercase bg-gray-800  text-white rounded-sm text-[20px] font-bold'>
                { skill3 }
            </h1>
            <span className={`w-${level3} bottom-0 h-[6px] absolute bg-[#55e6a5]`}>
            </span>
        </div>
    </div>
  );
};

export default SkillsLanguages;
