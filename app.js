const myButton = document.getElementById('my-button');
const myInput = document.getElementById('my-input');
const myName = document.getElementById('my-name');

const greenButton = document.getElementById('green-button');
const pinkButton = document.getElementById('pink-button');
const blueButton = document.getElementById('blue-button');
const tagTop = document.getElementById('tag-top');
const tagBottom = document.getElementById('tag-bottom');

myButton.addEventListener('click', () => {
	myName.textContent = myInput.value;
	myInput.value = '';
});

greenButton.addEventListener('click', () => {
	tagTop.style.background = 'lightgreen';
	tagBottom.style.background = 'lightgreen';
});

pinkButton.addEventListener('click', () => {
	tagTop.style.background = 'pink';
	tagBottom.style.background = 'pink';
});

blueButton.addEventListener('click', () => {
	tagTop.style.background = 'lightblue';
	tagBottom.style.background = 'lightblue';
});
