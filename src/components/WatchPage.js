import React from 'react';
import { useSearchParams } from 'react-router-dom';
import CommentsContainer from './CommentsContainer';

const WatchPage = () => {

  const [searchParams] = useSearchParams();

  return (
    <div className='grid grid-cols-3 p-4 gap-4'>
      <div className='col-span-2'>
        <iframe title={searchParams.get("v")} src={'https://www.youtube.com/embed/' + searchParams.get("v")} className='w-full h-[500px]'></iframe>
        <CommentsContainer />
      </div>
    </div>
  );
};

export default WatchPage;