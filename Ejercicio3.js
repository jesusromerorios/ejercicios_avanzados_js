const users = [
    {
        name: "Alberto",
        favoritesSounds: {
            waves: { format: "mp3", volume: 50 },
            rain: { format: "ogg", volume: 60 },
            firecamp: { format: "mp3", volume: 80 },
      },
    },
    {
        name: "Antonio",
        favoritesSounds: {
            waves: { format: "mp3", volume: 30 },
            shower: { format: "ogg", volume: 55 },
            train: { format: "mp3", volume: 60 },
        },
    },
    {
        name: "Santiago",
        favoritesSounds: {
            shower: { format: "mp3", volume: 50 },
            train: { format: "ogg", volume: 60 },
            firecamp: { format: "mp3", volume: 80 },
        },
    },
    {
        name: "Laura",
        favoritesSounds: {
            waves: { format: "mp3", volume: 67 },
            wind: { format: "ogg", volume: 35 },
            firecamp: { format: "mp3", volume: 60 },
        },
    },
];

let rawListOfSound = [];
let listOfSound = [];
let lastSound = [];
let counter = 1;
for (const user of users) {
    for (const sound in user.favoritesSounds) {
        rawListOfSound.push(sound);
    }
}
rawListOfSound.sort();
rawListOfSound.forEach((element) => {
    if (lastSound.includes(element)) {
        listOfSound.pop();
        counter = counter + 1;
        listOfSound.push({[lastSound] : counter});
    } else {
        counter = 1;
        lastSound = element;
        listOfSound.push({[lastSound] : counter})
    }
})

console.log(listOfSound)