import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";


const Profile = () => {
    const {user}= useContext(AuthContext)
    return (
        <div>
            <h2>User name: {user.email}</h2>
        </div>
    );
};

export default Profile;