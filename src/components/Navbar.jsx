import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi";

import './Navbar.css';

export default function Navbar() {

  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(search);

    if (!search) return;

    navigate(`/search?q=${search}`)
    setSearch("");

  };


  return (
    <nav id="navbar">

      <div className='logo'>
        <Link to="/">
          <img src='/public/cat.png' width="70px" />
        </Link>

        <h2>
          <Link to="/">
            <span>Cat</span>Cinema
          </Link>
        </h2>
      </div>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="search a movie"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <button type="submit">
          <BiSearchAlt2 />

        </button>
      </form>
    </nav>
  );
}