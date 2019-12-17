
require('dotenv').config();
module.exports =
  {
    "development": {
    //  "connection" :JAWSDB_URL,
    //   "port": process.env.PORT,
    //   "logging": false,
    //   "storage": "./session.mysql"
    "username": "root",
    "password": "root",
    "database": "noteTaker_db",
    "host": "localhost",
    "dialect": "mysql",
    "port": "3306",
    "logging": false,
    "storage": "./session.mysql"
    },
    "test": {
      "username": "root",
      "password": "root",
      "database": "noteTaker_db",
      "host": "localhost",
      "dialect": "mysql",
      "port": "3306",
      "logging": false,
      "storage": "./session.mysql"

    },
    "production": {
      "username": "root",
      "password": "root",
      "database": "noteTaker_db",
      "host": "localhost",
      "dialect": "mysql",
      "port": "3306",
      "logging": false,
      "storage": "./session.mysql"
    }
  };
