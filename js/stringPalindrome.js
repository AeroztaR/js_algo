const stringPalindrome = () => {
    // first method
    function palindrome(str) {
        const reversed = str.split('').reverse().join('');

        return str === reversed;
    }

    console.log(palindrome('nippo'));
    console.log(palindrome('lol'));

    // second method
    function palindromeSecond(string) {
        return string.split('').every((char, index) => {
            return char === string[string.length - index - 1];
        });
    }

    console.log(palindromeSecond('liquid'));
    console.log(palindromeSecond('kek'));

};

export default stringPalindrome;