/**
 * Checks whether a login payload contains an email and a password at least 6 characters long.
 *
 * @param payload - Object expected to contain `email` and `password` properties (both strings)
 * @returns `true` if `payload.email` exists, `payload.password` exists, and `payload.password.length` is greater than or equal to 6; `false` otherwise.
 */
export function validateLoginPayload(payload: any): boolean {
  return !!(
    payload?.email &&
    payload?.password &&
    payload.password.length >= 6
  );
}