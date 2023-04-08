const { data } = require('./data');
/*2. Kelompokkan data data transaksi berdasarkan script pada link diatas dalam bentuk array of object. Contoh output  : [{ location: 'Denver', transaction: {} }]
 */

let grouped = [];
for (const value of data) {
    let p = grouped.findIndex(transaction => transaction.location === value.storeLocation)
    if (!grouped[p]) {
        grouped.push({
            location: value.storeLocation,
            transaction: [value]
        })
    }else {
        grouped[p].transaction.push(value)
    }

}

console.log(grouped);