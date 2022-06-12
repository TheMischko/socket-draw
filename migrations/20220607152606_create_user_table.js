/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = async function(knex) {
  await knex.schema.createTable('users', (table) => {
    table.increments('id');
    table.string('login').notNullable();
    table.string('email').notNullable();
    table.string('password').notNullable();
    table.timestamp('created_at');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = async function(knex) {
  await knex.schema.dropTable('todos');
};
