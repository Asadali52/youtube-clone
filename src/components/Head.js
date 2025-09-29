import React from 'react';

import { Menu, CircleUser } from 'lucide-react';

const Head = () => {
  return (
    <div className='px-[4%] py-2 flex justify-between items-center shadow-md sticky top-0 z-[1000]'>
      <div className='flex items-center gap-4'>
        <Menu size={20} className='cursor-pointer' />
        <img src='https://logos-world.net/wp-content/uploads/2020/06/YouTube-Logo-2017.png' alt='logo' width={90} />
      </div>

      <div className='flex items-center'>
        <input type="text" className='border border-r-0 border-gray-400 outline-none min-w-[200px] w-[400px]' />
        <button className='border border-gray-400'>Search</button>
      </div>

      <div>
        <CircleUser />
      </div>
    </div>
  );
};

export default Head;