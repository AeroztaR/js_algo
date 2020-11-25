const memoization = () => {
	function memoize(fn) {
		const cache = {};

		return function (...args) {
			if (cache[args]) {
				return cache[args];
			}

			const result = fn.apply(this, args);
			cache[args] = result;

			return result;
		};
	}

	function justSummary(a, b, c) {
		console.log('computing...');
		return a + b + c;
	}

	const sum = memoize(justSummary);

	console.log(sum(2, 3, 5));
	console.log(sum(1, 1, 8));
	console.log(sum(5, 0, 5));
	console.log(sum(1, 1, 8));
	console.log(sum(2, 3, 5));
};

export default memoization;
