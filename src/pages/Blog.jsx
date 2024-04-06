import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";


const Blog = () => {
    const {user}= useContext(AuthContext)
    return (
        <div>
            <h2>Blog for:{user.email}</h2>
        </div>
    );
};

export default Blog;