import bcrypt from "bcrypt";
import pool from "../config/db.js";

export const updatePassword = async (id, password) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  const query = `UPDATE users SET password = $1 WHERE id = $2 RETURNING id,name,email,created_at`;
  const result = await pool.query(query, [hashedPassword, id]);
  return result.rows[0];
};
