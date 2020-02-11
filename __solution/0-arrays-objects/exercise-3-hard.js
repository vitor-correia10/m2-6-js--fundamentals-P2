// Exercise 3 (hard)
// -------------------
const colors = ["red", "orange", "yellow", "green", "pink", "black", "gray", "blue", "violet"];

// The array above contains all the colors in the visible light spectrum but has some
// that don't belong. In case you've forgotten, the colors in the spectrum are:
// red, orange, yellow, green, blue, violet

// Write a script that removes the incorrect colors and output the corrected array to the console.

// You must console the colors array.
// NO for loops!

const tempArr = colors.map(color => color);

tempArr.forEach((color) => {
    const rainbowColors = ['red', 'orange', 'yellow', 'green', 'blue', 'violet'];

    if (!rainbowColors.includes(color)) {
        // get the pos of the element in the array
        const currentPos = colors.indexOf(color);
        // remove it
        colors.splice(currentPos, 1);
    }
});

// output list
colors.forEach((item) => console.log(item));