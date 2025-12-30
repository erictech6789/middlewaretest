export function validateLoginPayload(payload: any): boolean {
  return !!(
    payload?.email &&
    payload?.password &&
    payload.password.length >= 6
  );
}
