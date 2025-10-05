import React from 'react';
import { UserCircle } from 'lucide-react';

const commentsData = [
  {
    name: 'AliTech',
    text: 'This video really helped me understand how caching works in React. Thanks a lot!',
    replies: [
      {
        name: 'CodeWizard',
        text: 'Same here! The example at the end made everything click for me.',
        replies: [
          {
            name: 'AliTech',
            text: 'Yeah, especially the part about memoization and re-renders 👌',
            replies: [
              {
                name: 'DevHelper',
                text: 'Memoization can be confusing at first, but once you see how it improves performance, it’s amazing.',
                replies: [],
              },
            ],
          },
        ],
      },
      {
        name: 'Sara_Dev',
        text: 'I still don’t fully get how the browser cache differs from React’s component cache 😅',
        replies: [
          {
            name: 'AliTech',
            text: 'Good question! Browser cache stores files (like images, scripts), while React caching deals with computed data or components in memory.',
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: 'MuhammadK',
    text: 'Can someone explain why we use Redux if we already have React Context?',
    replies: [
      {
        name: 'ReactNinja',
        text: 'Redux gives more structure and tools for debugging, while Context is simpler but can cause unnecessary re-renders in large apps.',
        replies: [],
      },
    ],
  },
  {
    name: 'FatimaCodes',
    text: 'I tried implementing this caching logic but my data wasn’t updating when I expected. Any idea why?',
    replies: [
      {
        name: 'WebMentor',
        text: 'You probably forgot to invalidate or clear your cache when new data arrived. Make sure to handle that in your useEffect!',
        replies: [
          {
            name: 'FatimaCodes',
            text: 'Ahh makes sense, I didn’t reset the dependency array. Thank you!',
            replies: [
              {
                name: 'WebMentor',
                text: 'Exactly 😊. Small mistake, but easy to fix once you know it.',
                replies: [
                  {
                    name: 'FatimaCodes',
                    text: 'Yep, all working perfectly now!',
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: 'ZainUI',
    text: 'Love how clean the UI is in your demo app. What CSS framework are you using?',
    replies: [
      {
        name: 'AliTech',
        text: 'Thanks! I used Tailwind CSS — super easy to customize and works great with React.',
        replies: [],
      },
    ],
  },
  {
    name: 'RandomViewer',
    text: 'Subscribed! Waiting for your next video on React performance optimization 🔥',
    replies: [],
  },
  {
    name: 'AyeshaDev',
    text: 'This thread helped me understand cache better than any tutorial. Appreciate all of you guys 💪',
    replies: [],
  },
];


const Comment = ({ data }) => {
  const { name, text } = data;
  return (
    <div className='flex bg-gray-100 p-2 items-center gap-2 rounded-md my-2'>
      <UserCircle size={40} className='shrink-0' />
      <div>
        <p className='font-semibold'>{name}</p>
        <p className='text-sm'>{text}</p>
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
            <div className='pl-6 border-l-2 border-gray-400 ml-6'>
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
    <div className='p-4'>
      <p className='font-bold text-2xl my-5'>Comments</p>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
