import { useEffect } from "react";
import useAppSelector from "../hooks/useAppSelector";
import useActions from "../hooks/useActions";
import loadingGif from "../assets/loading.gif";

function Footer() {
  const { items, status } = useAppSelector((state) => state.books);
  const { fetchBooks } = useActions();
  useEffect(() => {
    if (status === "pending" && items.length) {
      window.scrollTo({
        top: document.body.scrollHeight,
        left: 0,
        behavior: "smooth",
      });
    }
  }, [items.length, status]);

  return (
    <footer className="footer">
      <div className="footer__container _container">
        <div className="footer__row">
          {status === "pending" && (
            <div className="data-pending _container">
              <img src={loadingGif} alt="loading-data" />
            </div>
          )}
          {items.length % 30 ? (
            <p className="footer__all-loaded">All books loaded.</p>
          ) : (
            <button onClick={fetchBooks} className="footer__load-more">
              Load more
            </button>
          )}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
