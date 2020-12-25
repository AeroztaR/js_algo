const debounce = () => {
	const myDebounce = (fn, ms) => {
		let timeout;
		return function () {
			const fnCall = () => {
				fn.apply(this, arguments);
			};
			clearTimeout(timeout);
			timeout = setTimeout(fnCall, ms);
		};
	};

	function onChange(e) {
		console.log(e.target.value);
	}

	onChange = myDebounce(onChange, 200);

	// example
	// document.getElementById('search').addEventListener('keyup', onChange);
};

export default debounce;
