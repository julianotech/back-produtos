import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("products", (table) => {
    table.increments("id");
    table.string("name");
    table.integer("price").defaultTo(1);
    table.integer("stock").defaultTo(0);
  });
}


export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable("products");
}

