import API from "./services/API";
import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function FetchData() {
      const fetchData = await API();
      const datas = fetchData.data.results;
      setData(datas);
    }
    FetchData();
  }, []);

  return (
    <div>
      <h1>Movie List</h1>
      <ul>
        {data.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
