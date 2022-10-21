export default interface ApiResponse {
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
