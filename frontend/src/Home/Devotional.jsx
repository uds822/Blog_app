import React from "react";
import { useAuth } from "../context/AuthProvider";
import { Link } from "react-router-dom";

function Devotional() {
  const { blogs } = useAuth();
  const devotionalBlogs = blogs?.filter((blog) => blog.category === "Devotion");

  return (
    <div>
      <div className="container mx-auto my-12 p-4">
        <h1 className="text-3xl font-bold text-purple-700 mb-6 text-center animate-pulse">
          Devotional
        </h1>
        <p className="text-center text-lg text-gray-700 mb-8 italic">
          The concept of gods varies widely across different cultures, religions, and belief systems
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {devotionalBlogs && devotionalBlogs.length > 0 ? (
            devotionalBlogs.map((blog, index) => (
              <Link
                to={`/blog/${blog._id}`}
                key={index}
                className="relative rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300 hover:shadow-2xl"
              >
                <img
                  src={blog?.blogImage?.url}
                  alt={blog?.title}
                  className="w-full h-48 object-cover filter brightness-75 hover:brightness-90 transition-all duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h2 className="text-xl font-semibold text-yellow-400 drop-shadow-md">
                    {blog?.title}
                  </h2>
                  <p className="text-sm text-gray-200 italic">{blog?.category}</p>
                </div>
              </Link>
            ))
          ) : (
            <div className="flex h-64 items-center justify-center text-purple-700 font-semibold animate-pulse">
              Loading...
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Devotional;
