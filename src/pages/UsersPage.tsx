import React, {useEffect} from 'react';
import {useStore} from "../store";
import {getUsers} from "../services/api.service";
const LoadUsersPage: React.FC = () => {
    const { userSlice: { allUsers, loadUsers } } = useStore();
    useEffect(() => {
        getUsers().then(value => loadUsers(value));
    }, [loadUsers]);

    return (
        <div>
            <ul>
                {allUsers.map((user) => (<li key={user.id}>{user.lastName}</li>))}
            </ul>
        </div>
    );
    };

    export default LoadUsersPage;