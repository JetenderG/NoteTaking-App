
require('dotenv').config();
module.exports =
  {
    "development": {
      "username": "root",
      "password": "root",
      "database": "noteTaker_db",
      "host": "localhost",
      "dialect": "mysql",
      "port": "8889",
      "logging": false,
      "storage": "./session.mysql"
    },
    "test": {
      "username": "root",
      "password": "root",
      "database": "noteTaker_db",
      "host": "localhost",
      "dialect": "mysql",
      "port": "8889",
      "logging": false,
      "storage": "./session.mysql"

    },
    "production": {
      "username": "root",
      "password": "root",
      "database": "noteTaker_db",
      "host": "localhost",
      "dialect": "mysql",
      "port": "8889",
      "logging": false,
      "storage": "./session.mysql"
    }
  };
