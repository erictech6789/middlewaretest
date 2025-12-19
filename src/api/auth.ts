import { loginUser } from "../auth/login";
import { validateLoginPayload } from "../utils/validation";

export async function loginHandler(payload: any) {
  const isValid = validateLoginPayload(payload);

  if (!isValid) {
    return {
      status: 400,
      message: "Invalid payload",
    };
  }

  const result = await loginUser(payload.email, payload.password);

  if (!result) {
    return {
      status: 401,
      message: "Authentication failed",
    };
  }

  return {
    status: 200,
    user: result,
  };
}
