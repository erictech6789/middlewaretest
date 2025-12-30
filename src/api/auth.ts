/**
 * Handle a login request payload and return an HTTP-like response object.
 *
 * @param payload - Object containing `email` and `password` for authentication.
 * @returns An object describing the result:
 *  - `{ status: 400, message: "Invalid payload" }` if the payload fails validation.
 *  - `{ status: 401, message: "Auth failed" }` if authentication fails.
 *  - `{ status: 200, user }` with the authenticated user on success.
 */
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