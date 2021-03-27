let counter = document.querySelector('');
let count = 1;

setInterval(()=> {

  counter.innerText = count;
  count++

},1000)