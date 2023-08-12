import Trending from "./FetchData/Treding";

function MovieCard() {
  const { data } = Trending();
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <>
      {data.map((item) => (
        <div className="text-black custom-card" key={item.id}>
          <img
            src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
            alt="Movie Image"
          />
          <h1 className="mt-3 custom-movie-title">{item.title}</h1>
          <p>{formatDate(item.release_date)}</p>
        </div>
      ))}
    </>
  );
}

export default MovieCard;
