import { useState } from "react";
import Title from "../components/Section/Title";
import MovieList from "./../components/Movie/MovieList";
import LoadingBar from "react-top-loading-bar";

const Main = () => {
  const [value, setValue] = useState("day");
  const [progress, setProgress] = useState(0);
  const [movieCardData, setMovieCardData] = useState(value);
  const data = ["day", "week"];

  const handleToggle = (selectedValue) => {
    const result = data[selectedValue];
    setValue(result);
    setProgress(5);
    setTimeout(() => {
      setProgress(100);
      setMovieCardData(result);
    }, 1000);
  };

  return (
    <>
      {/* Trending */}
      <div className="Trending">
        <Title
          title="Trending"
          onToggle={handleToggle}
          items={["Today", "This Week"]}
        />
        <LoadingBar
          color="rgba(1,180,228,1)"
          height={3}
          progress={progress}
          onLoaderFinished={() => setProgress(0)}
        />
        <MovieList value={movieCardData} />
      </div>
    </>
  );
};

export default Main;
