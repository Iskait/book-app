import Sort from "./Sort";
import searchIcon from "../assets/search.svg";
import useAppSelector from "../hooks/useAppSelector";
import { useLocation, useNavigate } from "react-router-dom";
import useActions from "../hooks/useActions";

function Header() {
  const { fetchBooks, setInput, clearItems } = useActions();
  const search = useAppSelector((state) => state.input);
  const location = useLocation();
  const navigate = useNavigate();
  const handleEnterKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      return handleSearch();
    }
  };

  const handleSearch = () => {
    clearItems();
    fetchBooks();
  };

  return (
    <header className="header">
      <div className="header__container _container">
        <div className="header__column">
          <h1 className="header__title">Search for books</h1>
          <div className="header__input">
            <input
              type="text"
              placeholder="Search for books..."
              value={search}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => handleEnterKey(e)}
            />
            <img
              className="header__search"
              src={searchIcon}
              alt="search-button"
              onClick={handleSearch}
            />
          </div>
        </div>
        <Sort />
      </div>
    </header>
  );
}

export default Header;
