import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'calenders'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.date('date').notNullable().unique().index()
      table.jsonb('prayer_time').notNullable().comment('format: {fazr: "06:30 , zahr: 1:30"}')
      table.string('iftar_time').nullable()
      table.string('sehri_time').nullable()

      /**
       * Uses .timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
