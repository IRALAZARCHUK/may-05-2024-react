import React, {useEffect} from 'react';
import {useStore} from "../store";

const LoadPostsPage = () => {
    const {postSlice: {allPosts, loadPosts}} = useStore()
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((data) => loadPosts(data));
    }, [loadPosts]);
    return (
        <div>
            {allPosts.map((post)=>(
                <div key={post.id}><h2>{post.title}</h2> <p>{post.id}</p> <p>{post.body}</p></div>))}
        </div>
    );
};

export default LoadPostsPage;