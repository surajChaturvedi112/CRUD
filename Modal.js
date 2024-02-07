
module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define("users", {
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    middle_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    mobile_number: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    verified: {
      type: DataTypes.BOOLEAN,
      allowNull:false,
      defaultValue: false,
    }
  });
  // users.associate = (models) => {
  //   users.hasMany(models.issued_books, {
  //     foreignKey: "user_id",
  //     //onDelete: "CASCADE",
  //   });
  //   users.hasOne(models.OTP_verification, {
  //     foreignKey: "user_id",
  //   });
  //   }
  return users;
};
