import Books from "../components/Books";
import Footer from "../components/Footer";
import useAppSelector from "../hooks/useAppSelector";
import loadingGif from "../assets/loading.gif";

function Main() {
  const { status, items } = useAppSelector((state) => state.books);
  return (
    <>
      {status === "pending" && !items.length && (
        <div className="data-pending _container">
          <img src={loadingGif} alt="loading-data" />
        </div>
      )}
      {(status === "success" || items.length) && (
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
