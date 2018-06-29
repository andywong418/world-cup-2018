module.exports = (sequelize, DataTypes) => {
  const Bet = sequelize.define('bets', {
    id: {
      type: DataTypes.INTEGER,
      field: 'id',
      primaryKey: true,
      unique: true,
      autoIncrement: true
    },
    bettingTeam: {
      type: DataTypes.TEXT,
      field: 'bettingTeam'
    },
    matchId: {
      type: DataTypes.INTEGER,
      field: 'matchId'
    },
    email: {
      type: DataTypes.TEXT,
      field: 'email'
    },
    name: {
      type: DataTypes.TEXT,
      field: 'name'
    },
    destinationTag: {
      type: DataTypes.INTEGER,
      field: 'destinationTag'
    },
    txHash: {
      type: DataTypes.TEXT,
      field: 'txHash'
    },
    amount: {
      type: DataTypes.INTEGER,
      field: 'amount'
    },
    opposingBet: {
      type: DataTypes.INTEGER,
      field: 'opposingBet'
    }
  }, {
    timestamps: true,
    underscored: true,
    paranoid: true
  })
  return Bet
}
