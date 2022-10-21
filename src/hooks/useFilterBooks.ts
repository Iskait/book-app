import useAppSelector from "./useAppSelector";

export default function useFilterBooks() {
  const { items, category } = useAppSelector((state) => state.books);
  return items.filter(
    ({ volumeInfo }, idx, arr) =>
      volumeInfo.categories?.includes(category) || category === "All"
  );
}
