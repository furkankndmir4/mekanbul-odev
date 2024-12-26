import axios from "axios";
export default axios.create({
  baseURL: "https://furkankandemirmekanbul.vercel.app//api",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
  },
});
