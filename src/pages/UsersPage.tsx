import React, {useEffect} from 'react';
import {useStore} from "../store";
const LoadUsersPage: React.FC = () => {
    const { userSlice: { allUsers, loadUsers } } = useStore();
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((data) => loadUsers(data));
    }, [loadUsers]);

    return (
        <div>
            <ul>
                {allUsers.map((user) => (<li key={user.id}>{user.name}</li>))}
            </ul>
        </div>
    );
    };

    export default LoadUsersPage;