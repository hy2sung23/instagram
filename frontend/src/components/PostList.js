import React, {useEffect, useState} from 'react'
import Axios from "axios";
import Post from "./Post";

const apiUrl = "http://localhost:8000/posts/"

function PostList() {
    const [postList, setPostList] = useState([])
    useEffect(() => {
        Axios.get(apiUrl)
            .then(response => {
                const {data} = response
                console.log("loaded response", response)
                setPostList(data)
            })
            .catch(error => {
                console.log(error)
            })
        console.log("mounted")
    }, [])
    return (
        <div>
            {postList.map( post => {
                return <Post post={post}/>
            })
            }
        </div>
    )
} export default PostList