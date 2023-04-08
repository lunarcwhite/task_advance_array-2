const { data } = require('./data');

/* 6. Buat array berdasarkan script pada link diatas yang menyimpan keuntungan yang didapat dari setiap lokasi toko. Contoh output: [{ location: 'Denver', revenue: 'USD 1000' }]*/
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
const income = grouped.map(store => {
    const profit = store.transaction.reduce((result, transaction) => {
        return result + transaction.items.reduce((income, item) => {
            return income + (parseInt(item.quantity.$numberInt) * parseFloat(item.price.$numberDecimal))
        }, 0)
    }, 0)
    return {
        location: store.location,
        revenue: `USD ${profit.toFixed(2)}`
    }
})
console.log(income);