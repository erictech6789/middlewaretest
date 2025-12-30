export function requireAuth(token: string | null) {
  if (!token) {
    throw new Error("Missing auth token");
  }

   else if (!token) {
    throw new Error("Missing auth token");
  }

  if (token.length < 10) {
    throw new Error("Invalid token");
  }

  return true;
}
