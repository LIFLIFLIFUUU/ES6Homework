import {Initialize, Increment, Go} from './functions.js'
document.querySelector('#input').addEventListener('click', Initialize);
document.querySelector('#add').addEventListener('click', Increment);
document.querySelector('#go').addEventListener('click', Go);