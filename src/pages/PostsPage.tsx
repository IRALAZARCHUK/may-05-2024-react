import React, {useEffect} from 'react';
import {useStore} from "../store";
import {getPosts} from "../services/api.service";

const LoadPostsPage = () => {
    let {postSlice: {allPosts, loadPosts}} = useStore()
    useEffect(() => {
        getPosts().then(value => loadPosts(value));
    }, []);
    return (
        <div>
            {allPosts.map((post)=>(
                <div key={post.id}><h2>{post.title}</h2> <p>{post.id}</p> <p>{post.body}</p></div>))}
        </div>
    );
};

export default LoadPostsPage;