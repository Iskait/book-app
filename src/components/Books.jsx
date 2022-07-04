import Card from "./Card";
import { useSelector } from "react-redux";
function Books() {
  const { totalItems, filtered: items } = useSelector((state) => state.books);
  return (
    <div className="books">
      <h2 className="books_total">Found {totalItems} results</h2>
      <div className="books__row">
        {totalItems && !items.length
          ? "No books under this category."
          : items.map((item, idx) => <Card key={item + idx} {...item} />)}
      </div>
    </div>
  );
}

export default Books;
