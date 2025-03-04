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

let favoritesSoundsKeys;
let favoritesSoundsValues;
let listOfVolume = [];
let averageVolume = 0;
for (const user of users) {
    favoritesSoundsKeys = Object.keys(user.favoritesSounds);    
    favoritesSoundsValues = Object.values(user.favoritesSounds);
    for (const element of favoritesSoundsKeys) {
        listOfVolume.push(favoritesSoundsValues[favoritesSoundsKeys.indexOf(element)].volume)
    }
    
}

listOfVolume.forEach((value) => {
    averageVolume = averageVolume + value;
})

averageVolume = averageVolume / listOfVolume.length;
console.log(averageVolume);