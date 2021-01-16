module.exports = (sequelize, DataTypes) => {
  const GiftItem = sequelize.define("GiftItem", {
    item: DataTypes.STRING,
    desc: DataTypes.STRING,
  });
  return GiftItem;
};
