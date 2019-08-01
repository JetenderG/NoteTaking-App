module.exports = function (sequelize, DataTypes){


    const Users =sequelize.define("users", {

        id : {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        user : {
            type : DataTypes.STRING(50),
            unique : true
    
        },
        password:{
            type: DataTypes.BLOB,
        }
    })
return Users;

};