const vowels = () => {
	// vowels count
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

	// vowels remove
	function disemvowel(str) {
		const vowels = ['a', 'e', 'i', 'o', 'u'];

		return str
			.split('')
			.filter((el) => {
				return vowels.indexOf(el.toLowerCase()) == -1;
			})
			.join('');
	}

	console.log(getVowels('barcelona'));
	console.log(disemvowel('el pozo murcia'));
};

export default vowels;
