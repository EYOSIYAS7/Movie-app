const Data = ({ movie }) => {
  let style = {
    // backgroundImage: `url(https://image.tmdb.org/t/p/w600_and_h900_bestv2/${movie.poster_path})`,
    // backgroundRepeat: "no-repeat",
    // backgroundSize: "contain",
    // backgroundPosition: "center",
    height: "500px",
    width: "450px",
  };
  return (
    <div>
      <div className="container">
        <div className="row justify-content-evenly">
          <div className="col-5 mt-5 text-center " style={style}>
            <img
              src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${movie.poster_path}`}
              c
              alt="..."
              style={style}
            />
          </div>
          <div className="col-6 ">
            <h3 className="mt-5 mb-2">
              {movie.title} {movie.name}
            </h3>
            <p className="text-secondary">{movie.tagline}</p>
            <a className="d-block text-decoration-none" href={movie.homepage}>
              click here
            </a>
            <p>{movie.overview}</p>
            <p> Genera: {movie.genres.map((item) => item.name + ", ")} </p>
            <p> status: {movie.status}</p>
            <p>
              released date: {movie.release_date} {movie.first_air_date}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Data;
