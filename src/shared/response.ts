export const ok = (data: any) => ({
  statusCode: 200,
  body: JSON.stringify(data)
});

export const badRequest = (message: string) => ({
  statusCode: 400,
  body: JSON.stringify({ error: message })
});
