import {IPost} from "../../models/IPost";
import {FC} from "react";

interface PostProps{
    post: IPost
}
const Post:FC<PostProps>=({post})=>{
    return(
        <div>
            <h1>Title: {post.title}</h1>
            <p>userId: {post.userId}</p>
            <p>Body: {post.body}</p>
            <p>Id:{post.id}</p>
        </div>
    )
}
export default Post