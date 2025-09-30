import React from 'react';

const VideoCard = ({ info }) => {

  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className='rounded-lg h-full overflow-hidden shadow-md'>
      <img src={thumbnails.high.url} alt={title} />
      <ul className='p-3'>
        <li className='font-bold'>{title}</li>
        <li className='text-gray-400 text-sm inline mr-3'>{channelTitle}</li>
        <li className='font-medium text-sm inline'>{statistics.viewCount} views</li>
      </ul>
    </div>
  );
};

export default VideoCard;