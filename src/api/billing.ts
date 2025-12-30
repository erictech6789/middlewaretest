/**
 * Calculate the sum of a user's invoice amounts and return the invoices.
 *
 * @param payload - An object containing `token` (authentication token) and `userId` (identifier of the user whose invoices to retrieve)
 * @returns An object with `total` (sum of all invoice amounts) and `invoices` (array of invoice rows that include `amount`)
 */
export async function billingHandler(payload: any) {
  requireAuth(payload.token);

  const invoices = await queryDb(
    `SELECT amount FROM invoices WHERE user_id=${payload.userId}`
  );

  const total = invoices.reduce(
    (sum, invoice) => sum + invoice.amount,
    0
  );

  return { total, invoices };
}