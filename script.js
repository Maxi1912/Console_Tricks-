const dogs = [
  { name: 'Snichers', age: 2 },
  { name: 'hugo', age: 8 },
];

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

console.log('Hello!');
console.log("Hello I'm %s", 'Max');
// console.log('%c Hello I am', 'font-size: 10px; background: red; color: black');
console.warn('OH NOOO');
console.error('Shit!');
console.info('Corcodiles eat 3-4 people pre year');
console.assert(1 == '1', 'That is wrong!');
console.clear();
const p = document.querySelector('p');

console.log(p);
console.dir(p);

dogs.forEach((dog) => {
  console.groupCollapsed(`${dog.name}`);
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.log(`${dog.name} is ${dog.age * 7} dog years old`);
  console.groupEnd(`${dog.name}`);
});
console.count('Wes');
console.count('Oggi');
console.count('Wes');
console.count('Max');
console.count('Max');
console.count('Max');
console.count('Oggi');
console.count('Max');
console.count('Max');

console.time('fetching data');
fetch('https://api.github.com/users/wesbos')
  .then((data) => data.json())
  .then((data) => {
    console.timeEnd('fetching data');
    console.log(data);
  });
  
console.table(dogs);
