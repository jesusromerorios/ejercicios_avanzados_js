const fantasticFour = [
    "La antorcha humana",
    "Mr. Fantástico",
    "La mujer invisible",
    "La cosa",
];

function swap (list, firstElement, secondElement) {
    let firstObject = list[firstElement];
    let secondObject = list[secondElement];
    
    if ((firstElement >= 0 && firstElement < list.length) && (secondElement >= 0 && secondElement < list.length)) {
        list[firstElement] = secondObject;
        list[secondElement] = firstObject;
        return list;
    } else {
        return "Elige posiciónes de elementos que esten en tu lista"
    }
    
}

let swapList = swap(fantasticFour, 1, 3);
console.log(swapList);