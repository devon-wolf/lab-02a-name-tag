const myButton = document.getElementById('my-button');
const myInput = document.getElementById('my-input');
const myName = document.getElementById('my-name');

myButton.addEventListener('click', () => {
	myName.textContent = myInput.value;
	myInput.value = '';
});
