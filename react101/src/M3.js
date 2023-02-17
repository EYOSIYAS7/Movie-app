import Devs from "./Getlist";
import useFetch from "./useFetch";
const M3 = () => {
  const { data: developers, loading } = useFetch(
    "https://api.themoviedb.org/3/tv/1399 ?api_key=2f26442e27b534a28f74234a17cc44b8&language=en-US"
  );
  return (
    <div className="m2-content">
      {loading && <p>loading ....</p>}
      {developers && <Devs devs={developers} />}
    </div>
  );
};

export default M3;
