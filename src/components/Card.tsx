import { Link } from "react-router-dom";
import useActions from "../hooks/useActions";

interface CardProps {
  title: string;
  authors: string[];
  imageLinks: {
    thumbnail: string;
  };
  categories: string[];
  description: string;
  infoLink: string;
}

function Card({
  title,
  authors = [],
  imageLinks,
  categories,
  description,
  infoLink,
}: CardProps) {
  const { setCard } = useActions();
  return (
    <Link
      to="/book-app/book-card"
      onClick={() =>
        setCard({
          title,
          authors,
          image: imageLinks.thumbnail,
          categories,
          description,
          infoLink,
        })
      }
      className="card"
    >
      {imageLinks && (
        <img className="card__image" src={imageLinks.thumbnail} alt="book" />
      )}
      {categories && <p className="card__category">{categories[0]}</p>}
      <p className="card__title">{title}</p>
      {authors.map((v, i) => (
        <p key={i} className="card__authors">
          {v}
        </p>
      ))}
    </Link>
  );
}

export default Card;
