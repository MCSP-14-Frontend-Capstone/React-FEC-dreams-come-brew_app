const SearchBar = () => {
  return (
    <div className="search-container">
      <div className="beside-search"></div>
      <div className="main-search">
        <form className="searchbar" action="">
          
          <input className="search" type="text" placeholder="Search Anything" />
          <button type="submit">
            {" "}
            <img
              src="https://www.seekpng.com/png/detail/65-659285_search-icon-transparent-background-material-design-magnifying-glass.png"
              alt=""
            />
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
