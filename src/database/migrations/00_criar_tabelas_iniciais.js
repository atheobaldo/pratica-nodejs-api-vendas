const knex = require('knex')

exports.up = async (knex) => {
    return knex.schema
    .createTable('categorias', (table) => {
        table.uuid('codigo').primary
        table.string('nome', 25).unique().notNullable()
    })

    .createTable('fornecedores', (table) => {
        table.uuid('codigo').primary()
        table.string('nome', 40).unique().notNullable() 
        table.string('email', 60)
        table.string('fone', 15)  
    })

    .createTable('produtos', (table) => {
        table.uuid('codigo').primary()
        table.string('nome', 25).unique().notNullable() 
        table.uuid('codigoCategoria') 
             .notNullable() 
             .references('codigo')
             .inTable('categorias')
        table.uuid('codigoFornecedor')
             .notNullable()  
             .references('codigo')
             .inTable('fornecedores')
        table.decimal('valor').notNullable() 
        table.integer('ativo').notNullable() 
    })
}

exports.down = async(knex) => {
    return knex.schema
            .dropTable('categorias')
            .dropTable('fornecedores')
            .dropTable('produtos')
}



const knex = require('knex');

exports.up = async(knex) => {
    return await knex.schema.createTable('dbo_veiculos', (table) => {
        table.uuid('codigo').primary();
        table.string('marca').notNullable();
        table.string('ano').notNullable();
        table.string('cor').notNullable();
        table.string('placa').notNullable();
        table.string('chassi').notNullable();
    })
}

exports.down = async(knex) => {
    return await knex.schema.dropTable('dbo_veiculos');
}