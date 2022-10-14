const SearchBar = () => {
  return (
    <div className="search-container">
      <div className="beside-search"></div>
      <form action="">
        \
        <input className="search" type="text" />
        <button type="submit">
          {" "}
          <img
            src="https://www.seekpng.com/png/detail/65-659285_search-icon-transparent-background-material-design-magnifying-glass.png"
            alt=""
          />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
