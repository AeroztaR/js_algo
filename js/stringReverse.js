// reverse string

const stringReverse = () => {
    // first method
    function reverse(str) {
        return str
            .split('')
            .reverse()
            .join('');
    }

    console.log(reverse('futsal'));

    // second method
    function reverseSecond(string) {
        let reversed = '';

        for (let char of string) {
            reversed = char + reversed;
        }

        return reversed;
    }

    console.log(reverseSecond('player'));

    // third method
    function reverseThird(string) {
        return string.split('').reduce((reversed, char) => {
            return char + reversed;
        }, '');
    }

    console.log(reverseThird('team'));

};

export default stringReverse;



