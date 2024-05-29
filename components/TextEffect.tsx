import { TypeAnimation } from 'react-type-animation';

const TextEffect = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Coder',
        1500, // wait 1s before replacing "Coder" with "Web Developer"
        'Web Developer',
        1500,
        'Designer',
        1500,
        'Programmer',
        1500
      ]}
      speed={50}
      className='text-[2rem] md:text-[2.5rem] text-[#55e6a5] font-bold uppercase'
      repeat={Infinity}
    />
  );
};

export default TextEffect;