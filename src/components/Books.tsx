import Card from "./Card";
import useAppSelector from "../hooks/useAppSelector";
import useFilterBooks from "../hooks/useFilterBooks";
function Books() {
  const { totalItems } = useAppSelector((state) => state.books);
  const items = useFilterBooks();
  return (
    <div className="books">
      <h2 className="books_total">Found {totalItems} results</h2>
      <div className="books__row">
        {totalItems && !items.length
          ? "No books under this category."
          : items.map(({ volumeInfo }, idx) => (
              <Card key={`${volumeInfo.title}${idx}`} {...volumeInfo} />
            ))}
      </div>
    </div>
  );
}

export default Books;
