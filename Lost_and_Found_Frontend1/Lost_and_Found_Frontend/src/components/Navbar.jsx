import { Link, useNavigate } from "react-router-dom";
import {
  FaHome,
  FaSearch,
  FaPlusCircle,
  FaBoxOpen,
  FaUserPlus,
  FaSignInAlt,
  FaSignOutAlt
} from "react-icons/fa";

import "./Navbar.css";


function Navbar() {

  const navigate = useNavigate();


  const handleLogout = () => {

    localStorage.removeItem("token");

    alert("Logged Out Successfully");

    navigate("/login");

  };


  return (

    <nav className="navbar">


      <div className="logo">
        Lost & Found Portal
      </div>



      <ul className="nav-links">


        <li>
          <Link to="/">
            <FaHome />
            Home
          </Link>
        </li>



        <li>
          <Link to="/lost-items">
            <FaPlusCircle />
            Add Lost Item
          </Link>
        </li>



        <li>
          <Link to="/view-lost-items">
            <FaSearch />
            View Lost Items
          </Link>
        </li>



        <li>
          <Link to="/found-items">
            <FaPlusCircle />
            Add Found Item
          </Link>
        </li>



        <li>
          <Link to="/view-found-items">
            <FaBoxOpen />
            View Found Items
          </Link>
        </li>



        <li>
          <Link to="/login">
            <FaSignInAlt />
            Login
          </Link>
        </li>



        <li>
          <Link to="/register">
            <FaUserPlus />
            Register
          </Link>
        </li>



        <li>

          <button 
          className="logout-btn" 
          onClick={handleLogout}
          >

            <FaSignOutAlt />
            Logout

          </button>

        </li>


      </ul>


    </nav>

  );
}


export default Navbar;