function formatPrice(price) {
  if(typeof price !== "number") {
    price = Number('aa') || 0 
  }
  return '$' + price;
}