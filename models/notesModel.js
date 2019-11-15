
module.exports = (sequelize, DataTypes) => {

    var Notes = sequelize.define("Notes", {

        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        title: {
            type: DataTypes.STRING(50)

        },
        note: {
            type: DataTypes.BLOB,

        },
        date: {
            type: DataTypes.DATE,
            default: Date.now()
        },


    });

    Notes.associate = function (models) {

        Notes.belongsTo(models.Accounts, {
            foreignKey: 'account-ID',
            constraints: false,
            as: "notesUses"
        });

    };


    return Notes
};

