const { data } = require('./data');

/*7. Tentukan transaksi yang memiliki omzet terbesar, omzet terkecil, dan berapa total dari keseluruhan transaksi? */
let omzetTerbesar = {};
let omzetTerkecil = {};

const profit = data.map((data) => {
    const income = data.items.reduce((result, item) => {
        return result + parseInt(item.quantity.$numberInt) * parseFloat(item.price.$numberDecimal)
    }, 0)
    return {
        idTransaction: data.id,
        income: parseFloat(income.toFixed(2))
    }
});

let max = profit[0].income;
let min = profit[0].income;
for (const element of profit) {
    if(max < element.income ){
        omzetTerbesar.data = 'Omzet Terbesar'
        omzetTerbesar.idTransaction = element.idTransaction
        omzetTerbesar.profit = element.income
    }
    if (min > element.income) {
        min = element.income;
        omzetTerkecil.data = 'Omzet Terkecil'
        omzetTerkecil.idTransaction = element.idTransaction
        omzetTerkecil.profit = element.income
    }   
}

const totalIncome = profit.reduce((result, item) => {
    return result + item.income
}, 0);

console.log(`Total transaksi : USD ${totalIncome}`);
console.log(omzetTerbesar);
console.log(omzetTerkecil);