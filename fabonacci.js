function fibonacci(n) {
    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) { 
        const temp = a + b;
        a = b;
        b = temp;
    }
    return b;
}

module.exports = fibonacci;