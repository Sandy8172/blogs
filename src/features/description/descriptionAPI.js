// A mock function to mimic making an async request for data
import axios from "axios";
export function fetchData(type) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.get(
        `http://localhost:3080/get/blog/list/:${type}`
      );
      resolve(response.data);
    } catch (error) {
      // Handle the error
      console.error("Error fetching list:", error);
      reject(error);
    }
  });
}
export function fetchBlogByID(id) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.get(
        `http://localhost:3080/get/blogBYid/${id}`
      );
      const data = response.data;
      resolve(data);
    } catch (error) {
      // Handle the error
      console.error("Error fetching list:", error);
      reject(error);
    }
  });
}
