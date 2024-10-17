import React, {useEffect, useState} from 'react';
import Post from "../components/post/Post";
import {IPost} from "../models/IPost";
import {getPosts} from "../services/post.service";

const PostsPage = () => {
    const [posts, setPosts] = useState<IPost[]>([]);
    useEffect(() => {
        getPosts()
            .then((data)=>{
                setPosts(data);
            })
    }, []);


    return (
        <div>
            {posts.map((post)=><Post key ={post.id} post={post}/>)};
        </div>
    )
};

export default PostsPage;