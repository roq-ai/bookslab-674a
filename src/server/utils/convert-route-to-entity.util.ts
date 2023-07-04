const mapping: Record<string, string> = {
  books: 'book',
  booksellers: 'bookseller',
  orders: 'order',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
