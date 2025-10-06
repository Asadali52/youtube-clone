import { useEffect, useState } from 'react';
import ChatMessaeCard from './ChatMessaeCard';
import { addMessage } from '../utils/chatSlice';
import { useDispatch, useSelector } from 'react-redux';

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState();
  const dispatch = useDispatch();
  let random_name = require('node-random-name');
  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {

      dispatch(addMessage({
        name: random_name(),
        message: 'i am here in live chat 🚀'
      }))

    }, 1000);

    return () => clearInterval(i)
  }, [])

  const handleSendMessage = (e) => {
    e.preventDefault();
    dispatch(addMessage({
      name: 'Asad ali',
      message: liveMessage
    }))
    setLiveMessage('');
  }

  return (
    <div>
      <div className='border border-gray-400 p-2 bg-gray-100 h-[450px] overflow-y-auto custom-scrollbar flex flex-col-reverse'>
        <div>
          {chatMessages.map((chat) => (
            <ChatMessaeCard
              key={Math.random()}
              name={chat.name}
              message={chat.message}
            />
          ))}
        </div>
      </div>
      <form onSubmit={handleSendMessage} className='flex gap-3 mt-2'>
        <input
          type='text'
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
          className='w-full border outline-none border-gray-400 p-2'
        />
        <button type='submit' className='border-gray-400 bg-gray-400 hover:bg-gray-300 px-4'>Send</button>
      </form>
    </div>
  );
};

export default LiveChat;
