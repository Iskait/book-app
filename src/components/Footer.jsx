import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMore } from "../redux/slices/booksSlice";
import { API_KEY, url } from "../exports/constants";
import loadingGif from "../img/GeneralUnpleasantApisdorsatalaboriosa-size_restricted.gif";

function Footer() {
  const dispatch = useDispatch();
  const search = useSelector((state) => state.input);
  const { items, sorting, loadmore } = useSelector((state) => state.books);

  const handleLoadMore = async () => {
    dispatch(
      fetchMore(
        `${url}volumes?q=${search}&startIndex=${items.length}&maxResults=30&orderBy=${sorting}&key=${API_KEY}`
      )
    );
  };
  useEffect(() => {
    if (loadmore === "pending") {
      window.scrollTo({
        top: document.body.scrollHeight,
        left: 0,
        behavior: "smooth",
      });
    }
  }, [loadmore]);

  return (
    <footer className="footer">
      <div className="footer__container _container">
        <div className="footer__row">
          {loadmore === "pending" && (
            <div className="data-pending _container">
              <img src={loadingGif} alt="loading-data" />
            </div>
          )}
          {items.length % 30 ? (
            <p className="footer__all-loaded">All books loaded.</p>
          ) : (
            <button onClick={handleLoadMore} className="footer__load-more">
              Load more
            </button>
          )}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
