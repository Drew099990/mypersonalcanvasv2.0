import React from 'react';

const stories = [
  {
    title: "My portfolio website",
    client: "Self",
    description:
      " created my new portfolio website v2 if you -----------------------------------༼ つ ◕_◕ ༽つMAY ,as the first order of business.",
    date: "july 2025",
  },

];

const Blog = () => {
  return (
    <div className="min-h-[80vh] bg-[#242924] flex flex-col justify-start items-center bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2742%27%20height%3D%2744%27%20viewBox%3D%270%200%2042%2044%27%20xmlns%3D%27http://www.w3.org/2000/svg%27%3E%3Cg%20id%3D%27Page-1%27%20fill%3D%27none%27%20fill-rule%3D%27evenodd%27%3E%3Cg%20id%3D%27brick-wall%27%20fill%3D%27%239C92AC%27%20fill-opacity%3D%270.4%27%3E%3Cpath%20d%3D%27M0%200h42v44H0V0zm1%201h40v20H1V1zM0%2023h20v20H0V23zm22%200h20v20H22V23z%27/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]">
      <h1 className="m-7 max-md:scale-55 bg-red-800/60 font-extrabold text-2xl text-amber-50 z-10 top-35 p-2 border-4 border-[#3f3e3e]">The Brainstorm</h1>
      <div className="grid max-md:m-4 md:grid-cols-2 gap-8 max-w-4xl mx-auto w-fit pb-10">
        {stories.map((story, idx) => (
          <div
            key={idx}
            className="bg-[#2E2E2EFF]/100 text-gray-300 flex border-[#948f8f] border-4 ring-4 ring-black min-h-[220px] min-w-fit rounded-2xl shadow-xl p-6 flex-col justify-between"
          >
            <div>
              <h2 className="text-xl font-bold text-green-200 mb-2 underline underline-offset-4">{story.title}</h2>
              <p className="text-gray-200 mb-1"><span className="font-bold">Client:</span> {story.client}</p>
              <p className="text-gray-300 mb-3">{story.description}</p>
            </div>
            <p className="text-xs text-gray-400 mt-4">{story.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;