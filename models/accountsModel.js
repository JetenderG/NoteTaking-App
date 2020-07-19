module.exports = function (sequelize, DataTypes){


   var Accounts =sequelize.define("Accounts", {

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

    Accounts.associate = function (models) {

        Accounts.hasMany(models.Notes,{
            foreignKey:'NotesAcc',
            constraints: false,

        });
        Accounts.hasOne(models.Sessions,{
            foreignKey:'userSession',
            constraints: false,

        });
    
    };
    
return Accounts;

};