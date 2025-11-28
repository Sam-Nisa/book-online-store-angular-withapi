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
  categoryId?: number; //This number corresponds to the ID of a category defined in  categories constant

  // optional fields for detail page
  aboutAuthor?: string;
  description?: string;
}
