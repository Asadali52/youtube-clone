import React, { useEffect, useState } from 'react';

import { Menu, CircleUser, Search } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../utils/appMainSlice';
import { YOUTUBE_SEARCH_API } from '../utils/constants';

const Head = () => {

  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(true);
  const [results, setResults] = useState(null);

  const getSearched = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setResults(json[1]);
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchQuery) {
        getSearched();
      }
    }, 300);
    return () => clearInterval(timer);
  }, [searchQuery])

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  }

  return (
    <>
      <div className='py-1 px-[3%] bg-white flex justify-between items-center shadow-md sticky top-0 z-[1000]'>
        <div className='flex items-center gap-4'>
          <Menu onClick={toggleMenuHandler} size={20} className='cursor-pointer' />
          <img src='https://logos-world.net/wp-content/uploads/2020/06/YouTube-Logo-2017.png' alt='logo' width={110} />
        </div>
        <div className='max-[620px]:hidden relative'>
          <div className='flex items-center'>
            <input
              value={searchQuery}
              onBlur={() => setShowSuggestions(false)}
              onFocus={() => setShowSuggestions(true)}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder='search'
              type="text"
              className='border rounded-l-full border-r-0 py-2 px-4 border-gray-400 outline-none w-[400px] max-[900px]:w-[280px]' />
            <button className='border border-gray-400 py-2.5 px-5 text-sm rounded-r-full bg-gray-300'>
              <Search size={20} />
            </button>
          </div>
          {showSuggestions && results &&
            <div className='absolute rounded-lg bg-white shadow-sm w-full overflow-auto space-y-1 border'>
              {results.map((s, i) => (
                <div key={i} className='flex items-center gap-2 px-2 py-1.5 hover:bg-gray-300 hover:cursor-pointer'>
                  <Search size={16} />
                  <p>{s}</p>
                </div>
              ))}
            </div>
          }
        </div>
        <div>
          <CircleUser size={28} />
        </div>
      </div>

      <div className='hidden max-[620px]:block relative  px-[3%] mt-6'>
        <div className='items-center justify-center flex'>
          <input
            value={searchQuery}
            onBlur={() => setShowSuggestions(false)}
            onFocus={() => setShowSuggestions(true)}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder='search'
            type="text"
            className='border rounded-l-full border-r-0 py-2 px-4 border-gray-400 outline-none max-w-[400px] w-full' />
          <button className='border border-gray-400 py-2.5 px-4 text-sm rounded-r-full bg-gray-300'>
            <Search size={20} />
          </button>
        </div>
        {showSuggestions && results &&
          <div className='absolute bg-white shadow-sm w-[96%] rounded-lg max-w-[450px] left-1/2 overflow-hidden -translate-x-1/2 space-y-1 border'>
            {results.map((s, i) => (
              <div key={i} className='flex items-center gap-2 px-2 py-1.5 hover:bg-gray-300 hover:cursor-pointer'>
                <Search size={16} />
                <p>{s}</p>
              </div>
            ))}
          </div>
        }
      </div>
      
    </>
  );
};

export default Head;