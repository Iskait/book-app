import Sort from "./Sort";
import searchIcon from "../img/icons8-search.svg";
import { useSelector, useDispatch } from "react-redux";
import { setInput } from "../redux/slices/inputSlice";
import { fetchBooks } from '../redux/slices/booksSlice';
import { API_KEY, url } from '../exports/constants'; 
import { useLocation, useNavigate } from 'react-router-dom';


function Header() {
  const dispatch = useDispatch();
  const search = useSelector((state) => state.input);
  const { sorting } = useSelector(state=>state.books);
  const location = useLocation();
  const navigate = useNavigate();
  const handleEnterKey = (e) => {
    if (e.key === 'Enter') {
      return handleSearch ();
    }
  }
  
  const handleSearch = () => {
    dispatch(fetchBooks(`${url}volumes?q=${search}&maxResults=30&orderBy=${sorting}&key=${API_KEY}`));
    if (location.pathname === '/book-app/book-card') {
      navigate('/book-app');
    }
  }

  

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
              onChange={(e) => dispatch(setInput({ value: e.target.value }))}
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
