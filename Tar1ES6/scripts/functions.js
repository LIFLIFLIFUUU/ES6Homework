export function Initialize(event) {
    // document.querySelector('#input').value = event.target.value;
    let counter = document.querySelector('#value');
if (counter.value != "") 
    console.log(counter.value);
}

export function Increment(event) {
    document.querySelector('#value').value++;
}

export function Go(event) {
    let p = document.createElement('p');
    p.innerHTML = document.querySelector('#value').value;
    document.body.appendChild(p);
}