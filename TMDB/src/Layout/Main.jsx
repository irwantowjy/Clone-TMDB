import MovieList from "../components/Movie/MovieList";
import Title from "../components/Section/Title";

function Main() {
  const handleToggle = (selectedValue) => {
    console.log(selectedValue);
  };

  return (
    <>
      <Title
        title="Trending"
        onToggle={handleToggle}
        items={["Today", "This Week"]}
      />
      <MovieList />
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
