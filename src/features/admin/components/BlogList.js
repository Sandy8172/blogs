import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  blogListAsync,
  deleteBlogAsync,
  blogList,
  deletedBlog,
} from "../adminSlice";
import { Link } from "react-router-dom";

const BlogList = () => {
  const [open, setOpen] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState([]);
  const [type, setType] = useState("");
  const list = useSelector(blogList);
  const deleted = useSelector(deletedBlog);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(blogListAsync(type));
  }, [dispatch, type, deleted]);
  const selectHandler = (e) => {
    setType(e.target.value);
  };
  const deleteBlogHandler = (id) => {
    dispatch(deleteBlogAsync(id));
  };

  return (
    <>
      <div className="mx-auto max-w-7xl px-4 mt-10 sm:px-6 lg:px-8 shadow-md bg-teal-50 py-6">
        <form className="max-w-sm">
          <label
            htmlFor="countries"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Select an option
          </label>
          <select
            id="type"
            onChange={selectHandler}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="">Choose a Type</option>
            <option value="Travel">TRAVEL</option>
            <option value="Reading">READING</option>
            <option value="Personal">PERSONAL</option>
          </select>
        </form>
      </div>
      <div className="mx-auto max-w-7xl px-4 mt-10 sm:px-6 lg:px-8 shadow-md bg-gray-100 py-4">
        <ul role="list" className="divide-y divide-gray-200">
          {list?.map((blog) => (
            <li
              key={blog._id}
              className="flex justify-between bg-gray-50 gap-x-6 py-5 px-4 hover:bg-white"
            >
              <div className="flex min-w-0 gap-x-4">
                <div className="min-w-0 flex-auto">
                  <p className="text-sm font-semibold leading-6 text-gray-900">
                    {blog.title}
                  </p>
                  <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                    {blog.genre}
                  </p>
                </div>
              </div>
              <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
                <p className="text-sm font-mono m-auto leading-6 text-gray-900 text-center">
                  {blog.type}
                </p>
                <div className="flex gap-2 items-center h-full">
                  <Link to={`/admin-blog/:${blog.type}:${blog._id}`}>
                    <p className=" leading-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xs px-6 py-1">
                      Edit
                    </p>
                  </Link>
                  <button
                    onClick={() => deleteBlogHandler(blog._id)}
                    className=" leading-5 text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-xs px-4 py-1"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default BlogList;
