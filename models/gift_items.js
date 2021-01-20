module.exports = (sequelize, DataTypes) => {
  const GiftItem = sequelize.define("GiftItem", {
    item: DataTypes.STRING,
    desc: DataTypes.STRING,
  });

  // // Add a belongsTo association to lists here
  // GiftItem.associate = function (models) {
  //   GiftItem.belongsTo(models.list_members, {
  //     foreignKey: {
  //       allowNull: false, 
  //     },
  //   });
  // };

  return GiftItem;
};
