import React, {useEffect} from 'react';
import {useStore} from "../store";
import {getComments} from "../services/api.service";

const LoadCommentsPage = () => {
    const {commentSlice:{allComments, loadComments}} = useStore()
    useEffect(() => {
        getComments().then(value => loadComments(value))
    }, []);
    return (
        <div>
            {allComments.map((comment)=>(<div key={comment.id}><p>{comment.id}</p><p>{comment.body}</p></div>))}
        </div>
    );
};

export default LoadCommentsPage;