import {IUser} from "../../models/IUser";
import {FC} from "react";

interface UserProps{
    user:IUser
}
const User:FC<UserProps> = ({user})=>{
    return (
        <div>
            <h1>{user.name}</h1>
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
        </div>
    )
}
export default User