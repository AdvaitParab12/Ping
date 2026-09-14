import pool from "../config/db.js";
import bcrypt from "bcrypt";
export const getAllUsers = async () => {
  const result = await pool.query("SELECT * FROM users");
  return result.rows;
};

export const findUser = async (id) => {
  const query = `SELECT id,name,email FROM users WHERE id = $1`;
  const result = await pool.query(query, [id]);
  return result.rows[0];
};

export const addUser = async (name, email, password) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  const query = `INSERT INTO users(name,email,password)
  VALUES($1,$2,$3)
  RETURNING id,name,email,created_at`;
  const values = [name, email, hashedPassword];
  const result = await pool.query(query, values);
  return result.rows[0];
};

export const updateUser = async (id, data) => {
  const { name, email } = data;
  const query = `UPDATE users SET name = $1, email=$2 WHERE id = $3 RETURNING id,name,email,created_at`;
  const result = await pool.query(query, [name, email, id]);
  return result.rows[0];
};

export const deleteUser = async (id) => {
  const query = `DELETE FROM users WHERE id = $1 RETURNING *`;
  const result = await pool.query(query, [id]);
  return result.rows[0];
};
