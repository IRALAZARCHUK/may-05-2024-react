import React, {useEffect, useState} from 'react';
import {IUser} from "../models/IUser";
import {getUsers} from "../services/user.service";
import User from "../components/user/User";

const UsersPage = () => {
    const [users, setUsers] = useState<IUser[]>([]);
useEffect(() => {
    getUsers()
        .then((data)=>{
            setUsers(data);
        })
}, []);
    
    
    return (
        <div>
            {users.map((user)=><User key ={user.id} user={user}/>)};
        </div>
    )
};

export default UsersPage;