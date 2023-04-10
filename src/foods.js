// const foods = [
//     "🍇", "🍈", "🍉", "🍊", "🍋", "🍌", "🍍", "🍎",
//     "🍏", "🍐", "🍒", "🍓", "🥝", "🍅", "🥑",
//   ];

// export default foods;


// Used Array.from method to create an array of individual 
// characters (code points) from the original string. 
// This will ensure that each emoji is treated as a 
// single character, even if it is represented by a 
// Unicode surrogate pair.
const foods = Array.from([
    "🍇", "🍈", "🍉", "🍊", "🍋", "🍌", "🍍", "🍎",
    "🍏", "🍐", "🍒", "🍓", "🥝", "🍅", "🥑",
].join(''));

export default foods;
