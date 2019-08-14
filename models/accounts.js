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
            type: DataTypes.STRING(255),
            null:false
        },
        email:{
            type:DataTypes.STRING(50),
            unique:true
        },
     

    })
    
return Accounts;

};