const { data } = require('./data');
/* 3.Buat array berdasarkan script pada link diatas yang menyimpan keuntungan yang didapat dari setiap transaksi */
const profit = data.map((data) => {
    const income = data.items.reduce((result, item) => {
        return result + parseInt(item.quantity.$numberInt) * parseFloat(item.price.$numberDecimal)
    }, 0)
    return {
        idTransaction: data.id,
        income: income.toFixed(2)
    }
})
console.log(profit);