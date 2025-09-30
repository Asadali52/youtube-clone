import React from 'react';

import { Menu, CircleUser, Search } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../utils/appMainSlice';
import { Link } from 'react-router-dom';

const Head = () => {

  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  }

  return (
    <div className='px-[3%] py-1 bg-white flex justify-between items-center shadow-md sticky top-0 z-[1000]'>
      <div className='flex items-center gap-4'>
        <Menu onClick={toggleMenuHandler} size={20} className='cursor-pointer' />
        {/* <Link to={"/"}> */}
          <img src='https://logos-world.net/wp-content/uploads/2020/06/YouTube-Logo-2017.png' alt='logo' width={110} />
        {/* </Link> */}
      </div>

      <div className='flex items-center'>
        <input placeholder='search' type="text" className='border rounded-l-full border-r-0 py-2 px-4 border-gray-400 outline-none w-[400px] max-[900px]:w-[280px]' />
        <button className='border border-gray-400 py-2.5 px-4 text-sm rounded-r-full bg-gray-300'>
          <Search size={20} />
        </button>
      </div>

      <div>
        <CircleUser size={28} />
      </div>
    </div>
  );
};

export default Head;