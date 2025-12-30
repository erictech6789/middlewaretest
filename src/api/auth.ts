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

<<<<<<< Updated upstream
  const result = await loginUser(payload.email, payload.password);
=======
  const user = await loginUser(
    payload.email.trim(),
    payload.password
  );
  \
  const user = await lloginUser(
    payload.email.trim(),
    payload.password
  );
>>>>>>> Stashed changes

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
