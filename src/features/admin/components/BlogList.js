import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { blogListAsync, blogList } from "../adminSlice";
import { Link } from "react-router-dom";

const BlogList = () => {
  const [open, setOpen] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(blogListAsync());
    return () => {};
  }, [dispatch]);
  const list = useSelector(blogList);
  //   console.log("list", list);

  return (
    <>
      <div className="mx-auto max-w-7xl px-4 mt-10 sm:px-6 lg:px-8 shadow-md bg-teal-50 py-6">
        <form class="max-w-sm">
          <label
            for="countries"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Select an option
          </label>
          <select
            id="countries"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>Choose a Type</option>
            <option value="TRAVEL">TRAVEL</option>
            <option value="READING">READING</option>
            <option value="PERSONAL">PERSONAL</option>
          </select>
        </form>
      </div>
      <div className="mx-auto max-w-7xl px-4 mt-10 sm:px-6 lg:px-8 shadow-md bg-gray-100 py-4">
        <ul role="list" className="divide-y divide-gray-200">
          {list.map((person) => (
            <li
              key={person.id}
              className="flex justify-between bg-gray-50 gap-x-6 py-5 px-4 hover:bg-white"
            >
              <div className="flex min-w-0 gap-x-4">
                {/* <img
                className="h-12 w-12 flex-none rounded-full bg-gray-50"
                src={person.imageUrl}
                alt=""
              /> */}
                <div className="min-w-0 flex-auto">
                  <p className="text-sm font-semibold leading-6 text-gray-900">
                    {person.title}
                  </p>
                  <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                    {person.tags[0]}
                  </p>
                </div>
              </div>
              <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
                <p className="text-sm m-auto leading-6 text-gray-900">
                  {person.id}
                </p>
                <Link to={`/admin-blog/:${person.tags[0]}:${person.id}`}>
                  <p className="mt-1 leading-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xs px-6 py-1">
                    Edit
                  </p>
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default BlogList;
