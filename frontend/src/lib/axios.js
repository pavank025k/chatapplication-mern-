import axios from "axios";
export const axiosInstanace=axios.create({
    baseURL:"https://chatapplication-mern-1-2mqv.onrender.com/api",
    withCredentials:true,
})
