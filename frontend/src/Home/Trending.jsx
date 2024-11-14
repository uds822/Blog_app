import React from "react";
import { useAuth } from "../context/AuthProvider";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Trending() {
  const { blogs } = useAuth();

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="container mx-auto my-8">
      <h1 className="text-3xl font-bold text-indigo-700 mb-6 text-center animate-bounce">
        Trending
      </h1>
      <Carousel responsive={responsive} className="transition-all duration-300 ease-in-out">
        {blogs && blogs.length > 0 ? (
          blogs.slice(0, 6).map((element) => {
            return (
              <div
                key={element._id}
                className="p-4 bg-white border border-gray-300 rounded-lg shadow-lg mx-2 transition-transform duration-200 hover:scale-105 hover:shadow-2xl"
              >
                <Link to={`/blog/${element._id}`}>
                  <div className="relative group">
                    <img
                      src={element.blogImage.url}
                      alt="blog"
                      className="w-full h-56 object-cover rounded-t-lg transition-opacity duration-300 group-hover:opacity-90"
                    />
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {element.category}
                    </div>
                  </div>
                  <div className="p-4 bg-gray-100 rounded-b-lg h-36 flex flex-col justify-between transition-colors duration-300 hover:bg-gray-200">
                    <h1
                      className="text-lg font-bold text-gray-800 mb-2 truncate hover:text-indigo-600 transition-colors"
                      style={{ whiteSpace: "nowrap" }}
                    >
                      {element.title}
                    </h1>
                    <div className="flex items-center mt-2">
                      <img
                        src={element.adminPhoto}
                        alt="author_avatar"
                        className="w-10 h-10 rounded-full border-2 border-indigo-500"
                      />
                      <p className="ml-3 text-gray-600 text-sm">
                        {element.adminName}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })
        ) : (
          <div className="flex h-screen items-center justify-center">
            <p className="text-lg text-indigo-600 font-semibold animate-pulse">
              Loading...
            </p>
          </div>
        )}
      </Carousel>
    </div>
  );
}

export default Trending;
