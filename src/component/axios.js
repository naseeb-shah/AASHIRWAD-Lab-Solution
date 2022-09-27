import axios from 'axios';
const url= "https://labcare.vercel.app"
//  const url="http://localhost:4000"
const instance = axios.create({baseURL:url })


export default instance