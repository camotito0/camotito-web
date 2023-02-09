import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { transition1 } from '../transitions';
import AboutImg from '../img/about/about.png'
import { CursorContext } from '../context/CursorContext';

const About = () => {
  const { mouseEnterHandle, mouseLeaveHandle } = useContext(CursorContext);
  
  return (
    <motion.section
      initial={{opacity:0, y: '100%'}} 
      animate={{opacity:1, y: 0}} 
      exit={{opacity:0, y: '100%'}}
      transition={transition1}
      className="section"
    >
      <div 
        onMouseEnter={ mouseEnterHandle }
        onMouseLeave={ mouseLeaveHandle }
        className='container mx-auto h-full relative'>
        {/* text & img wrapper */}
        <div 
          className='flex flex-col 
            lg:flex-row h-full items-center justify-center 
            gap-x-24 text-center lg:text-left lg:pt-16'>

          {/* img */}
          <div className='flex-1 max-h-96 lg:max-h-max order-2 
            lg:order-none overflow-hidden '>
            <img src={AboutImg} alt='about img'/>
          </div>

          {/* text */}
          <motion.div
            initial={{opacity:0, y: '-80%'}} 
            animate={{opacity:1, y: 0}} 
            exit={{opacity:0, y: '-80%'}}
            transition={transition1}
            className='flex-1 pt-36 pb-14 lg:pt-0 lg:w-auto z-10 flex-col 
            justify-center items-center lg:items-start'>
            <h1 className='h1'>About me</h1>
            <p className='mb-12 max-w-sm'>
              Egresada de Laboratoria como <b>Frontend Developer 
              y UX/UI Designer</b> de Coderhouse. Conocí la Programación a 
              los 18 años y en el camino descubrí que me apasiona <b>crear, 
              diseñar, desarrollar</b> y llevar de la mano las necesidades del usuario 
              para así plantear soluciones que cubran las mismas.
              <br/>
              <br/>
              Me considero una persona extrovertida, creativa y autodidacta.
            </p>
            <Link to={'/portfolio'} className='btn'>View my works</Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
