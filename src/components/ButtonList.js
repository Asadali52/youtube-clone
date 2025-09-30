import React from "react";

const Button = ({ title }) => (
  <button className="py-1 px-4 shrink-0 rounded-md bg-gray-300 hover:bg-gray-400">
    {title}
  </button>
);

const ButtonList = () => {
  const titles = [
    "All",
    "Gaming",
    "Songs",
    "Live",
    "Soccer",
    "Cricket",
    "Cooking",
    "Valentines",
    "Technology",
    "Travel",
    "Fitness",
    "Movies",
    "Comedy",
    "Education",
    "News",
    "Podcasts",
    "Fashion",
    "Health",
    "Science",
    "History",
    "DIY",
    "Finance",
    "Motivation",
    "Art",
    "Photography",
    "Food",
    "Business",
  ];

  return (
    <div className="flex gap-3.5 items-center overflow-x-scroll scrollbar-hide">
      {titles.map((title, index) => (
        <Button key={index} title={title} />
      ))}
    </div>
  );
};

export default ButtonList;