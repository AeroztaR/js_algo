const factorial = () => {
    function findFactorial(number) {
        if (number === 2) {
            return 2;
        }
        return number * findFactorial(number - 1);
    }

    console.log(findFactorial(7));
};

export default factorial;