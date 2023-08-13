import { useState } from "react";
import Title from "../components/Section/Title";
import MovieList from "./../components/Movie/MovieList";

const Main = () => {
  const [value, setValue] = useState("day");
  const data = ["day", "week"];

  const handleToggle = (selectedValue) => {
    const result = data[selectedValue];
    setValue(result);
  };
  return (
    <div>
      <Title
        title="Trending"
        onToggle={handleToggle}
        items={["Today", "This Week"]}
      />
      <MovieList value={value} />
      <Title
        title="Trending"
        onToggle={handleToggle}
        items={["Today", "This Week"]}
      />
    </div>
  );
};

export default Main;
