const { data } = require('./data');
/* 5. Buat array berdasarkan script pada link diatas yang menyimpan rating setiap toko dari satisfaction customer mereka. Contoh output: [{ location: 'Denver', rating: 5.0 }] */
const ratings = data.reduce((result, transaction) => {
    const location = result.findIndex(
        (item) => item.location === transaction.storeLocation
    );
    if (location != -1) {
        result[location].rating.push(parseInt(transaction.customer.satisfaction.$numberInt));
    } else {
        result.push({
            location: transaction.storeLocation,
            rating: [parseInt(transaction.customer.satisfaction.$numberInt)],
        });
    }
    return result;
}, []).map((item) => ({
    location: item.location,
    rating: (item.rating.reduce((sum, rating) => sum + rating, 0) / item.rating.length).toFixed(1) + '/5',
}));

console.log(ratings);