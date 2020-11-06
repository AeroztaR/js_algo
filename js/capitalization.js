const capitalization = () => {
	// first method
	function capitalizeLetters(str) {
		const words = [];

		for (let word of str.split(' ')) {
			words.push(word[0].toUpperCase() + word.slice(1));
		}

		return words.join(' ');
	}

	// second method
	function capitalize(string) {
		let result = string[0].toUpperCase();

		for (let i = 1; i < string.length; i++) {
			if (string[i - 1] === ' ') {
				result += string[i].toUpperCase();
			} else {
				result += string[i];
			}
		}

		return result;
	}

	// third method
	function getCapitalize(str) {
		return str
			.split(' ')
			.map((word) => word[0].toUpperCase() + word.substr(1))
			.join(' ');
	}

	console.log(capitalizeLetters('What does fox say?'));
	console.log(capitalize('Holly molly!'));
	console.log(getCapitalize('Stop the fraud!'));
};

export default capitalization;
