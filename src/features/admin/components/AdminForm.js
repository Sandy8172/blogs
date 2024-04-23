import React, { useState } from "react";
import axios from "axios";

const AdminForm = () => {
  const [inputData, setInputData] = useState({
    username: "",
    type: "",
    title: "",
    genre: "",
    summary: "",
  });

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setInputData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (
      !inputData.username ||
      !inputData.type ||
      !inputData.title ||
      !inputData.genre ||
      !inputData.summary
    ) {
      alert("fill all the fields!");
    } else {
      uploadtoDB(inputData);
    }
  };
  const uploadtoDB = (data) => {
    axios
      .post("http://localhost:3080/upload/blog", inputData)
      .then((res) => {
        console.log(res.data);
        console.log("uploaded Successfully");
        setInputData({
          username: "",
          type: "",
          title: "",
          genre: "",
          summary: "",
        });
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="mx-auto max-w-7xl px-4 mt-4 sm:px-6 lg:px-8 py-8 shadow-md bg-cyan-50">
        <h1 className="text-center mb-4 text-2xl font-extrabold text-gray-900 dark:text-white md:text-4xl lg:text-5xl">
          Write Down Your Thoughts . . 💭
        </h1>
      </div>

      <div className="mx-auto max-w-7xl px-4 mt-10 sm:px-6 lg:px-8 shadow-md bg-gray-50 ">
        <form onSubmit={formSubmitHandler} className="py-4">
          <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-base font-semibold leading-7 text-gray-900">
                Profile
              </h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                This information will be displayed publicly so be careful what
                you share.
              </p>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-4">
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Username
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="username"
                      id="username"
                      onChange={inputChangeHandler}
                      value={inputData.username}
                      className="block w-1/2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="col-span-full">
                  <label
                    htmlFor="about"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Summary
                  </label>
                  <div className="mt-2">
                    <textarea
                      id="summary"
                      name="summary"
                      onChange={inputChangeHandler}
                      value={inputData.summary}
                      rows={3}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="border-b border-gray-900/10 pb-12">
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label
                    htmlFor="Description"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Title
                  </label>
                  <div className="mt-2">
                    <textarea
                      id="title"
                      name="title"
                      onChange={inputChangeHandler}
                      value={inputData.title}
                      rows={3}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="Genre"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Genre
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="genre"
                      onChange={inputChangeHandler}
                      value={inputData.genre}
                      id="Genre"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="Type"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Type
                  </label>
                  <div className="mt-2">
                    <select
                      id="Type"
                      name="type"
                      onChange={inputChangeHandler}
                      value={inputData.type}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    >
                      <option value={""}>select one</option>
                      <option value={"Travel"}>Travel</option>
                      <option value={"Reading"}>Reading</option>
                      <option value={"Personal"}>Personal</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button
              type="button"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AdminForm;
