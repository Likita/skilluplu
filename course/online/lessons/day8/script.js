var array = [
  {
    surname: 'Petrov',
    age: 20,
    bio: 'Good boy'
  },
  {
    surname: 'Klimova',
    age: 28,
    bio: 'Good girl'
  },
  {
    surname: 'Barsukov',
    age: 15,
    bio: 'Good boy'
  },
];
console.log(array[0])
console.log(array[1])
console.log(array[2])
console.log(array.length)

// i++
// i = i + 1

// i--
// i = i - 1
let i = 0;
while(i < array.length) {
  document.write(array[i].surname);

  i++;
}

function arrayLoop() {
  for(let j = 0; j < array.length; j++) {
    if (array[j].age > 18) {
      document.write(`${array[j].surname} - Adult`);
    } else {
      document.write(`${array[j].surname} - Child`);
    }
  }
}

arrayLoop();

window.onload = function() {
  const btn = document.querySelector('.btn');

  btn.addEventListener('click', onBtnClick);
}

function onBtnClick(event) {
  const el = event.target;
  el.innerHTML = 'Click me!';
  el.style.color = 'red';
}

