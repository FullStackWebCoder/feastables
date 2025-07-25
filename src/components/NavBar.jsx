import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider";
import { toast } from "react-toastify";

const NavBar = () => {
  const { user,logout } = useContext(AuthContext);

  const navigate = useNavigate();

  const loginNav = ()=>{
    if(user){
      logout();
      toast.success('LoggedOut Successfully');
    }else{
      navigate('/login');
    }
  }

  return (
    <nav className="w-full fixed top-0 left-0 z-50 md:p-9 p-3 flex justify-between">
      <Link to="/">
        <img src="/images/nav-logo.webp" alt="nav-logo" className="md:w-24 w-20" />
      </Link>
        <div onClick={loginNav} className="button">
          <p>{user ? user:'Login'}</p>
        </div>
    </nav>
  );
};

export default NavBar;
