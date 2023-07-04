import { BooksellerInterface } from 'interfaces/bookseller';
import { GetQueryInterface } from 'interfaces';

export interface OrderInterface {
  id?: string;
  customer_name: string;
  delivery_address: string;
  bookseller_id?: string;
  created_at?: any;
  updated_at?: any;

  bookseller?: BooksellerInterface;
  _count?: {};
}

export interface OrderGetQueryInterface extends GetQueryInterface {
  id?: string;
  customer_name?: string;
  delivery_address?: string;
  bookseller_id?: string;
}
