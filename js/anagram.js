const anagram = () => {
	// first method
	function getAnagrams(stringA, stringB) {
		const aCharMap = createCharMap(stringA);
		const bCharMap = createCharMap(stringB);

		if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
			return false;
		}

		for (let char in aCharMap) {
			if (aCharMap[char] !== bCharMap[char]) {
				return false;
			}
		}

		return true;
	}

	function createCharMap(str) {
		const charMap = {};

		for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
			charMap[char] = charMap[char] + 1 || 1;
		}

		return charMap;
	}

	// second method
	function getAnotherAnagrams(strA, strB) {
		return cleanString(strA) === cleanString(strB);
	}

	function cleanString(string) {
		return string
			.replace(/[^\w]/g, '')
			.toLowerCase()
			.split('')
			.sort()
			.join('');
	}

	// third method
	const getSomeAnagrams = (a, b) =>
		[...a.toLowerCase()].sort().toString() ===
		[...b.toLowerCase()].sort().toString();

	console.log(getAnagrams('barcelona', 'balancero'));
	console.log(getAnagrams('barcelona', 'barnaelc'));
	console.log(getAnotherAnagrams('nice', 'ecine'));
	console.log(getAnotherAnagrams('code', 'deco'));
	console.log(getSomeAnagrams('bebe', 'ebeb'));
	console.log(getSomeAnagrams('vivo', 'ovive'));
};

export default anagram;
