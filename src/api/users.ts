import { queryDb } from "../utils/db";

export async function usersHandler(payload: any) {
  if (!payload.limit) {
    payload.limit = 100;
  }

  const users = await queryDb(
    `SELECT * FROM users LIMIT ${payload.limit}`
  );

  return {
    count: users.length,
    users,
  };
}
