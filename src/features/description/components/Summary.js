import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchAsync, selectData, filterPost } from "../descriptionSlice";
import { useDispatch, useSelector } from "react-redux";

const Summary = () => {
  const { postID } = useParams();
  const userID = postID.split(":")[1];
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAsync());
    return () => {};
  }, []);

  const data = useSelector(selectData);
  const post = data.filter((ele) => ele.id == userID);

  return (
    <div className="relative isolate overflow-hidden bg-white lg:overflow-visible mt-16 ">
      <div className="mx-auto grid  grid-cols-1 lg:grid-cols-12 lg:items-start px-10 ">
        <div className="lg:col-span-7 lg:col-start-1 ">
          <div>
            <div>
              <p className="text-base font-semibold leading-7 text-indigo-600">
                Enjoy Reading
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                {post[0]?.title}
              </h1>
              <p className="mt-2 text-xl leading-8 text-gray-700">
                By Sandeep Singh
              </p>
            </div>
            <div className="lg:mx-auto  mt-10">
              <div className="lg:pr-4">
                <div className=" text-base leading-7 text-gray-700 ">
                  <p>{post[0]?.body}</p>

                  <p className="mt-8">
                    Et vitae blandit facilisi magna lacus commodo. Vitae sapien
                    duis odio id et. Id blandit molestie auctor fermentum
                    dignissim. Lacus diam tincidunt ac cursus in vel. Mauris
                    varius vulputate et ultrices hac adipiscing egestas. Iaculis
                    convallis ac tempor et ut. Ac lorem vel integer orci.
                  </p>

                  <p className="mt-6">
                    Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam
                    consequat in. Convallis arcu ipsum urna nibh. Pharetra,
                    euismod vitae interdum mauris enim, consequat vulputate
                    nibh. Maecenas pellentesque id sed tellus mauris, ultrices
                    mauris. Tincidunt enim cursus ridiculus mi. Pellentesque nam
                    sed nullam sed diam turpis ipsum eu a sed convallis diam.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:sticky lg:top-4 lg:col-start-9 lg:col-span-4  lg:overflow-hidden mt-10 ">
          <summary className=" h-full rounded-xl px-8 py-4 bg-gray-900 shadow-xl ring-1 ring-gray-400/10 text-white text-center">
            <h1 className="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-100 md:text-3xl lg:text-4xl ">
              Admin Note
            </h1>

            <p className="mb-3 mt-5 text-lg text-gray-200 md:text-xl">
              Thank you so much for taking the time to read my blogs on my
              blogging site! Your support means the world to me.
            </p>
            <p className="text-gray-300 mt-6">
              If you enjoy my content and would like to stay updated with my
              latest posts, I encourage you to follow me on social media. You'll
              get exclusive insights, behind-the-scenes glimpses, and more
              engaging content directly from me. Your support and engagement
              make all the difference, and I'm truly grateful to have you as
              part of this journey. Looking forward to connecting with you on
              social media!
            </p>

            <footer className="rounded-lg shadow mx-auto mt-10 mb-2 dark:bg-gray-800 w-fit">
              <div className=" mx-auto  pt-2 gap-4 flex justify-end">
                <span className="text-sm text-gray-500">Follow on :</span>
                <ul className="flex-1 flex flex-wrap gap-8  text-sm font-medium text-gray-500">
                  <li>
                    <a href="https://twitter.com" target="_blank" className="hover:underline me-4 md:me-6">
                      <svg
                        class="w-6 h-6 text-gray-500 dark:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M13.795 10.533 20.68 2h-3.073l-5.255 6.517L7.69 2H1l7.806 10.91L1.47 22h3.074l5.705-7.07L15.31 22H22l-8.205-11.467Zm-2.38 2.95L9.97 11.464 4.36 3.627h2.31l4.528 6.317 1.443 2.02 6.018 8.409h-2.31l-4.934-6.89Z" />
                      </svg>
                    </a>
                  </li>

                  <li>
                    <a href="https://instagram.com" target="_blank" className="hover:underline me-4 md:me-6">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        id="instagram"
                      >
                        <linearGradient
                          id="a"
                          x1="1.464"
                          x2="14.536"
                          y1="14.536"
                          y2="1.464"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset="0" stop-color="#FFC107"></stop>
                          <stop offset=".507" stop-color="#F44336"></stop>
                          <stop offset=".99" stop-color="#9C27B0"></stop>
                        </linearGradient>
                        <path
                          fill="url(#a)"
                          d="M11 0H5a5 5 0 0 0-5 5v6a5 5 0 0 0 5 5h6a5 5 0 0 0 5-5V5a5 5 0 0 0-5-5zm3.5 11c0 1.93-1.57 3.5-3.5 3.5H5c-1.93 0-3.5-1.57-3.5-3.5V5c0-1.93 1.57-3.5 3.5-3.5h6c1.93 0 3.5 1.57 3.5 3.5v6z"
                        ></path>
                        <linearGradient
                          id="b"
                          x1="5.172"
                          x2="10.828"
                          y1="10.828"
                          y2="5.172"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset="0" stop-color="#FFC107"></stop>
                          <stop offset=".507" stop-color="#F44336"></stop>
                          <stop offset=".99" stop-color="#9C27B0"></stop>
                        </linearGradient>
                        <path
                          fill="url(#b)"
                          d="M8 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm0 6.5A2.503 2.503 0 0 1 5.5 8c0-1.379 1.122-2.5 2.5-2.5s2.5 1.121 2.5 2.5c0 1.378-1.122 2.5-2.5 2.5z"
                        ></path>
                        <linearGradient
                          id="c"
                          x1="11.923"
                          x2="12.677"
                          y1="4.077"
                          y2="3.323"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset="0" stop-color="#FFC107"></stop>
                          <stop offset=".507" stop-color="#F44336"></stop>
                          <stop offset=".99" stop-color="#9C27B0"></stop>
                        </linearGradient>
                        <circle
                          cx="12.3"
                          cy="3.7"
                          r=".533"
                          fill="url(#c)"
                        ></circle>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="https://youtube.com" target="_blank" className="hover:underline me-4 md:me-6">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="28"
                        height="28"
                        viewBox="5.368 13.434 53.9 37.855"
                        id="youtube"
                      >
                        <path
                          fill="#FFF"
                          d="M41.272 31.81c-4.942-2.641-9.674-5.069-14.511-7.604v15.165c5.09-2.767 10.455-5.301 14.532-7.561h-.021z"
                        ></path>
                        <path
                          fill="#E8E0E0"
                          d="M41.272 31.81c-4.942-2.641-14.511-7.604-14.511-7.604l12.758 8.575c.001 0-2.324 1.289 1.753-.971z"
                        ></path>
                        <path
                          fill="#CD201F"
                          d="M27.691 51.242c-10.265-.189-13.771-.359-15.926-.803-1.458-.295-2.725-.95-3.654-1.9-.718-.719-1.289-1.816-1.732-3.338-.38-1.268-.528-2.323-.739-4.9-.323-5.816-.4-10.571 0-15.884.33-2.934.49-6.417 2.682-8.449 1.035-.951 2.239-1.563 3.591-1.816 2.112-.401 11.11-.718 20.425-.718 9.294 0 18.312.317 20.426.718 1.689.317 3.273 1.267 4.203 2.492 2 3.146 2.035 7.058 2.238 10.118.084 1.458.084 9.737 0 11.195-.316 4.836-.57 6.547-1.288 8.321-.444 1.12-.823 1.711-1.479 2.366a7.085 7.085 0 0 1-3.76 1.922c-8.883.668-16.426.813-24.987.676zM41.294 31.81c-4.942-2.641-9.674-5.09-14.511-7.625v15.166c5.09-2.767 10.456-5.302 14.532-7.562l-.021.021z"
                        ></path>
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </footer>
          </summary>
        </div>
      </div>
    </div>
  );
};

export default Summary;

// Thank you so much for taking the time to read my blogs on my
// blogging site! Your support means the world to me. If you enjoy my
// content and would like to stay updated with my latest posts, I
// encourage you to follow me on social media. You'll get exclusive
// insights, behind-the-scenes glimpses, and more engaging content
// directly from me. Your support and engagement make all the
// difference, and I'm truly grateful to have you as part of this
// journey. Looking forward to connecting with you on social media!
