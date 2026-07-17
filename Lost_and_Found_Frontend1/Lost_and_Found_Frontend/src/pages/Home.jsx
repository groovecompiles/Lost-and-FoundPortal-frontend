import { Link } from "react-router-dom";
import {
  FaSearch,
  FaPlusCircle,
  FaBoxOpen,
  FaClipboardList
} from "react-icons/fa";

import "./Home.css";


function Home() {

  return (

    <div className="home">


      <div className="hero">


        <h1>
          Welcome to Lost & Found Portal
        </h1>


        <p>
          Report your lost items or help others by reporting found items.
        </p>



        <div className="buttons">


          <Link to="/lost-items">

            <button className="lostBtn">

              <FaPlusCircle />

              Report Lost Item

            </button>

          </Link>



          <Link to="/found-items">

            <button className="foundBtn">

              <FaSearch />

              Report Found Item

            </button>

          </Link>


        </div>


      </div>




      <div className="cards">



        <div className="card">


          <FaClipboardList className="card-icon"/>


          <h2>
            Lost Items
          </h2>


          <p>
            View all reported lost items.
          </p>



          <Link to="/view-lost-items">

            <button>
              <FaSearch/>
              View Lost Items
            </button>

          </Link>


        </div>





        <div className="card">


          <FaBoxOpen className="card-icon"/>


          <h2>
            Found Items
          </h2>


          <p>
            View all reported found items.
          </p>



          <Link to="/view-found-items">

            <button>
              <FaSearch/>
              View Found Items
            </button>

          </Link>


        </div>



      </div>



    </div>

  );

}


export default Home;