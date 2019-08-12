module.exports = function (sequelize, DataTypes){


    const Accounts =sequelize.define("accounts", {

        id : {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        username : {
            type : DataTypes.STRING(50),
            unique : true,
    
        },
        password:{
            type: DataTypes.BLOB,
        },
        email:{
            type:DataTypes.STRING(50),
            unique:true
        },
        activation_code:{
            type:DataTypes.STRING(50),
            default: ''
        },

    })
    
return Accounts;

};