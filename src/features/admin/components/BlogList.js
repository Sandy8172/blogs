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
    <div className="mx-auto max-w-7xl px-4 mt-10 sm:px-6 lg:px-8 shadow-md bg-gray-50">
      <ul role="list" className="divide-y divide-gray-200">
        {list.map((person) => (
          <li
            key={person.id}
            className="flex justify-between gap-x-6 py-5 hover:bg-white"
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
                <p
                  className="mt-1 leading-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xs px-6 py-1"
                >
                  Edit
                </p>
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogList;
