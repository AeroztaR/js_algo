const classNamesTask = () => {
	function sortClassNames(array) {
		const classNamesCount = {};

		for (let i = 0; i < array.length; i++) {
			let current = array[i];
			if (classNamesCount[current]) {
				classNamesCount[current] += 1;
			} else {
				classNamesCount[current] = 1;
			}
		}

		const result = Object.keys(classNamesCount).sort(
			(a, b) => classNamesCount[b] - classNamesCount[a]
		);

		console.log(result);
	}

	sortClassNames([
		'menu',
		'menu__link',
		'menu__button',
		'menu__button',
		'menu__button',
		'menu__icon',
		'menu__icon',
	]);
};

export default classNamesTask;
