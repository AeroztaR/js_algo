const allNumSum = () => {
	// first method
	function getAllNumSum(...numbers) {
		let total = 0;
		numbers.forEach((number) => {
			total += number;
		});
		return total;
	}

	// second method
	function getAllNum(...numbers) {
		return numbers.reduce((acc, cur) => acc + cur);
	}

	console.log(getAllNumSum(7, 15, 20));
	console.log(getAllNum(7, 11, 16));
};

export default allNumSum;
