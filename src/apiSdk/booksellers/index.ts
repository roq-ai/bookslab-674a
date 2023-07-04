import axios from 'axios';
import queryString from 'query-string';
import { BooksellerInterface, BooksellerGetQueryInterface } from 'interfaces/bookseller';
import { GetQueryInterface } from '../../interfaces';

export const getBooksellers = async (query?: BooksellerGetQueryInterface) => {
  const response = await axios.get(`/api/booksellers${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createBookseller = async (bookseller: BooksellerInterface) => {
  const response = await axios.post('/api/booksellers', bookseller);
  return response.data;
};

export const updateBooksellerById = async (id: string, bookseller: BooksellerInterface) => {
  const response = await axios.put(`/api/booksellers/${id}`, bookseller);
  return response.data;
};

export const getBooksellerById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/booksellers/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteBooksellerById = async (id: string) => {
  const response = await axios.delete(`/api/booksellers/${id}`);
  return response.data;
};
