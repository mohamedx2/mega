import axios from "axios"


const request = axios.create({
  baseURL:"https://backray.onrender.com"
});


export default request;