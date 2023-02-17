import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Data from "./data";
const See = ({ name }) => {
  const [data, changeDev] = useState(null);
  const { id } = useParams();
  const { type } = useParams();
  console.log(type);
  var url = `https://api.themoviedb.org/3/${type}/${id}?api_key=2f26442e27b534a28f74234a17cc44b8&language=en-US`;
  // if (name) {
  //   url = `https://api.themoviedb.org/3/${name}/${id}?api_key=15e383204c1b8a09dbfaaa4c01ed7e17&language=en-US`;
  // }

  useEffect(() => {
    fetchData(url);
  }, [url]);
  async function fetchData(url) {
    console.log("fetch is called");
    const reponse = await fetch(url);
    const data = await reponse.json();

    changeDev(data);
  }

  return <div className="container-lg">{data && <Data movie={data} />}</div>;
};

export default See;
