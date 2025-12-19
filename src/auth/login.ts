import { queryDb } from "../utils/db";
import { logInfo } from "../utils/logger";

export async function loginUser(email: string, password: string) {
  logInfo("Attempting login for user: " + email);

  const users = await queryDb(
    `SELECT * FROM users WHERE email = '${email}'`
  );

  if (!users || users.length === 0) {
    return null;
  }

  const user = users[0];

  if (user.password !== password) {
    return null;
  }

  return {
    id: user.id,
    email: user.email,
    role: user.role,
  };
}
