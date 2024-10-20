import React from 'react';
import {Link} from "react-router-dom";

const MenuComponent = () => {
    return (
        <div>
            <ul>
                <li><Link to={'Home'}>Home</Link></li>
                <li><Link to={'Products'}>Products</Link></li>
            </ul>

        </div>
    );
};

export default MenuComponent;