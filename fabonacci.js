function fibonacci(n) {
    if (n ===0) return 0;
    if (n === 1) return 1;
    // return fibonacci(n-1) + fibonacci(n-2);
    let a = 0, b=1;
    for (let i=2; i<=n, i++){
        const temp = a+b;
        a=b;
        b= temp;
        }
        return b;
}
module.exports = fibonacci;