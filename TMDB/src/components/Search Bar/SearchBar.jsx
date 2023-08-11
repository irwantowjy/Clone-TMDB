import { useRef } from "react";
import SearchButton from "./SearchButton";
import "./SearchBar.css";

function SearchBar() {
  const searchRef = useRef();
  const handleSearch = () => {
    console.log(searchRef.current.value);
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      console.log(searchRef.current.value);
    }
  };

  return (
    <div className="position-relative">
      <input
        ref={searchRef}
        onKeyDown={handleKeyDown}
        className="custom-search px-4 py3"
        type="text"
        placeholder="Search for a movie, tv show, person......"
      />
      <div className="position-absolute top-0 end-0">
        <SearchButton onClick={handleSearch} />
      </div>
    </div>
  );
}

export default SearchBar;
