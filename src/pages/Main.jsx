import Books from "../components/Books";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";
import loadingGif from "../img/GeneralUnpleasantApisdorsatalaboriosa-size_restricted.gif";

function Main() {
  const { status } = useSelector((state) => state.books);

  return (
    <>
      {status === "pending" && (
        <div className="data-pending _container">
          <img src={loadingGif} alt="loading-data" />
        </div>
      )}
      {status === "success" && (
        <main className="page">
          <Books />
          <Footer />
        </main>
      )}
      {status === "reject" && (
        <div className="data-reject _container">
          Error occured. Please try again later.
        </div>
      )}
    </>
  );
}
export default Main;
