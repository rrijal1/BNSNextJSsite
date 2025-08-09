export function validateEmail(email: string): boolean {
  // Simple, robust email regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
