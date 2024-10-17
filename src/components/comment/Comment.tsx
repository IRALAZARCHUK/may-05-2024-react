import {IComment} from "../../models/IComment";
import {FC} from "react";

interface CommentProps{
    comment: IComment
}
const Comment:FC<CommentProps> =({comment})=>{
    return(
        <div>
            <h1>{comment.name}</h1>
            <p>{comment.id}</p>
            <p>{comment.body}</p>
        </div>
    )
}
export default Comment;