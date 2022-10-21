import "./scss/all.scss";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import BookCard from "./pages/BookCard";
import Header from "./components/Header";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Routes>
        <Route path="/book-app" element={<Main />} />
        <Route path="/book-app/book-card" element={<BookCard />} />
      </Routes>
    </div>
  );
}

export default App;
