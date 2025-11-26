export interface Book {
  id: number;
  images: string;
  title: string;
  authors: {
    name: string;
    birth_year: number;
    death_year: number;
  }[];
  authorName?: string;
  price: number;
  summaries: string;
  subjects: string[];
  languages: string[];
  categoryId?: number;

  // optional fields for detail page
  aboutAuthor?: string;
  productDetail?: string;
  description?: string;
}
