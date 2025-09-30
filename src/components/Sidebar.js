import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../utils/appMainSlice';

const Sidebar = () => {

  const sidebar = useSelector(store => store.app.isMenuOpen);
  const dispatch = useDispatch();
  const backDropClose = () => {
    dispatch(toggleMenu())
  }

  return (
    <>
      <div className={`bg-white ${sidebar ? "translate-x-0" : "-translate-x-full"} duration-300 py-5 shadow-md h-screen w-[250px] fixed top-0 z-[2000]`}>
        <ul className='space-y-2 border-b px-10 pb-2'>
          <li>Home</li>
          <li>Shorts</li>
          <li>Videos</li>
          <li>Live</li>
        </ul>
        <h1 className='font-bold text-lg my-2 px-10'>Subscription</h1>
        <ul className='space-y-2 px-10 border-b pb-2'>
          <li>Music</li>
          <li>Sports</li>
          <li>Gaming</li>
          <li>Movies</li>
        </ul>
        <h1 className='font-bold text-lg my-2 px-10'>Watch Later</h1>
        <ul className='space-y-2 border-b px-10 pb-2'>
          <li>Music</li>
          <li>Sports</li>
          <li>Gaming</li>
          <li>Movies</li>
        </ul>
        <ul className='space-y-2 px-10 py-2'>
          <li>Setting</li>
          <li>Report History</li>
          <li>Help</li>
          <li>Send Feedback</li>
        </ul>
      </div>
      {sidebar &&
        <div onClick={backDropClose} className='fixed inset-0 bg-black/50 z-[1500]' />
      }
    </>
  );
};

export default Sidebar;