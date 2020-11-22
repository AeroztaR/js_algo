const vowels = () => {
	function getVowels(str) {
		let count = 0;
		const checkList = ['a', 'e', 'i', 'o', 'u'];

		for (let char of str.toLowerCase()) {
			if (checkList.includes(char)) {
				count++;
			}
		}

		return count;
	}

	console.log(getVowels('barcelona'));
};

export default vowels;
