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

let max = min = profit[0].income;
profit.forEach(element => {
    if(max >= element.income ){
        omzetTerbesar.idTransaction = element.idTransaction
        omzetTerbesar.profit = element.income
    }
    if (min <= element.income) {
        omzetTerbesar.idTransaction = element.idTransaction
        omzetTerbesar.profit = element.income
    }
});

const totalIncome = profit.reduce((result, item) => {
    return result + item.income
}, 0);

console.log(max);


console.log(`Total transaksi : USD ${totalIncome}`);
console.log(`Omzet terbesar : ${omzetTerbesar}`);
console.log(`Omzet terkecil : ${omzetTerkecil}`);