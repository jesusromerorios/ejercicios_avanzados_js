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

function removeItem (array, text) {
    let indexOfText = findArrayIndex(array, text);
    array.splice(indexOfText, 1);
    return array;
}

let removeIdexText = removeItem(mainCharacters, "Leia");
console.log(removeIdexText);