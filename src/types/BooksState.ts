export default interface BooksState {
  status: "idle" | "pending" | "success" | "reject";
  loadmore: "idle" | "pending" | "success" | "reject";
  category: string;
  sorting: string;
  totalItems: number;
  items: {
    volumeInfo: {
      title: string;
      infoLink: string;
      description: string;
      authors: string[];
      categories: string[];
      imageLinks: {
        smallThumbnail: string;
        thumbnail: string;
      };
    };
  }[];
}
