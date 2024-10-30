import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import LoadUsersPage from "../pages/UsersPage";
import LoadPostsPage from "../pages/PostsPage";
import LoadCommentsPage from "../pages/CommentsPage";
import PostsWithCommentsPage from "../pages/PostsWithCommentsPage";

export const router = createBrowserRouter(
    [{path: '/', element: <App/>, children:[
        {path:'users', element:<LoadUsersPage/>},
            {path:'posts', element:<LoadPostsPage/>},
            {path:'comments', element:<LoadCommentsPage />},
            {path:'posts-with-comments', element:<PostsWithCommentsPage />}
]}
    ])