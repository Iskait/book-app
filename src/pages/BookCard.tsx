import useAppSelector from "../hooks/useAppSelector";

function BookCard() {
  const { title, authors, image, categories, description, infoLink } =
    useAppSelector((state) => state.card);
  return (
    <div className="book-card">
      <div className="book-card__column">
        <a
          target={"_blank"}
          rel="noopener noreferrer"
          href={infoLink}
          className="book-card__image"
        >
          <img src={image} alt="book" />
        </a>
        <div className="book-card__about">
          {categories && (
            <p className="book-card__categories">{categories.join(", ")}</p>
          )}
          <p className="book-card__title">{title}</p>
          {authors && (
            <p className="book-card__authors">{authors.join(", ")}</p>
          )}
          <div className="book-card__description">
            {description ? description : "No descripton."}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookCard;
