const recurringCharacter = () => {
    function recurringChar(input) {
        let map = {};

        for (let i = 0; i < input.length; i++) {
            if (map[input[i]]) {
                return input[i];
            } else {
                map[input[i]] = true;
            }
        }
        return undefined;
    }

    console.log(recurringChar([1, 4, 3, 5, 4, 2, 7]));
};

export default recurringCharacter;