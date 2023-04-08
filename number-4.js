const { data } = require('./data');
/* 4.Buat array berdasarkan script pada link diatas yang menyimpan jumlah barang yang dibeli pada setiap transaksi */
const profit = data.map((data) => {
    const totalBarang = data.items.reduce((result, item) => {
        return result + parseInt(item.quantity.$numberInt)
    }, 0)
    return {
        idTransaction: data.id,
        items: data.items.map((item) => {
            return {
              name: item.name,
              quantity: item.quantity.$numberInt,
            };
          }),
        totalBarangDibeli: totalBarang
    }
})
console.log(profit);