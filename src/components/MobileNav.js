import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { IoMdClose } from 'react-icons/io'
import { CgMenuRight } from 'react-icons/cg'

const MobileNav = () => {
  return (
    <nav>
      <div className='text-3xl cursor-pointer'>
        <CgMenuRight/>
      </div>
    </nav>
  );
};

export default MobileNav;
