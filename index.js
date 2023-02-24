// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

const element = document.getElementById('hoge');
console.log(element.innerText);

element.innerText = "fugaに書き換えられたよ！"
console.log(element.innerText);