module.exports = (sequelize, DataTypes) => {
  const GiftItem = sequelize.define("GiftItem", {
    item: DataTypes.STRING,
    desc: DataTypes.STRING,
  });

  // GiftItem.associate = (models) => {
  //   GiftItem.belongsTo(models.ListMember, {
  //     foreignKey: {
  //       allowNull: false, 
  //     },
  //   });
  // };

  return GiftItem;
};
