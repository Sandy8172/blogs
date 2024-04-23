import axios from "axios";

export const fetchList = (type) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.get(`http://localhost:3080/get/blog/list/:${type}`);
      const data = response.data;
      resolve(data);
    } catch (error) {
      // Handle the error
      console.error("Error fetching list:", error);
      reject(error);
    }
  });
};
export const fetchBlogByID = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.get(`http://localhost:3080/get/blogBYid/${id}`);
      const data = response.data;
      resolve(data);
    } catch (error) {
      // Handle the error
      console.error("Error fetching list:", error);
      reject(error);
    }
  });
};
export const deleteBlog = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.delete(`http://localhost:3080/delete/blog/${id}`);
      const data = response.data;
      resolve(data);
    } catch (error) {
      // Handle the error
      console.error("Error fetching list:", error);
      reject(error);
    }
  });
};
export const getBlogsCount = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.get(`http://localhost:3080/blog/count`);
      const data = response.data;
      resolve(data);
    } catch (error) {
      // Handle the error
      console.error("Error fetching list:", error);
      reject(error);
    }
  });
};
