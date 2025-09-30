import React from 'react';
import { useSearchParams } from 'react-router-dom';

const WatchPage = () => {

  const [searchParams] = useSearchParams();

  return (
    <div className='grid grid-cols-3 p-4 gap-4'>
      <div className='col-span-2'>
        <iframe src={'https://www.youtube.com/embed/' + searchParams.get("v")} className='w-full h-[500px]'></iframe>
      </div>
    </div>
  );
};

export default WatchPage;