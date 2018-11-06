// var myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello World!';

// var iceCream = 'chocolate';
// if (iceCream === 'chocolate') {
//   alert('Yay, I love chocolate ice cream!');    
// } else {
//   alert('Awwww, but chocolate is my favorite...');    
// }

function multiply(num1, num2) {
  var result = num1 * num2;
  return result;
}

var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/1.jpg') {
      myImage.setAttribute('src', 'images/2.jpg');
    } else {
      myImage.setAttribute('src', 'images/1.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'You are cool, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'You are cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}