import { useState } from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
  const [name, setName] = useState("");
  return (
    <div className="navBar container-lg">
      <div className=" row justify-content-evenly mt-5">
        <div className="col-4">
          <Link to="/" className="text-danger text-decoration-none ">
            {" "}
            <h1 className="d-inline">EMDB</h1>
          </Link>
        </div>
        <div className="col-5">
          <form>
            <div className="input-group">
              <input
                type="text"
                placeholder="type and click the search icon"
                className="form-control "
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <button className="input-group-text">
                <Link to={`/movie/:${name}`}>
                  {" "}
                  <i id="search" class="bi bi-search"></i>
                </Link>
              </button>
            </div>
          </form>
        </div>
        <div className="col-1 navLink ">
          <Link to="/movie" className=" text-decoration-none link">
            Movie
          </Link>
        </div>
        <div className="col-1 navLink">
          <Link to="/tv" className="text-decoration-none link ">
            Tv
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
