
require('dotenv').config();
module.exports=
{
  "development": {
    "use_env_variable": "JAWSDB_URL",
    "dialect": "mysql"


  },
  "test": {
    "username": "root",
    "password": "root",
    "database": "noteTaker_db",
    "host": "localhost",
    "dialect": "mysql",
    "port": "3306",
    "logging": false,
    "storage": "./sessions.mysql"

  },
  "production": {
    "use_env_variable": "JAWSDB_URL",
    "dialect": "mysql"
  }
};
