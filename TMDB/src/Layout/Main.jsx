import { useState } from "react";
import Title from "../components/Section/Title";
import MovieList from "./../components/Movie/MovieList";

function Main() {
  const [value, setValue] = useState("day");
  const data = ["day", "week"];

  const handleToggle = (selectedValue) => {
    const result = data[selectedValue];
    setValue(result);
  };

  console.log(value)
  return (
    <>
      <Title
        title="Trending"
        onToggle={handleToggle}
        items={["Today", "This Week"]}
      />
      <MovieList />
    </>
  );
}

export default Main;
