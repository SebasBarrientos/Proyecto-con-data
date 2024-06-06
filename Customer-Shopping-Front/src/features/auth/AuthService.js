import axios from "axios";

const API_URL = "http://localhost:3000";


const getAll = async ()=>{
    const res = await axios.get(API_URL + "/sales")
    return res.data
}



const authService = {
    getAll
  };






export default authService;