module.exports = (sequelize, DataTypes) => {
    const Game = sequelize.define('games', {
        id: {
            type: DataTypes.INTEGER,
            field: 'id',
            primaryKey: true,
            unique: true,
            autoIncrement: true,
          },
        round: {
            type: DataTypes.TEXT,
            field: 'round'
        },
        team1: {
            type: DataTypes.TEXT,
            field: 'team1'
        },
        team2: {
            type: DataTypes.TEXT,
            field: 'team2'
        },
        team1Score: {
            type: DataTypes.INTEGER,
            field: 'team1Score'
        },
        team2Score: {
            type: DataTypes.INTEGER,
            field: 'team2Score'
        },
        matchTime: {
            type: DataTypes.DATE,
            field: 'matchTime'
        },
        winner: {
            type: DataTypes.TEXT,
            field: 'winner'
        }
    }, {
        timestamps: true,
        underscored: true,
        paranoid: true
    })
    // Game.associate = (models) => {
    //     Game.belongsTo(models.rounds, {
    //         onUpdate: "CASCADE",
    //         onDelete: "CASCADE",
    //         as: "rounds"
    //     })
    //     Game.belongsTo(models.teams, {
    //         onUpdate: "CASCADE",
    //         onDelete: "CASCADE",
    //         as: "team1"
    //     })
    //     Game.belongsTo(models.teams, {
    //         onUpdate: "CASCADE",
    //         onDelete: "CASCADE",
    //         as: "team2"
    //     })
    //     Game.belongsTo(models.teams, {
    //         onUpdate: "CASCADE",
    //         onDelete: "CASCADE",
    //         as: "winner"
    //     })
    // }
    return Game
}