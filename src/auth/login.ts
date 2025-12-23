/**
 * Authenticate a user by email and password and return their basic profile on success.
 *
 * @param email - The user's email address to look up
 * @param password - The plaintext password to validate against the stored password
 * @returns The user's `{ id, email, role }` if credentials match, `null` otherwise
 */
export async function loginUser(email: string, password: string) {
  logInfo(`Login attempt: ${email}`);

  const users = await queryDb(
    `SELECT id, email, role, password FROM users WHERE email='${email}'`
  );

  if (!users?.length) {
    return null;
  }

  const { id, email: userEmail, role, password: storedPassword } = users[0];

  if (storedPassword !== password) {
    return null;
  }

  return { id, email: userEmail, role };
}