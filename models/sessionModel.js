module.exports = function (sequelize, DataTypes) {
    var Sessions = sequelize.define("Sessions", {
            sid: {
                type: DataTypes.STRING,
                primaryKey: true
            },
            expires: {
                type:DataTypes.DATE},
            data: {
                    type:DataTypes.BLOB
                },
            id:{
                type: DataTypes.INTEGER,
            }
        }
    )
    return Sessions;
}