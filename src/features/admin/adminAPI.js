import axios from "axios";

export const fetchList = (type) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.get(`/get/blog/list/:${type}`);
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
      const response = await axios.get(`/get/blogBYid/${id}`);
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
      const response = await axios.delete(`/delete/blog/${id}`);
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
      const response = await axios.get(`/blog/count`);
      const data = response.data;
      resolve(data);
    } catch (error) {
      // Handle the error
      console.error("Error fetching list:", error);
      reject(error);
    }
  });
};
export const updateBlog = (payload) => {
  return new Promise(async (resolve, reject) => {
    const {blogId, body} = payload
    try {
      const response = await axios.put(`/blog/update/${blogId}`, body);
      const data = response.data;
      resolve(data);
    } catch (error) {
      // Handle the error
      console.error("Error fetching list:", error);
      reject(error);
    }
  });
};
