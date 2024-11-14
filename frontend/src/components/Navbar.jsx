import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { useAuth } from "../context/AuthProvider";
import axios from "axios";
import toast from "react-hot-toast";

function Navbar() {
  const [show, setShow] = useState(false);

  const { profile, isAuthenticated, setIsAuthenticated } = useAuth();
  const navigateTo = useNavigate();

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.get(
        "http://localhost:4000/api/users/logout",
        { withCredentials: true }
      );
      localStorage.removeItem("jwt");
      toast.success(data.message);
      setIsAuthenticated(false);
      navigateTo("/login");
    } catch (error) {
      console.log(error);
      toast.error("Failed to logout");
    }
  };

  return (
    <>
      <nav className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-lg px-6 py-3">
        <div className="flex items-center justify-between container mx-auto">
          <div className="font-bold text-2xl text-white">
            Your<span className="text-yellow-300">Blog</span>
          </div>
          {/* Desktop Navigation */}
          <div className=" mx-6">
            <ul className="hidden md:flex space-x-8 text-white font-semibold">
              <Link to="/" className="hover:text-yellow-300 transition duration-300">
                HOME
              </Link>
              <Link to="/blogs" className="hover:text-yellow-300 transition duration-300">
                BLOGS
              </Link>
              <Link to="/creators" className="hover:text-yellow-300 transition duration-300">
                CREATORS
              </Link>
              <Link to="/about" className="hover:text-yellow-300 transition duration-300">
                ABOUT
              </Link>
              <Link to="/contact" className="hover:text-yellow-300 transition duration-300">
                CONTACT
              </Link>
            </ul>
            <div className="md:hidden text-white" onClick={() => setShow(!show)}>
              {show ? <IoCloseSharp size={24} /> : <AiOutlineMenu size={24} />}
            </div>
          </div>
          {/* Authentication Buttons */}
          <div className="hidden md:flex space-x-4">
            {isAuthenticated && profile?.user?.role === "admin" ? (
              <Link
                to="/dashboard"
                className="bg-blue-600 text-white font-semibold hover:bg-blue-700 px-5 py-2 rounded-lg transition duration-300"
              >
                DASHBOARD
              </Link>
            ) : null}

            {!isAuthenticated ? (
              <Link
                to="/login"
                className="bg-red-500 text-white font-semibold hover:bg-red-600 px-5 py-2 rounded-lg transition duration-300"
              >
                LOGIN
              </Link>
            ) : (
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white font-semibold hover:bg-red-600 px-5 py-2 rounded-lg transition duration-300"
              >
                LOGOUT
              </button>
            )}
          </div>
        </div>
        {/* Mobile Navigation */}
        {show && (
          <div className="bg-white w-full absolute top-16 left-0 z-10 shadow-md">
            <ul className="flex flex-col h-screen items-center justify-center space-y-6 text-xl text-gray-800 font-semibold">
              <Link
                to="/"
                onClick={() => setShow(false)}
                className="hover:text-purple-600 transition duration-300"
              >
                HOME
              </Link>
              <Link
                to="/blogs"
                onClick={() => setShow(false)}
                className="hover:text-purple-600 transition duration-300"
              >
                BLOGS
              </Link>
              <Link
                to="/creators"
                onClick={() => setShow(false)}
                className="hover:text-purple-600 transition duration-300"
              >
                CREATORS
              </Link>
              <Link
                to="/about"
                onClick={() => setShow(false)}
                className="hover:text-purple-600 transition duration-300"
              >
                ABOUT
              </Link>
              <Link
                to="/contact"
                onClick={() => setShow(false)}
                className="hover:text-purple-600 transition duration-300"
              >
                CONTACT
              </Link>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;
