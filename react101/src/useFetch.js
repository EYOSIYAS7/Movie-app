import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, changeDev] = useState(null);
  const [loading, setLoading] = useState(true);
  //  we want to fetch data from the useEffect b/c it fetch our data whenever the
  console.log(url);
  useEffect(() => {
    fetchData(url);
  }, [url]);

  async function fetchData(url) {
    console.log("fetch is called");
    const reponse = await fetch(url);
    const data = await reponse.json();

    changeDev(data);
    setLoading(false);
  }
  // every hook must return something
  // and when we export and import things its better to be in object
  return { data, loading };
};

export default useFetch;
