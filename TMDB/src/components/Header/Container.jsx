import { useEffect, useState } from "react";
import SearchBar from "../Search Bar/SearchBar";
import "./Container.css";

function Container() {
  const [randomImage, setRandomImage] = useState("");

  const renderBanner = () => {
    const myImages = [
      "https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,00192f,00baff)/SqAZjEqqBAYvyu3KSrWq1d0QLB.jpg",
      "https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,00192f,00baff)/9xfDWXAUbFXQK585JvByT5pEAhe.jpg",
      "https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,00192f,00baff)/tfw5LKySp7uEYJ3CUuD4TKx3s8y.jpg",
      "https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,00192f,00baff)/u7OpeS4eckBSR1wFxFTuyy3FjHE.jpg",
      "https://www.themoviedb.org/t/p/w880_and_h600_multi_faces_filter(duotone,00192f,00baff)/xcXALwBjdHIjrESpGVhghqj8fGT.jpg",
      "https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,00192f,00baff)/hoVj2lYW3i7oMd1o7bPQRZd1lk1.jpg",
    ];
    const randomImageIndex = Math.floor(Math.random() * myImages.length);
    return myImages[randomImageIndex];
  };

  useEffect(() => {
    const imageUrl = renderBanner();
    setRandomImage(imageUrl);
  }, []);

  return (
    <div className="container-fluid col-11 custom-container d-flex justify-content-center align-items-center">
      <div className="banner">
        <div className="overlay"></div>
        <img src={randomImage} alt="Background" className="image" />
      </div>
      <div className="container text-white">
        <div className="mt-4">
          <h1>Welcome.</h1>
          <h3>
            Millions of movies, TV shows and people to discover. Explore now.
          </h3>
        </div>
        <div className="py-4">
          <SearchBar />
        </div>
      </div>
    </div>
  );
}

export default Container;
