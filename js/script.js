var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];
var allNames = femaleNames.concat(maleNames);

console.log(allNames);  //  ['Asia', 'Kasia', 'Ola', 'Jola','Piotrek', 'Marek', 'Arek', 'Jarek' ];

var newName = 'Marian'
if (allNames.indexOf(newName) === -1) {
allNames.push('Marian');
	console.log('Wyswietl Tablice');}