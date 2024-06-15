// 00 - Create a forked repo from this repository and clone it in your local machine.

// 01 - Function
// getTotal(inventory: [{article: '🍔', price: 15, quantity: '1'}, {article: '🍟', price: 10, quantity: '2'}])
// it should return the total. for the example data 👆 it should be: 35. (15x1 + 10x2)

let getTotal = (inventory) =>
  inventory.reduce(
    (accumulator, article) => accumulator + article.price * article.quantity,
    0
  );

let inventory1 = [
  { article: "🍔", price: 15, quantity: "1" },
  { article: "🍟", price: 10, quantity: "2" },
];
console.log(`Total ${getTotal(inventory1)}`);

// 02 - Function
// countBanana(inventory:['🥑','🍌','🥭', '🍌']})

let bananaCounter = (fruits) => {
  const arrayOfBananas = fruits.filter((item) => item === "🍌");

  return `There are ${arrayOfBananas.length} bananas!`;
};

let inventory = ["🥑", "🍌", "🥭", "🍌"];
bananaCounter(inventory);

// countBanana reduce

// 03- Function
//   const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//   console.log(filterEvenNumbers(numbers)); // Output: [2, 4, 6, 8, 10]

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let filterEvenNumbers = (numbers) => {
  return numbers.filter((number) => number % 2 === 0);
};

console.log(filterEvenNumbers(numbers));

// 04 - function
//   const numbers = [1, 2, 3, 4, 5];
//   console.log(squareNumbers(numbers)); // Output: [1, 4, 9, 16, 25]

const numbers1 = [1, 2, 3, 4, 5];

let squareNumbers = (numbers) => {
  return numbers.map((number) => number * number);
};

console.log(squareNumbers(numbers1));

// 05 - function reduce
//   const numbers = [1, 2, 3, 4, 5];
//   console.log(findMax(numbers)); // Output: 5

const numbers2 = [1, 2, 3, 4, 5];

let findMax = (numbers) => {
  return numbers.reduce(
    (accumulator, number) => (number > accumulator ? number : accumulator),
    0
  );
};
console.log(findMax(numbers2));



// 06 - function
//   const people = [
//     { name: "Juan", age: 25 },
//     { name: "Carla", age: 30 },
//     { name: "Lucia", age: 35 },
//     { name: "El Chengue", age: 49 }
//   ];
//   console.log(calculateAverageAge(people)); // Output: 32.5

const people = [
  { name: "Juan", age: 25 },
  { name: "Carla", age: 30 },
  { name: "Lucia", age: 35 },
  { name: "El Chengue", age: 49 },
];

let calculateAverageAge = (people) => {
  return (
    people.reduce((accumulator, person) => accumulator + person.age, 0) /
    people.length
  );
};

console.log(calculateAverageAge(people));


