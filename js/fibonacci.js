const fibonacci = () => {
    function getFibonacci(n) {
        if (n < 2) {
            return n;
        }
        return getFibonacci(n-1) + getFibonacci(n-2);
    }

    console.log(getFibonacci(8));
};

export default fibonacci;

