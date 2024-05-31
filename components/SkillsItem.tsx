import React from 'react';

interface Props {
    title: string;
    year: string;
    detail : string;
}

const SkillsItem = ({ title, year, detail}: Props) => {
  return (
    <div className='mb-[4rem] md:mb-[8rem]'>
      <span className='px-[2rem] text-blue-500 py-[0.9rem] font-bold text-[18px] border-[2px] border-blue-500'>
        { year }
      </span>
      <h1 className='mt-[2rem] font-semibold mb-[1rem] text-[20px] sm:text-[25px] md:text-[30px] text-white whitespace-nowrap'>
        { title }
      </h1>
      <p className='text-[#aaaaaa] font-normal text-[17px] opacity-80'>
            {detail}
      </p>
    </div>
  )
}

export default SkillsItem;
