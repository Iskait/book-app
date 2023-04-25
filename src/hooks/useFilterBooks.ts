import useAppSelector from "./useAppSelector";

export default function useFilterBooks() {
  const { items, category } = useAppSelector((state) => state.books);
  return items.filter(
    ({ volumeInfo }) =>
      volumeInfo.categories?.includes(category) || category === "All"
  );
}
