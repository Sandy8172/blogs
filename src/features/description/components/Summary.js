import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchAsync, selectData, filterPost } from "../descriptionSlice";
import { useDispatch, useSelector } from "react-redux";

const Summary = () => {
  const { postID } = useParams();
  const userID = postID.split(":")[1]
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAsync());
    return () => {};
  }, []);

  const data = useSelector(selectData);
  const post = data.filter((ele) => ele.id == userID);

  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-indigo-600">
                Enjoy Reading
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                {post[0]?.title}
              </h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
                By Sandeep Singh
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 h-[70vh] lg:sticky  lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <p className="w-[48rem] max-w-none h-full rounded-xl  bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] text-white text-center">
            card data
          </p>
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <p>{post[0]?.body}</p>

              <p className="mt-8">
                Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis
                odio id et. Id blandit molestie auctor fermentum dignissim.
                Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate
                et ultrices hac adipiscing egestas. Iaculis convallis ac tempor
                et ut. Ac lorem vel integer orci.
              </p>

              <p className="mt-6">
                Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam
                consequat in. Convallis arcu ipsum urna nibh. Pharetra, euismod
                vitae interdum mauris enim, consequat vulputate nibh. Maecenas
                pellentesque id sed tellus mauris, ultrices mauris. Tincidunt
                enim cursus ridiculus mi. Pellentesque nam sed nullam sed diam
                turpis ipsum eu a sed convallis diam.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
