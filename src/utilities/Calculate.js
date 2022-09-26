//using reduce method to calculate total prize from an array

const getTotalPrice = (products) => {
    const reducer = (previous, current) => previous + current.price;
    const total = products.reduce(reducer, 0);
    return total;

}

export { getTotalPrice as getTotal }