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
