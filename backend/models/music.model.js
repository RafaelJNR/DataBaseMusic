module.exports = (sequelize, Sequelize) => {
    const Group = sequelize.define("group", {
        name: {
            type: Sequelize.STRING
        },
        nationality: {
            type: Sequelize.STRING
        },
        filename: {
            type: Sequelize.STRING
          }
    });

    return Group;

}