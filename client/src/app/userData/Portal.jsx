"use client";

import { useEffect, useState } from "react";
import axios from "axios";

const PopUp = ({ user_id, setOpen }) => {
  const [user, setUserData] = useState({});

  console.log(user_id);
  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/getStudent/${user_id}`
      );
      console.log("aaa", response.data);
      setUserData(response.data);
      // console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(user);

  return (
    <div className="flex justify-center items-center h-screen">
      <div>
        <button className="px-4 py-2 bg-indigo-500 text-white rounded-md">
          {" "}
          Open Modal{" "}
        </button>
        <div className="fixed inset-0 px-2 z-10 overflow-hidden flex items-center justify-center">
          <div className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
          <div className="bg-white rounded-md shadow-xl overflow-hidden max-w-md w-full sm:w-96 md:w-1/2 lg:w-2/3 xl:w-1/3 z-50">
            <ul
              key={user.id}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <li className="px-6 py-4">{user.name}</li>
              <li className="px-6 py-4">{user.age}</li>
              <li className="px-6 py-4">{user.grade}</li>

              {/* <li className="px-6 py-4">{user.major}</li> */}
            </ul>
            <div className="border-t px-4 py-2 flex justify-end">
              <button
                onClick={() => setOpen(null)}
                className="px-3 py-1 bg-indigo-500 text-white  rounded-md w-full sm:w-auto"
              >
                {" "}
                Close{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
