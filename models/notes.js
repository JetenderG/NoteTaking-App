module.exports = function (sequelize, DataTypes) {

const Notes = sequelize.define("notes", {

    id : {
        type: DataTypes.INTEGER,
        autoIncrement : true,
        primaryKey : true,
    },
    note : {
        type : DataTypes.STRING(50),
    }

})
return Notes;
}