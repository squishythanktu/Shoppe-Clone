export const sortBy = {
  createdAt: 'createdAt',
  view: 'view',
  sold: 'sold',
  price: 'price'
} as const // to readonly

export const order = {
  asc: 'asc',
  desc: 'desc'
} as const // to readonly
