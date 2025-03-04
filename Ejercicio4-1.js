function findArrayIndex(array, text) {
    let elementIndex;
    array.forEach(element => {
        if (text == element) elementIndex = array.indexOf(element);
    });
    return elementIndex;
}

const mainCharacters = [
  "Luke",
  "Leia",
  "Han Solo",
  "Chewbacca",
  "Rey",
  "Anakin",
  "Obi-Wan",
];

let findLuke = findArrayIndex(mainCharacters, "Luke");
let findRey = findArrayIndex(mainCharacters, "Rey");

console.log(findLuke);
console.log(findRey);

