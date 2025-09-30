import React, { useEffect, useState } from 'react';
import { YOUTUBE_VIDEOS_API } from '../utils/constants';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  console.log("🚀 ~ VideoContainer ~ videos:", videos[0]);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    setVideos(json.items);
  }

  useEffect(() => {
    getVideos();
  }, [])

  return (
    <div className='mt-4 grid grid-cols-5 max-[1350px]:grid-cols-4 max-[1024px]:grid-cols-3 gap-6'>
      {videos.map((video) => (
        <Link className='h-full' key={video.id} to={"/watch?v=" + video.id}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;