const intReverse = () => {
    function reverseInt(n) {

        const reversed = n
            .toString()
            .split('')
            .reverse()
            .join('');

        const result = parseInt(reversed) * Math.sign(n);

        if (result > 0x7FFFFFFF || result < -0x7FFFFFFF) {
            return 0;
        }

        return result;
    }

    console.log(reverseInt(321));
    console.log(reverseInt(-720));

};

export default intReverse;