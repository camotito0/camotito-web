import Socials from './Socials';
import MobileNav from './MobileNav';
import Logo from '../img/header/logo.svg'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CursorContext } from '../context/CursorContext';


const Header = () => {
  const { mouseEnterHandle, mouseLeaveHandle } =  useContext(CursorContext);
  return (
    <header className='fixed w-full px-[30px]
    lg:px-[100px] z-30 h-[100px] lg:h-[140px] flex items-center'>
      <div className='flex flex-col lg:flex-row lg:items-center w-full justify-between'>

          <Link
            onMouseEnter={ mouseEnterHandle }
            onMouseLeave={ mouseLeaveHandle }
            to={'/'} className='max-w-[200px]' > 
              <img src={Logo} alt='logo img'/>
          </Link>

          <nav
            onMouseEnter={ mouseEnterHandle }
            onMouseLeave={ mouseLeaveHandle }
            className='hidden xl:flex gap-x-12 font-semibold'
          >
            <Link to={'/'} className='text-[#696c6d] hover:text-primary transition' >Home</Link>
            <Link to={'/about'} className='text-[#696c6d] hover:text-primary transition' >About</Link>
            <Link to={'/portfolio'} className='text-[#696c6d] hover:text-primary transition' >Portfolio</Link>
            <Link to={'/contact'} className='text-[#696c6d] hover:text-primary transition' >Contact</Link>
          </nav>

      </div>
          <Socials/>
          <MobileNav/>
    </header>
  );
};

export default Header;
