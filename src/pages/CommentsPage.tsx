import React, {useEffect, useState} from 'react';
import {IComment} from "../models/IComment";
import {getComments} from "../services/comment.service";
import Comment from "../components/comment/Comment";

const CommentsPage = () => {
    const [comments, setComments] = useState<IComment[]>([]);
    useEffect(() => {
        getComments()
            .then((data)=>{
                setComments(data);
            })
    }, []);


    return (
        <div>
            {comments.map((comment)=><Comment key ={comment.id} comment={comment}/>)};
        </div>
    )
};

export default CommentsPage;