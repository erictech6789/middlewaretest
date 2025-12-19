import { queryDb } from "../utils/db";
import { requireAuth } from "../auth/middleware";

export async function billingHandler(payload: any) {
  requireAuth(payload.token);

  const userId = payload.userId;

  const invoices = await queryDb(
    `SELECT * FROM invoices WHERE user_id = ${userId}`
  );

  let total = 0;

  for (let i = 0; i < invoices.length; i++) {
    total += invoices[i].amount;
  }

  return {
    invoices,
    total,
  };
}
