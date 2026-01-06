import {
  CreationOptional,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from "sequelize";
import sequelize from "./sequelize";

class Hotel extends Model<
  InferAttributes<Hotel>,
  InferCreationAttributes<Hotel>
> {
  declare id: CreationOptional<number>;
  declare name: string;
  declare address: string;
  declare location: string;
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;
  declare deletedAt: CreationOptional<Date | null>;
  declare rating?: number;
  declare ratingCount?: number;
}

Hotel.init(
  {
    id: {
      type: "integer",
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: "string",
      allowNull: false,
    },
    address: {
      type: "string",
      allowNull: false,
    },
    location: {
      type: "string",
      allowNull: false,
    },
    createdAt: {
      type: "date",
      defaultValue: new Date(),
    },
    updatedAt: {
      type: "date",
      defaultValue: new Date(),
    },
    deletedAt: {
      type: "date",
      defaultValue: null,
    },
    rating: {
      type: "decimal",
      defaultValue: null,
    },
    ratingCount: {
      type: "number",
      defaultValue: null,
    },
  },
  {
    tableName: "hotels",
    sequelize: sequelize,
    underscored: true,
    timestamps: true,
  }
);

export default Hotel;
