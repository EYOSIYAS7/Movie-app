import { Link } from "react-router-dom";

const Search = ({ devs, title, subtitle }) => {
  // so this is destructuring
  let movies = devs.results;

  return (
    <div className="container-lg">
      <h3 className="mb-4 mt-3">
        <span className="text-warning me-2 fw-bold">|</span>
        {title}
      </h3>{" "}
      <p className="lead">{subtitle}</p>
      <div className="row justify-content-evenly">
        {movies.map((element) => (
          <div className="col-2 mb-3 ms-2">
            <div className="card ">
              <Link to={`/see/${element.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${element.poster_path}`}
                  className="card-img-top"
                  alt="..."
                />
              </Link>

              <p className="text-start mt-3 ms-2 ">
                {" "}
                <i className="fa-solid fa-star"></i>
                <span className="ms-2">{element.vote_average.toFixed(1)}</span>
              </p>
              <p className="text-start ms-2 ">
                {" "}
                <Link
                  to={`/see/${element.id}/tv`}
                  className="text-white text-decoration-none"
                >
                  {" "}
                  {element.name}
                </Link>
                <Link
                  to={`/see/${element.id}/movie`}
                  className="text-white text-decoration-none"
                >
                  {" "}
                  {element.title}
                </Link>
              </p>
              {/* <p className="">
                {element.release_date} {element.first_air_date}
              </p> */}
              <button className="btn btn-sm btn-outline-warning border-0">
                {" "}
                <i className="fa-solid fa-plus"></i>
                <span className="ms-2">watchList</span>
              </button>
              <button className="btn btn-sm btn-outline-primary mt-2 border-0 mb-2">
                {" "}
                <i className="fa-solid fa-play"></i>
                <span className="ms-2">Trailer</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
