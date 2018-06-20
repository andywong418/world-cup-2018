module.exports = (sequelize, DataTypes) => {
  const Round = sequelize.define('rounds', {
    id: {
      type: DataTypes.INTEGER,
      field: 'id',
      primaryKey: true,
      unique: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.TEXT,
      field: 'title'
    },
    knockOutStage: {
      type: DataTypes.BOOLEAN,
      field: 'knockOutStage',
      defaultValue: false
    },
    date: {
      type: DataTypes.DATE,
      field: 'date'
    }
  }, {
    timestamps: true,
    underscored: true,
    paranoid: true
  })
  return Round
}
