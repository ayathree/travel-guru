import Nav from "./Nav";
import {Outlet} from 'react-router-dom'



const Root = () => {
    
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
            
        </div>
    );
};

export default Root;