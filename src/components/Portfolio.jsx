import React from "react";
import zoom from "../assets/portfolio/zoom.jpg";
import disney from "../assets/portfolio/disney.PNG";
import weather from "../assets/portfolio/weather.png";
import work from "../assets/portfolio/work.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: work,
      href: "https://github.com/S4JN/kaambatao" ,
    },
    {
      id: 2,
      src: weather,
      href: "https://github.com/S4JN/mausam" ,
    },
    {
      id: 3,
      src: disney,
      href: "https://github.com/S4JN/Disney-Plus-clone",
    },
    {
      id: 4,
      src: zoom,
      href: "https://github.com/S4JN/Zoom2.0"
    }
  ];

  return (
    <div
      name="project"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen por"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, href }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                {/* <button className="w-1/2 px-6 py-3 m-4 duration-300 hover:scale-105">
                  Demo
                </button> */}
                <a href={href} target="_blank" className="w-1/2 px-12 py-2 m-4  duration-200 hover:scale-105">Code</a>

                {/* <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
