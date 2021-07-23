import axios from "axios"

const url = "http://localhost:8000"

export const fetchPosts = ()=> {return axios.get(url)}

export const createPost = (newPost)=> {return axios.post(url,newPost)}

export const updatePost = (id,newPost)=>{return axios.patch(`${url}/${id}`,newPost)}