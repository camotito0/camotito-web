import { Link } from 'react-router-dom';
import '../styles.css'
import Image1 from '../img/portfolio/1.png';
import Image2 from '../img/portfolio/2.png';
import Image3 from '../img/portfolio/3.png';
import Image4 from '../img/portfolio/4.png';
import Image5 from '../img/portfolio/5.png';
import Image6 from '../img/portfolio/6.png';


const Portfolio = () => {
  return  (
    <section className="section">
      <div className='container mx-auto h-full relative '>
        <div className='flex flex-col lg:flex-row h-full 
          items-center justify-start gap-x-24 
          text-center lg:text-left pt-24 lg:pt-36 pb-8'>

          {/* text */}
          <div className='flex flex-col lg:items-start'>
            <h1 className='h1'>Portfolio</h1>
            <p className='mb-12 max-w-sm'>
              Estos son algunos de los proyectos 
              que he realizado y me hacen sentir orgullosa!
            </p>
            <Link to={'/contact'} className='btn mb-[30px] cursor-pointer'>hire me</Link>
          </div>
          
        {/* imgs grid */}
        <div className='grid grid-cols-3 lg:gap-2'>
          {/* imgs */}

            <div className="max-w-[250px] lg:max-w-[320px] h-[187px]
                bg-accent overflow-hidden relative block group">
              <div className="absolute inset-0 w-full group-hover:opacity-50">
                <img className='object-cover h-full lg:h-[220px] 
                  hover:scale-110 transition-all duration-500' 
                  src={Image1} alt='portfolio img 1'
                />
              </div>
              <div className="relative p-10">
                <div>
                  <div className="transition-all transform translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                    <div className="pt">
                    <a href='https://www.behance.net/gallery/133237729/Furisouru-app-de-streming' target='_blank' className="text-white bg-[#050708] focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50  mr-2 mb-2" rel="noreferrer">
                      Open project
                    </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="max-w-[250px] lg:max-w-[320px] h-[187px]
                bg-accent overflow-hidden relative block group">
              <div className="absolute inset-0 w-full group-hover:opacity-50">
                <img className='object-cover h-full lg:h-[220px] 
                  hover:scale-110 transition-all duration-500' 
                  src={Image2} alt='portfolio img 2'
                />
              </div>
              <div className="relative p-10">
                <div>
                  <div className="transition-all transform translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                    <div className="pt">
                    <a href='https://www.behance.net/gallery/133237729/Furisouru-app-de-streming' target='_blank' className="cursor-pointer text-white bg-[#050708] focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50  mr-2 mb-2" rel="noreferrer">
                      Open project
                    </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="max-w-[250px] lg:max-w-[320px] h-[187px]
                bg-accent overflow-hidden relative block group">
              <div className="absolute inset-0 w-full group-hover:opacity-50">
                <img className='object-cover h-full lg:h-[220px] 
                  hover:scale-110 transition-all duration-500' 
                  src={Image3} alt='portfolio img 3'
                />
              </div>
              <div className="relative p-10">
                <div>
                  <div className="transition-all transform translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                    <div className="pt">
                    <a href='https://www.behance.net/gallery/133237729/Furisouru-app-de-streming' target='_blank' className="cursor-pointer text-white bg-[#050708] focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50  mr-2 mb-2" rel="noreferrer">
                      Open project
                    </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          
            <div className="max-w-[250px] lg:max-w-[320px] h-[187px]
                bg-accent overflow-hidden relative block group">
              <div className="absolute inset-0 w-full group-hover:opacity-50">
                <img className='object-cover h-full lg:h-[220px] 
                  hover:scale-110 transition-all duration-500' 
                  src={Image4} alt='portfolio img 4'
                />
              </div>
              <div className="relative p-10">
                <div>
                  <div className="transition-all transform translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                    <div className="pt">
                    <a href='https://www.behance.net/gallery/133237729/Furisouru-app-de-streming' target='_blank' className="text-white bg-[#050708] focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50  mr-2 mb-2" rel="noreferrer">
                      Open project
                    </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="max-w-[250px] lg:max-w-[320px] h-[187px]
                bg-accent overflow-hidden relative block group">
              <div className="absolute inset-0 w-full group-hover:opacity-50">
                <img className='object-cover h-full lg:h-[220px] 
                  hover:scale-110 transition-all duration-500' 
                  src={Image5} alt='portfolio img 5'
                />
              </div>
              <div className="relative p-10">
                <div>
                  <div className="transition-all transform translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                    <div className="pt">
                    <a href='https://www.behance.net/gallery/133237729/Furisouru-app-de-streming' target='_blank' className="cursor-pointer text-white bg-[#050708] focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50  mr-2 mb-2" rel="noreferrer">
                      Open project
                    </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="max-w-[250px] lg:max-w-[320px] h-[187px]
                bg-accent overflow-hidden relative block group">
              <div className="absolute inset-0 w-full group-hover:opacity-50">
                <img className='object-cover h-full lg:h-[220px] 
                  hover:scale-110 transition-all duration-500' 
                  src={Image6} alt='portfolio img 6'
                />
              </div>
              <div className="relative p-10">
                <div>
                  <div className="transition-all transform translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                    <div className="pt">
                    <a href='https://www.behance.net/gallery/133237729/Furisouru-app-de-streming' target='_blank' className="cursor-pointer text-white bg-[#050708] focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50  mr-2 mb-2" rel="noreferrer">
                      Open project
                    </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          
          </div>
          </div>
        </div>
    </section>
  );
};

export default Portfolio;
