import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('products').del();

  // Inserts seed entries
  await knex('products').insert([
    { name: 'rice', price: 1, stock: 10 },
    { name: 'beans', price: 2, stock: 20 },
    { name: 'potatoes', price: 3, stock: 30 },
    { name: 'broccoli', price: 4, stock: 40 },
    { name: 'carrots', price: 5, stock: 50 },
    { name: 'cucumbers', price: 6, stock: 60 },
    { name: 'onions', price: 7, stock: 70 },
    { name: 'peppers', price: 8, stock: 80 },
    { name: 'tomatoes', price: 9, stock: 90 },
    { name: 'lettuce', price: 10, stock: 100 },
  ]);
}
