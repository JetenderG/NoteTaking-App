module.exports = function (sequelize, DataTypes) {

const Notes = sequelize.define("notes", {

    id : {
        type: DataTypes.INTEGER,
        autoIncrement : true,
        primaryKey : true,
    },

    users : {
        type : DataTypes.VARCHAR

    }
})


return Notes;

}