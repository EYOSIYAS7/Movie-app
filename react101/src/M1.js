import Devs from "./Getlist";
import useFetch from "./useFetch";
const M1 = () => {
  const { data: movie, loading } = useFetch(
    "https://api.themoviedb.org/3/movie/popular?api_key=2f26442e27b534a28f74234a17cc44b8&language=en-US&page=1"
  );
  const { data: top, pending } = useFetch(
    "https://api.themoviedb.org/3/movie/top_rated?api_key=2f26442e27b534a28f74234a17cc44b8&language=en-US&page=1"
  );
  const { data: latest, scroll } = useFetch(
    "https://api.themoviedb.org/3/movie/now_playing?api_key=2f26442e27b534a28f74234a17cc44b8&language=en-US&page=1"
  );

  return (
    <div className="m1-content">
      {loading && <p>loading ....</p>}
      {top && (
        <Devs
          data={movie}
          title="most popular"
          subtitle="This week's topmovies"
        />
      )}
      {pending && <p>loading ....</p>}
      {latest && (
        <Devs
          data={latest}
          title="latest movies"
          subtitle="This week's latest"
        />
      )}
      {pending && <p>loading ....</p>}
      {top && (
        <Devs
          data={top}
          title="Top rated movies"
          subtitle="All time top rated movies"
        />
      )}
    </div>
  );
};

export default M1;
