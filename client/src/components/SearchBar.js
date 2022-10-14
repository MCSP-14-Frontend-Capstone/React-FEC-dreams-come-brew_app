const SearchBar = () => {
  return (
    <div className="search-container">
      <div className="beside-search">
        <h2 className="beside-text">NEW DEALS ALL MONTH!!!</h2>
      </div>
      <div className="main-search">
        <form className="searchbar" action="https://www.google.com/search" method="get">
          
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
