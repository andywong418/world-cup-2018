module.exports = (sequelize, DataTypes) => {
    const Team = sequelize.define('teams', {
        id: {
            type: DataTypes.INTEGER,
            field: 'id',
            primaryKey: true,
            unique: true,
            autoIncrement: true,
          },
          team: {
              type: DataTypes.TEXT,
              field: 'team',
              unique: true
          },
          knockedOut: {
              type: DataTypes.BOOLEAN,
              field: 'knockedOut',
              defaultValue: false
          }
    }, {
        timestamps: true,
        underscored: true,
        paranoid: true
    })
    return Team
}