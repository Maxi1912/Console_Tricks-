const dogs = [
  { name: "Snichers", age: 2 },
  { name: "hugo", age: 8 },
];

function makeGreen() {
  const p = document.querySelector("p");
  p.style.color = "#BADA55";
  p.style.fontSize = "50px";
}

//1. Regular
console.log("Hello!");

//2. Interpolated
console.log("Hello I'm %s", "Max");

//3. Syled
// console.log('%c Hello I am', 'font-size: 10px; background: red; color: black');

//4. Warning!
console.warn("OH NOOO");

//5. Error
console.error("Shit!");

//6. Info
console.info("Corcodiles eat 3-4 people pre year");

//7. Testing
console.assert(1 == "1", "That is wrong!");

//8. Clearing
console.clear();

//9. Viewing DOM Elements
const p = document.querySelector("p");

console.log(p);
console.dir(p);

//10. Grouping together
dogs.forEach((dog) => {
  console.groupCollapsed(`${dog.name}`);
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.log(`${dog.name} is ${dog.age * 7} dog years old`);
  console.groupEnd(`${dog.name}`);
});

//11. Counting
console.count("Wes");
console.count("Oggi");
console.count("Wes");
console.count("Max");
console.count("Max");
console.count("Max");
console.count("Oggi");
console.count("Max");
console.count("Max");

//12. Timing
console.time("fetching data");
fetch("https://api.github.com/users/wesbos")
  .then((data) => data.json())
  .then((data) => {
    console.timeEnd("fetching data");
    console.log(data);
  });

//13. Table
console.table(dogs);
