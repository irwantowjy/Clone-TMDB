import { useEffect } from "react";
import { useState } from "react";
import API from "./API";

function FetchData() {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    async function FetchData() {
      const fetchData = await API();
      const datas = fetchData.data.results;
      setData(datas);
    }
    FetchData();
  }, []);

  return { data };
}

export default FetchData;
