export type IReview = {
  reviewer: string;
  rating: string;
  comment: string;
  _id?: string;
};

export interface IBook {
  _id?: string;
  email: string;
  title: string;
  image: string;
  description: string;
  author: string;
  genre: string;
  publication_date: string;
  reviews?: IReview[];
}
