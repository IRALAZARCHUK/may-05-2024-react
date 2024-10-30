import React, {useEffect} from 'react';
import {useStore} from "../store";

const LoadCommentsPage = () => {
    const {commentSlice:{allComments, loadComments}} = useStore()
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then((response) => response.json())
            .then((data) => loadComments(data));
    }, [loadComments]);
    return (
        <div>
            {allComments.map((comment)=>(<div key={comment.id}><p>{comment.id}</p><p>{comment.body}</p></div>))}
        </div>
    );
};

export default LoadCommentsPage;