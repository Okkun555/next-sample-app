import { User } from "./user";

export type Category = "shoes" | "clothes" | "book";

export type Condition = "new" | "used";

export type Product = {
  id: number;
  category: Category;
  title: string;
  description: string;
  imageUrl: string;
  blurDateUrl: string;
  price: number;
  condition: Condition;
  owner: User;
};
