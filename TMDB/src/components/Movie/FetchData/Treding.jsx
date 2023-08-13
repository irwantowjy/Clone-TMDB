import axios from "axios";
import { useState, useEffect } from "react";
const baseUrl = import.meta.env.VITE_REACT_APP_BASEURL;
const apiKey = import.meta.env.VITE_REACT_APP_APIKEY;

const Trending = (props) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function FetchData() {
      try {
        const response = await axios.get(
          `${baseUrl}/trending/movie/${props}?api_key=${apiKey}`
        );
        return setData(response.data.results);
      } catch (err) {
        console.log("API Not Found");
        throw err;
      }
    }
    FetchData();
  }, [props]);

  return { data };
};

export default Trending;
