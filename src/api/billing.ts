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
