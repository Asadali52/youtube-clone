import React from 'react';
import { useSearchParams } from 'react-router-dom';
import CommentsContainer from './CommentsContainer';
import LiveChat from './LiveChat';

const WatchPage = () => {

  const [searchParams] = useSearchParams();

  return (
    <div className='p-4'>
      <div className='grid grid-cols-3 max-[1150px]:grid-cols-1 gap-4'>
        <div className='col-span-2 max-[1150px]:col-span-1'>
          <iframe title={searchParams.get("v")} src={'https://www.youtube.com/embed/' + searchParams.get("v")} className='w-full h-[500px]'></iframe>
        </div>
        <LiveChat />
      </div>
      <div className='grid grid-cols-3 gap-4'>
        <div className='col-span-2 max-[1150px]:col-span-3'>
          <CommentsContainer />
        </div>
      </div>
    </div>
  );
};

export default WatchPage;