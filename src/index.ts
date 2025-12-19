import { loginHandler } from "./api/auth";
import { billingHandler } from "./api/billing";
import { usersHandler } from "./api/users";

export function handleRequest(route: string, payload: any) {
  switch (route) {
    case "/login":
      return loginHandler(payload);
    case "/billing":
      return billingHandler(payload);
    case "/users":
      return usersHandler(payload);
    default:
      throw new Error("Route not found");
  }
}
