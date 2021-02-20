const arrayShuffle = () => {
	function arrShuffle(array) {
		for (let i = array.length - 1; i > 0; i--) {
			let temp = array[i];
			let random = Math.floor(Math.random() * (i + 1));

			array[i] = array[random];
			array[random] = temp;
		}
		return array;
	}

	console.log(arrShuffle([2, 5, 7, 23, 33]));
	console.log(arrShuffle([4, 8, 17, 36, 156]));
};

export default arrayShuffle;
