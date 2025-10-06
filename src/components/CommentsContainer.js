import React from 'react';
import { UserCircle } from 'lucide-react';
import { commentsData } from '../utils/constants';


const Comment = ({ data }) => {
  const { name, text } = data;
  return (
    <div className='flex bg-gray-100 p-2 items-center gap-2 rounded-md my-2'>
      <UserCircle className='shrink-0 h-10 w-10 max-[1024px]:w-6 max-[1024px]:h-6' />
      <div>
        <p className='font-semibold max-[1024px]:text-sm'>{name}</p>
        <p className='text-sm max-[1024px]:text-xs'>{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return (
    <div>
      {comments.map((comment, index) => (
        <div key={index}>
          <Comment data={comment} />
          {comment.replies.length > 0 && (
            <div className='pl-6 max-[1024px]:pl-3 border-l-2 border-gray-400 ml-6 max-[1024px]:ml-3'>
              <CommentsList comments={comment.replies} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

const CommentsContainer = () => {
  return (
    <div>
      <p className='font-bold text-2xl my-5'>Comments</p>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;