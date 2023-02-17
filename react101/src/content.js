import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Devs from "./Getlist";
import useFetch from "./useFetch";

const Content = () => {
  // using useState Hook

  //1396 84773 60625 1399
  // using custom hooks for reusability in different  components
  // this are the datas that are returend from the useFetch hook

  const [data, fetchData] = useState(null);
  useEffect(() => {
    datafetched();
  }, []);

  // for checking
  const datafetched = async () => {
    const response = await fetch("/api/watchList");
    const data = await response.json();
    fetchData(data);
  };
  console.log(data);

  const signuphandler = async () => {
    const response = await fetch("/api/watchList/signUp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    console.log(data);
  };
  //
  // this are not a state we are importing data's from the useFetch hook
  // destructuring
  const { data: developers, loading } = useFetch(
    "https://api.themoviedb.org/3/trending/all/day?api_key=2f26442e27b534a28f74234a17cc44b8"
  );

  const { data: movie, loading: pending } = useFetch(
    "https://api.themoviedb.org/3/tv/airing_today?api_key=2f26442e27b534a28f74234a17cc44b8&language=en-US&page=1"
  );
  const { data: top_rated, loading: fetching } = useFetch(
    "https://api.themoviedb.org/3/movie/upcoming?api_key=2f26442e27b534a28f74234a17cc44b8&language=en-US&page=1"
  );

  const { data: popular, loading: still } = useFetch(
    "https://api.themoviedb.org/3/tv/popular?api_key=2f26442e27b534a28f74234a17cc44b8&language=en-US&page=1"
  );
  return (
    // JSX expressions must have one parent element

    <div className="content">
      {/* i will use the props for the api data */}
      <h2 className=" ms-5 m-4 text-warning">What to watch</h2>
      <div className="container-lg">
        <h3 className="mb-4 mt-3">
          <span className="text-warning me-2 fw-bold">|</span>
          From your WatchList
        </h3>
      </div>

      <div className="text-center mt-5 mb-5">
        <p>Sign in to access your Watchlist</p>
        <p>Save shows and movies to keep track of what you want to watch.</p>
        <button
          className="btn btn-warning "
          onClick={() => {
            signuphandler();
          }}
        >
          {" "}
          <Link to="*" className="text-decoration-none text-black">
            <span className="pe-2 ps-2">sign in</span>{" "}
          </Link>
        </button>
      </div>

      {loading && <p>loading ....</p>}
      {/* {data && <Devs data={data} title="From your WatchList" />} */}
      {developers && (
        <Devs
          data={developers}
          title="Trending"
          subtitle="This week's top TV shows and movies"
        />
      )}
      {popular && (
        <Devs
          data={popular}
          title="Most popular tv shows"
          subtitle="This weeks fans favorite"
        />
      )}
      {top_rated && (
        <Devs
          data={top_rated}
          title="Movies in theatres"
          subtitle="Get a list of upcoming movies in theatres"
        />
      )}
      {movie && (
        <Devs
          data={movie}
          title="Airing today"
          subtitle="Get a list of TV shows that are airing today."
        />
      )}

      {/* when we use a method we just call it by its name no parenthesis */}
    </div>
  );
};

export default Content;
