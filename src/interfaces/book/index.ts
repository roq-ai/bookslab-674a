import { BooksellerInterface } from 'interfaces/bookseller';
import { GetQueryInterface } from 'interfaces';

export interface BookInterface {
  id?: string;
  title: string;
  author: string;
  price: number;
  bookseller_id?: string;
  created_at?: any;
  updated_at?: any;

  bookseller?: BooksellerInterface;
  _count?: {};
}

export interface BookGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  author?: string;
  bookseller_id?: string;
}
