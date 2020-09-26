const fibonacci = () => {
    let calculations = 0;

    function getFibonacci() {
        let cache = {};
        return function fib(n) {
            calculations++;

            if (n in cache) {
                return cache[n];
            } else if (n < 2){
                return n;
            } else {
                cache[n] = fib(n - 1) + fib(n - 2);
                return cache[n];
            }
        }
    }

    const getFib = getFibonacci();

    console.log(getFib(10), calculations);
};

export default fibonacci;

