'use strict';

//declare and define all important document variable
let text = document.getElementById('caption');
let range = document.getElementById('range');
let length = document.querySelector('.value');
let lowercase = document.getElementsByClassName('box')[0];
let uppercase = document.getElementsByClassName('box')[1];
let number = document.getElementsByClassName('box')[2];
let symble = document.getElementsByClassName('box')[3];
let copy = document.getElementById('copy-icon');
let copyMsg = document.getElementById('copy-msg');
let button = document.querySelector('button');

// password length update
setInterval(function(){
  length.innerText = range.value;
}, 50);

//copy system add
copy.addEventListener('click', function() {
  if (text.value.length > 0 && navigator.clipboard.writeText) {
  navigator.clipboard.writeText(text.value);
  copyMsg.style = 'width: auto; height: auto;';
  
  setTimeout(function() {
    copyMsg.style = 'width: 0; height: 0';
  }, 1000);
  } else {
    alert('First, generate a password, then copy.');
  }
})

// declare and define password text
let lower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let upper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let num = [0,1,2,3,4,5,6,7,8,9];
let symb = ['@', '#','£','_','&','-','+','(',')','/','*','"',"'", ':',';','!', '?','$','_','%','=', '{','}', '[', ']', '~', '©', '®', '^', '<', '>'];
let data = [lower, upper, num, symb];
let check = [uppercase, lowercase, number, symble];

//generate password
button.addEventListener('click', function(){
  text.value = null;
  let pass = [];
  for (let x = 0; x < data.length; x++) {
    if (check[x].checked == true) {
      pass.push(data[x]);
    }
  }
  if (pass[0] != undefined) {
    for (let x = 0; x < length.innerText; x++) {
    let random1 = Math.floor(Math.random() * pass.length);
    let random2 = Math.random();
    random2 = Math.floor(random2 * pass[random1].length);
    text.value += pass[random1][random2];
    }
  } else {
    alert('Please select a box.');
  }
  
  //add button click effect
  button.style.transform = 'scale(.9)';
  button.style.borderRadius = '0';
  setTimeout(function() {
    button.style.transform = 'scale(1)';
    button.style.borderRadius = '6px';
  }, 100);
})