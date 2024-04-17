import axios from "axios";

export const fetchList = () => {
  return new Promise(async (resolve, reject) => {
    const response = await axios.get("https://dummyjson.com/posts?limit=150");
    const data = response.data.posts;
    resolve(data);
  });
};
