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
        'React Developer',
        1500, 
        'Next JS Developer',
        1500,
        'Node Js Developer',
        1500,
        'MERN Stack Developer',
        1500,
        'Python Developer',
        1500,
      ]}
      speed={50}
      className='text-[2rem] md:text-[2.5rem] text-blue-500 font-bold'
      repeat={Infinity}
    />
  );
};

export default TextEffect;