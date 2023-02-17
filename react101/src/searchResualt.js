import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import Search from "./dev2";
const Result = () => {
  //  to get the router parameter
  const { name } = useParams();
  const { data: result, loading: fetching } = useFetch(
    `https://api.themoviedb.org/3/search/multi?api_key=2f26442e27b534a28f74234a17cc44b8&language=en-US&query=${name}&page=1&include_adult=false`
  );

  return (
    <div className="details">
      {fetching && <p>please wait for just a few seconds ...</p>}
      {result && (
        <Search
          devs={result}
          title="search results"
          subtitle="Get a list of TV shows and movies."
        />
      )}
    </div>
  );
};

export default Result;
