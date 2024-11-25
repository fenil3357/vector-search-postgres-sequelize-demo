import { DataTypes } from "sequelize";
import { DB } from "../db.js";

export const Document = DB.define('document', {
  content: {
    type: DataTypes.STRING
  },
  embeddings: {
    type: DataTypes.JSONB
  }
}, {
  timestamps: false
})