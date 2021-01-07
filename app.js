const userInput = document.getElementById('name-input');
const displayBox = document.getElementById('name-box');

const nameButton = document.getElementById('submit-name');

// for later deployment
/*
const pronounButton = document.getElementById('submit-pronouns');
const resetButton = document.getElementById('reset');
const secretButton = document.getElementById('secret-button');
*/

console.log('I am linked');
console.log(userInput, displayBox, nameButton);

nameButton.addEventListener('click', () => {
	displayBox.textContent = userInput.value;
	userInput.style.display = 'none';
})
