import { UserCircle } from 'lucide-react';

const ChatMessaeCard = ({ name, message }) => {
  return (
    <div className='flex items-center text-sm gap-2 mb-2'>
      <UserCircle />
      <p className='font-bold'>{name}</p>
      <p>{message}</p>
    </div>
  );
};

export default ChatMessaeCard;
