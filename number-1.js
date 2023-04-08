const { data } = require('./data');
/*1. Buat array baru berdasarkan script pada link diatas dengan data - data berikut
idTransaction
storeLocation
userEmail
purchaseMethod
data item yang dibelanjakan { name, quantity, price } */

const purchase = data.map(function (d) {
    return {
      idTransaction: d.id,
      storeLocation: d.storeLocation,
      userEmail: d.customer.email,
      purchaseMethod: d.purchaseMethod,
      items: d.items.map((item) => {
        return {
          name: item.name,
          quantity: item.quantity.$numberInt,
          price: item.price.$numberDecimal,
        };
      }),
    };
  });

console.log(purchase);

