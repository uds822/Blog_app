import axios from "axios";
import React, { useEffect, useState } from "react";

function Creator() {
  const [admin, setAdmin] = useState([]);

  useEffect(() => {
    const fetchAdmins = async () => {
      const { data } = await axios.get(
        "http://localhost:4000/api/users/admins",
        {
          withCredentials: true,
        }
      );
      setAdmin(data.admins);
    };
    fetchAdmins();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold text-center text-indigo-700 mb-10">
        Popular Creators
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {admin && admin.length > 0 ? (
          admin.slice(0, 4).map((element) => (
            <div
              key={element._id}
              className="flex flex-col items-center text-center transition-transform duration-300 transform hover:scale-105"
            >
              <img
                src={element.photo.url}
                alt="creator"
                className="w-40 h-40 md:w-56 md:h-56 object-cover border-4 border-indigo-500 rounded-full shadow-lg mb-4 hover:shadow-xl transition-shadow duration-300"
              />
              <p className="text-lg font-medium text-gray-800">{element.name}</p>
              <p className="text-sm text-gray-600 italic">{element.role}</p>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center text-gray-500">
            Loading creators...
          </div>
        )}
      </div>
    </div>
  );
}

export default Creator;
