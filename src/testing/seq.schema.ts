import { DataTypes } from "sequelize";

const Assignment = {
  name: "Assignment",
  attributes: {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
    },
    start_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    end_date: DataTypes.DATE,
  },
  belongsTo: [
    {
      target: "Role",
      options: { as: "role", foreignKey: "role_id", keyType: DataTypes.UUID },
    },
    {
      target: "Employee",
      options: {
        as: "employee",
        foreignKey: "employee_id",
        keyType: DataTypes.UUID,
      },
    },
  ],
  belongsToMany: [
    {
      target: "Project",
      options: { as: "projects", through: "Role" },
    },
  ],
};

export default Assignment;