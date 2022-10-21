import useActions from "../hooks/useActions";

function Sort() {
  const { filterByCategory, sortBy } = useActions();
  const option = [
    "all",
    "art",
    "biography",
    "computers",
    "history",
    "medical",
    "poetry",
  ];
  const sortingBy = ["relevance", "newest"];
  return (
    <div className="header__sort">
      <div className="header__categories">
        <span className="header__category-names">Categories</span>
        <select
          name="categories"
          onChange={(e) => {
            const category =
              e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1);
            filterByCategory(category);
          }}
        >
          {option.map((category, idx) => (
            <option key={idx + category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div className="header__categories">
        <span className="header__category-names">Sorting by</span>
        <select name="sortingBy" onChange={(e) => sortBy(e.target.value)}>
          {sortingBy.map((sort, idx) => (
            <option key={idx + sort} value={sort}>
              {sort}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Sort;
