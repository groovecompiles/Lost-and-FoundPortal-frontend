import { Link } from "react-router-dom";
import {
  FaSearch,
  FaPlusCircle,
  FaBoxOpen,
  FaClipboardList,
} from "react-icons/fa";

import hero from "../assets/hero.svg";
import "./Home.css";

function Home() {
  return (
    <div className="home">

      {/* ================= Hero Section ================= */}

      <div className="hero">

        <div className="hero-content">

          {/* Left Side */}

          <div className="hero-text">

            <h1>Welcome to Lost &amp; Found Portal</h1>

            <p>
              Easily report lost items and help others recover their
              belongings through a secure, fast, and user-friendly platform.
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
                  <FaPlusCircle />
                  Report Found Item
                </button>
              </Link>

            </div>

          </div>

          {/* Right Side Illustration */}

          <div className="hero-image">

            <img
              src={hero}
              alt="Lost and Found Illustration"
            />

          </div>

        </div>

      </div>

      {/* ================= Cards Section ================= */}

      <div className="cards">

        {/* Lost Items Card */}

        <div className="card">

          <FaClipboardList className="card-icon" />

          <h2>Lost Items</h2>

          <p>
            Browse all reported lost items and help reconnect them with their owners.
          </p>

          <Link to="/view-lost-items">

            <button className="viewLostBtn">

              <FaSearch />

              View Lost Items

            </button>

          </Link>

        </div>

        {/* Found Items Card */}

        <div className="card">

          <FaBoxOpen className="card-icon" />

          <h2>Found Items</h2>

          <p>
            Explore reported found items and help return them to the rightful owner.
          </p>

          <Link to="/view-found-items">

            <button className="viewFoundBtn">

              <FaSearch />

              View Found Items

            </button>

          </Link>

        </div>

      </div>

    </div>
  );
}

export default Home;