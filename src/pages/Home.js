import { Link } from 'react-scroll';
import HomeImg from '../img/home/home.png'


const Home = () => {
  return (
    <section className="section">
      {/* text& img wrapper */}
      <div className='container mx-auto h-full relative'>
        <div className='flex flex-col justify-center'>
          {/* text */}
          <div 
            className='w-full pt-36 pb-14 lg:pt-0 
              lg:pb-0 lg:w-auto z-10 lg:absolute 
              flex flex-col justify-center items-center lg:items-start' >
            <h1 className='h1'>
              frontend developer <br/> & ux | ui designer
            </h1>
            <p className='text-[26px] lg:text-[36px]
              font-primary mb-4 lg:mb-12'
            >
              Lima, Perú
            </p>

            <Link to='/contact' className='btn mb-[30px] cursor-pointer'>hire me</Link>
          </div>
          {/* img */}
          <div className='flex justify-end max-h-96 lg:max-h-max'>
            <div className='relative lg:-right-40 overflow-hidden'>
              <img src={ HomeImg } alt='home img' />
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default Home;
