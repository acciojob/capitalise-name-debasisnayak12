//your JS code here. If required.
const inputField = document.querySelector("#fname");

inputField.addEventListener(('blur'), () => {
	const inputValue = inputField.value;
	inputField.value = inputValue.toUpperCase();
});

