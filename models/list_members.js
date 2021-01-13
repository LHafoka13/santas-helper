module.exports = (sequelize, DataTypes) => {
    const ListMember = sequelize.define('ListMember', {
      name: DataTypes.STRING,
    });
    return ListMember;
  };