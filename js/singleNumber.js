const singleNumber = () => {
	// first method
	function getSingleNumber(numArray) {
		const unique = new Set();
		let uniqueSum = 0;
		let numSum = 0;

		for (let i = 0; i < numArray.length; i++) {
			const element = numArray[i];

			if (!unique.has(element)) {
				unique.add(element);
				uniqueSum += element;
			}

			numSum += element;
		}

		return uniqueSum * 2 - numSum;
	}

	// second method
	function getSingleNum(nums) {
		const unique = Array.from(new Set(nums));

		let reduceSum = (s, i) => s + i;

		let uniqueSum = unique.reduce(reduceSum);
		let numSum = nums.reduce(reduceSum);

		return uniqueSum * 2 - numSum;
	}

	console.log(getSingleNumber([1, 3, 1, 3, 7]));
	console.log(getSingleNum([2, 4, 2, 4, 5]));
};

export default singleNumber;
