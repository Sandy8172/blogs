// A mock function to mimic making an async request for data
import axios from "axios";
export function fetchData() {
 return axios.get("https://dummyjson.com/posts");
}
