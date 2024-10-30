import React from 'react';
import {useStore} from "../store";

const PostsWithCommentsPage = () => {
    const {postSlice:{allPosts}, commentSlice:{allComments}} = useStore()
    return (
        <div>
            <h2>Posts with Comments</h2>
            {allPosts.map((post)=>
                (<div key={post.id}>{post.title}, {post.body}
                    <h3>Comments</h3>
                    <ul>
                        {allComments.filter((comment)=>comment.postId === post.id)
                            .map((comment)=>(<li key={comment.id}>{comment.body}</li>))}
                    </ul>


            </div>))}
        </div>
    );
};

export default PostsWithCommentsPage;