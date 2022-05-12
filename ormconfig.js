module.exports = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'postgres',
  autoLoadEntities: true,
  //migration時にどのentityの情報を読み込むかの設定
  entities: ['dist/entities/*.entity.js'],
  //どのmigrationファイルを読み込んでマイグレーションするかの設定
  migrations: ['dist/migrations/*.js'],
  //cliによってentityやmigration file作成の際の出力先
  cli: {
    entitiesDir: 'src/entities',
    migrationsDir: 'src/migrations',
  }
};
