export async function loginHandler(payload: any) {
  if (!validateLoginPayload(payload)) {
    return { status: 400, message: "Invalid payload" };
  }

  const user = await loginUser(
    payload.email.trim(),
    payload.password
  );

  if (!user) {
    return { status: 401, message: "Auth failed" };
  }

  return { status: 200, user };
}
