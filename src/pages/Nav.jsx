import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";


const Nav = () => {
    const {user, logOut} = useContext(AuthContext);

    const handleLogout=()=>{
        logOut();
    }

    const links=<>
    <NavLink to={'/'}>Home</NavLink>
    <NavLink to={'/order'}>Order</NavLink>
    {
        user && <>
         <NavLink to={'/profile'}>Profile</NavLink>
    <NavLink to={'/blog'}>Blog</NavLink>
        
        </>
    }

    
    </>
    return (
        <div>
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       <li>{links}</li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Travel guru</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li className="flex flex-row">{links}</li>
    </ul>
  </div>
  <div className="navbar-end">
    {
        user ? <>
        <p>{user.email}</p>
        <button onClick={handleLogout} className="btn">Sign Out</button>

        </> :
        
        
   <Link to={'/login'}><button className="btn">Login</button> </Link>
    }
  </div>
</div>
        </div>
    );
};

export default Nav;