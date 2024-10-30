import React from 'react';
import {NavLink} from "react-router-dom";

const Menu = () => {
    return (
        <div>
            <ul>
                <li><NavLink to="/users">Users</NavLink></li>
                <li><NavLink to="/posts">Posts</NavLink></li>
                <li><NavLink to="/comments">Comments</NavLink></li>
                <li><NavLink to="/posts-with-comments">Posts With Comments</NavLink></li>
            </ul>
        </div>
    );
};

export default Menu;