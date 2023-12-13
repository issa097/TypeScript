"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import PopUp from "./Portal";
import { createPortal } from "react-dom";

const allUser = () => {
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(0);
  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/getStudent");
      console.log(response.data.rows[0]);
      setData(response.data.rows);
      // console.log(data);
    } catch (error) {
      console.log(error);
    }
    return data;
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(data);

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              id
            </th>
            <th scope="col" className="px-6 py-3">
              name
            </th>
            <th scope="col" className="px-6 py-3">
              <span className="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(data) &&
            data.map((item) => (
              <tr
                key={item.id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td className="px-6 py-4">{item.id}</td>
                <td className="px-6 py-4">{item.name}</td>
                <td className="px-6 py-4 text-right">
                  <button
                    onClick={() => setOpen(item.id)}
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    open
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      {open &&
        createPortal(<PopUp user_id={open} setOpen={setOpen} />, document.body)}
    </div>
  );
};

export default allUser;
