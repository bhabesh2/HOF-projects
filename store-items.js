const storeItems = {
    "t-shirt": 1.99,
    "jeans": 0.99,
    "sweat-shirt": 2.49,
    "hoodie": 3.99,
    "half-pants": 1.29
  };
  
  const exchangeRate = 80;
  
  const storeItemsInRupees = {};
  
  for (const [item, price] of Object.entries(storeItems)) {
    const convertedPrice = Math.floor(price * exchangeRate * 100) / 100;
    storeItemsInRupees[item] = convertedPrice;
  }
  
  console.log(storeItemsInRupees);
  