module.exports = {
  
    "development": {
      "username": "root",
      "password": null,
      "database": "sequelizeweek2",
      "host": "127.0.0.1",
      "dialect": "mysql"
    },
    "production": {
      use_env_variable: 'DATABASE_URL',
      dialect: "postgress",
      protocol: "postgress",
      dialectOptions: {
        ssl : {
          require : true,
          rejectUnauthorized : false
        }
      }

    }
  
}
