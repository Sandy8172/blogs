import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
// import axios from "axios"
import { useSelector, useDispatch } from "react-redux";
import {fetchAsync, selectData ,filterPost} from "../descriptionSlice";

// const posts = [
//   {
//     id: 1,
//     title: "Kashmir, The heaven on earth.",
//     href: "#",
//     description:
//       "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
//     date: "Mar 16, 2024",
//     datetime: "2020-03-16",
//     category: { title: "Travel", href: "#" },
//     author: {
//       name: "Mandeep Kaur",
//       role: "Co-Founder / CTO",
//       href: "#",
//       imageUrl:
//         "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
//     },
//   },
//   {
//     id: 2,
//     title: "Kashmir, The heaven on earth.",
//     href: "#",
//     description:
//       "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
//     date: "Mar 16, 2024",
//     datetime: "2020-03-16",
//     category: { title: "Travel", href: "#" },
//     author: {
//       name: "Mandeep Kaur",
//       role: "Co-Founder / CTO",
//       href: "#",
//       imageUrl:
//         "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
//     },
//   },
//   {
//     id: 3,
//     title: "Kashmir, The heaven on earth.",
//     href: "#",
//     description:
//       "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
//     date: "Mar 16, 2024",
//     datetime: "2020-03-16",
//     category: { title: "Travel", href: "#" },
//     author: {
//       name: "Mandeep Kaur",
//       role: "Co-Founder / CTO",
//       href: "#",
//       imageUrl:
//         "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
//     },
//   },
//   {
//     id: 4,
//     title: "Kashmir, The heaven on earth.",
//     href: "#",
//     description:
//       "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
//     date: "Mar 16, 2024",
//     datetime: "2020-03-16",
//     category: { title: "Travel", href: "#" },
//     author: {
//       name: "Mandeep Kaur",
//       role: "Co-Founder / CTO",
//       href: "#",
//       imageUrl:
//         "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
//     },
//   },
//   {
//     id: 5,
//     title: "Kashmir, The heaven on earth.",
//     href: "#",
//     description:
//       "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
//     date: "Mar 16, 2024",
//     datetime: "2020-03-16",
//     category: { title: "Travel", href: "#" },
//     author: {
//       name: "Mandeep Kaur",
//       role: "Co-Founder / CTO",
//       href: "#",
//       imageUrl:
//         "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
//     },
//   },
// ];

const Description = () => {
  const { title } = useParams();
  const posts = useSelector(selectData);
//   console.log(posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAsync());
    return () => {};
  }, []);

  //   console.log(title.split(" ")[0].split(":")[1]);
  return (
    <div className="bg-white py-4 sm:py-4">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            From the blog
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Here's some interesting stories from my recent travel.
          </p>
        </div>
        <div className="mx-auto mt-4 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-6 sm:mt-4 sm:pt-6 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.id}
              className="flex max-w-xl flex-col items-start justify-between border-solid border-2 border-gray-100 p-4 rounded-xl hover:shadow-md hover:bg-blue-gray-50"
            >
              <div className="flex items-center gap-x-4 text-xs">
                {/* <time dateTime={post.datetime} className="text-gray-500">
                  {post.date}
                </time> */}
                <p>{post.id}</p>
                <p
                  //   href={post.category.href}
                  className=" rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                >
                  {post?.tags[0]}
                </p>
              </div>
              <div className="">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  {post.title}
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                  {post?.body}
                </p>
              </div>
              <div className=" mt-8 flex items-center justify-between leading-6 w-full">
                {/* <img src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50" /> */}
                <div className="text-sm flex justify-between  leading-6">
                  <p className="font-semibold mr-4 text-gray-900">
                    {post?.userId}
                  </p>
                  <p className="text-gray-600">❤️{post?.reactions}</p>
                </div>
                <Link to={`/summary/:${post?.id}`}  className="">
                  <button
                //    onClick={()=>{dispatch(filterPost(post?.userId))}}
                    className="text-sm  hover:cursor-pointer  hover:text-blue-400">Read more . . .</button>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Description;
