const GOOGLE_API_KEY = "AIzaSyA0X03TgCLj54PhpzrgW0ieJGYx3uNeKuI";

export const YOUTUBE_VIDEOS_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=PK&key=" + GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_API = "https://corsproxy.io/?https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";


export const commentsData = [
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