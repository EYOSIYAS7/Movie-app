import Devs from "./Getlist";
import useFetch from "./useFetch";
const M2 = () => {
  // this is the amazing custom hook
  const { data: tv, loading } = useFetch(
    "https://api.themoviedb.org/3/tv/popular?api_key=2f26442e27b534a28f74234a17cc44b8&language=en-US&page=1"
  );
  const { data: Top, waiting } = useFetch(
    "https://api.themoviedb.org/3/tv/top_rated?api_key=2f26442e27b534a28f74234a17cc44b8&language=en-US&page=1"
  );
  const { data: Airing, pending } = useFetch(
    "https://api.themoviedb.org/3/tv/airing_today?api_key=2f26442e27b534a28f74234a17cc44b8&language=en-US&page=1"
  );

  return (
    <div className="m2-content">
      {loading && <p>loading ....</p>}
      {tv && (
        <Devs
          data={tv}
          title="most popular"
          subtitle="This fans favorite movies"
        />
      )}
      {pending && <p>loading ....</p>}
      {Airing && (
        <Devs
          data={Airing}
          title="Airing today"
          subtitle="Get the list of tv shows airing today"
        />
      )}
      {waiting && <p>loading ....</p>}
      {Top && (
        <Devs
          data={Top}
          title="Top Rated"
          subtitle="All times Top Rated tv shows"
        />
      )}
    </div>
  );
};

export default M2;
