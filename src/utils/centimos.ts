export function amountToCents(amount: number) {
  if (amount >= 0) {
    const centimos = amount * 100;
    return centimos;
  } else {
    console.log('The amount cannot be negative.');
    return 0; // can show an error message
  }
}
