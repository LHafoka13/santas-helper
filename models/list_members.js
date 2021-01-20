module.exports = (sequelize, DataTypes) => {
    const ListMember = sequelize.define('ListMember', {
      name: DataTypes.STRING,
      // giftItems: DataTypes.JSON,
    });

    // ListMember.associate = (models) => {
    //   ListMember.hasMany(models.GiftItem, {
    //     onDelete: 'cascade',
    //   });
    // };

    return ListMember;
  };