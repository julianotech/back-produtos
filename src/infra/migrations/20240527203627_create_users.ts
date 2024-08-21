import { hashPassword } from '../../support/hash';
import type { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('users', (table) => {
    table.increments('id').primary().unsigned().notNullable();
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('password').notNullable();
    table.string('administrator').notNullable();
  });

  await knex('users').insert([
    {
      id: 1,
      name: 'Admin',
      email: 'admin@example.com',
      password: await hashPassword('admin'),
      administrator: 'true',
    },
    {
      id: 2,
      name: 'User',
      email: 'user@example.com',
      password: await hashPassword('user'),
      administrator: 'false',
    },
  ]);
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('users');
}
