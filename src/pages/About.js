import { Link } from 'react-router-dom';
import AboutImg from '../img/about/about.png'

const About = () => {
  return (
    <section className="section">
      <div className='container mx-auto h-full relative'>
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
          <div 
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
            <Link to={'/portfolio'} className='btn cursor-pointer'>View my works</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
