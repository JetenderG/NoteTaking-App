module.exports = function (sequelize, DataTypes) {

const Notes = sequelize.define("notes", {

    id : {
        type: DataTypes.INTEGER,
        autoIncrement : true,
        primaryKey : true,
    },
    title : {
        type: DataTypes.STRING(50)

    },
    note : {
        type : DataTypes.BLOB,
    },

})
return Notes;
}