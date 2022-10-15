import products from "../data";
import SearchContext from "../context/SearchContext";
import { useContext } from "react";
import Searchitems from "./Searchitems";

const SearchBar = () => {
  const { searchValue, setSearchValue } = useContext(SearchContext);

  const handleChange = (e) => {
    setSearchValue(e.target.value);
    // console.log(products.filter(prod => prod.name.toLowerCase().includes("ja")))
  };
  return (
    <div className="search-container">
      <div className="beside-search">
        <h2 className="beside-text">NEW DEALS ALL MONTH!!!</h2>
      </div>
      <div className="main-search">
        <div className="search-pop">
          <form
            className="searchbar"
            action="https://www.google.com/search"
            method="get"
          >
            <input
              className="search"
              type="text"
              placeholder="Search Anything"
              onChange={handleChange}
            />
            <button type="submit">
              {" "}
              <img
                src="https://www.seekpng.com/png/detail/65-659285_search-icon-transparent-background-material-design-magnifying-glass.png"
                alt=""
              />
            </button>
          </form>
          <div
            style={{
              display: searchValue == "" ? "none" : "",
            }}
            className="hide"
          >
            {products
              .filter((product) =>
                product.name.toLowerCase().includes(searchValue)
              )
              .map((product) => (
                <Searchitems key={product.id} product={product} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
