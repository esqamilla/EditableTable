export const toMoney = (price: number) => {
  // 7000000 => 7 000 000.00
  return price.toFixed(2).toString().replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + ' ');
}

export const toNumberWithSpaces = (price: number) => {
  // 1750 => 1 750
  return price.toString().replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + ' ');
}