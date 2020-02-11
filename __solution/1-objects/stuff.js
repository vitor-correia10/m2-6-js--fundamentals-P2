
// 4. 
//-------------------------------------------------
//ITERATING OVER KEYS & VALUES 
//-------------------------------------------------

// 1. The following object has a number of key/value pairs that need to be removed:

//   ```js
//   var dirtyObject = {
//     _fht: 192492,
//     name: "Alyssa P. Hacker",
//     age: 26,
//     _byz: 939205,
//     _ttrs: 510852
//   }
//   function clean(obj) {
//     // ...
//   }
//   clean(dirtyObject); // => {name: "Alyssa P. Hacker", age: 26}
//   ```

//   The function `clean` should accept an object as an argument and return a new
//   object that has all of the key/value pairs of its parameter except for those
//   that begin with `_`.

// var dirtyObject = {
//     _fht: 192492,
//     name: "Alyssa P. Hacker",
//     age: 26,
//     _byz: 939205,
//     _ttrs: 510852
//   };
   
// //Solution //LOL LOOK HOW UGLY IT IS 

// function clean(obj) {
//   //Declare clean Object 
//   finalObject = {};
//   //Placeholder array for original object properties
//   var objectPropertyArray = []; 
//   //Put properties from "obj" in array 
//   objectPropertyArray = Object.getOwnPropertyNames(obj);
//   //Repeat for each element in placeholder array 
//   for (var i=0; i < objectPropertyArray.length; i++) {
//     //access first character in each array element
//     if (objectPropertyArray[i].charAt(0) !== "_") {
//       // add each to empty object
//       finalObject[objectPropertyArray[i]] = obj[objectPropertyArray[i]];
//     }
//   }
//   return finalObject;
// }

// clean(dirtyObject);

// //SO MUCH CLEANER

// function clean(object){
//   //declare clean obj:
//   var clean = {};
//   for(var prop in object){
//     console.log(prop);
//     //convert prop to string:
//     prop = prop.toString();
//     //if prop doesn't contain '_':
//     if(prop[0] !== '_'){
//       clean[prop] = object[prop];
//     }
//   }
//   return clean;
// }

// console.log(clean(dirtyObject));
// //convert keys to string: if string doesn't contain '_', set equal to value and put both in clean object.

//-------------------------------------------------

// 2. Write a function `removeOddValues` that takes an object as an argument and
//   returns an object with all key/value pairs removed for which the value holds
//   an *odd number*. You'll need to use the \`typeof\` operator to first check that
//   the values are numbers:

//   ```js
//   typeof "Hello"
//   typeof 3
//   ```

//Solution 

var numbers = {
    number1: '1', 
    number2: 2,
    number3: 3,
    number4: 4,
    number5: 5
  };
  
  // function removeOddValues(object) {
  //   // Declare empty object
  //   var withoutOdds = {};
  //   // Iterating thorugh each property of object
  //   for (var prop in object) {
  //     // If not a number or even, add property and value to empty object
  //     if (typeof object[prop] !== 'number' || object[prop] % 2 === 0) {
  //       withoutOdds[prop] = object[prop];
  //     }
  //   }
  //   return withoutOdds;
  // }
  
  // removeOddValues(numbers);
  
  //-------------------------------------------------
  //MORE PRACTICE
  //-------------------------------------------------
  
  // 1. Look around at various physical objects in the room, or think about
  //   activities that you enjoy. How would you represent this *things* as objects?
  //   Practice creating objects to represent different things. Some ideas include:
  
  //   - Your favorite drink
  //   - A recipe
  //   - Sports or hobbies
  //   - Your car/bike/hoverboard/vehicle-like thing
  //   - Literally anything
     
  var family = {
    pup: 'Jojo',
    dad: 'Haig',
    mom: 'Nina',
    sister: 'Natalie',
    brother: 'Aram',
    grandmother: 'Never',
    other: {
      girlfriend: 'Michelle',
      smallpup: 'Queenie'
    },
  };
  
  //-------------------------------------------------
  
  // 2. Write a function `countWords` that, when given a string as an argument,
  //   returns an *object* where *keys* are the words in the string, and *values*
  //   are the number of occurrences of that word within the string:
  
  //   ```js
  //   function countWords(s) {
  //   // ...
  //   }
  //   countWords("hello hello"); // => {"hello": 2}
  //   countWords("Hello hello"); // => {"Hello": 1, "hello": 1}
  //   countWords("The quick brown"); // => {"The": 1, "quick": 1, "brown": 1}
  //   ```
  
  //   **HINT:** You will want to make use of the string method `split`. Try
  //   `\"Hello hello".split(" ")` at a console to see how it works.
  
  //   - Modify `countWords` to be *case insensitive* by using the following string
  //     method (experiment at a console with it to learn its behavior):
  
  //   ```js
  //   "HElLo".toLowerCase(); // => ???
  
  //Solution STUDY THIS 
  
  // function countWords(string) {
  //   //declare obj:
  //   var counts = {};
  //   //string case insensitive 
  //   string = string.toLowerCase();
  //   //split string into array:
  //   array = string.split(' ');
  //   console.log(array);
  //   //go through array:
  //   //check if key exists:
  //   for(var i = 0; i < array.length; i++){
  //     if(counts[array[i]] === undefined){
  //       counts[array[i]] = 0;
  //     }
  //     counts[array[i]]++;
  //     console.log(counts[array[i]]);
  //   }
  //   return counts;
  // }
  
  // countWords("These Are aRe arE my are words");
  
  //-------------------------------------------------
  
  // 3. Write a function `countCharacters` that, when given a string as an argument,
  //   returns an object containing counts of the ocurrences of each *character* in
  //   the string.
  
  //   ```js
  //   function countCharacters(s) {
  //     // ...
  //   }
  //   countCharacters("hello"); // => {"h": 1, "e": 1, "l": 2, "o": 1}
  //   ```
  
  //   **HINT:** You will want to make use of the string method `split`. Try
  //   `\"hello".split("")` at a console to see how it works.
  
  //Solution 
  
  // function countCharacters(string) {
  //   //declare empty object
  //   var object = {};
  //   //split string into characters in an array
  //   split = string.split('');
  //   //iterating for each character in variable split
  //   for (var i=0; i < split.length; i++) {
  //     if (object[split[i]] === undefined) {
  //       object[split[i]] = 0;
  //     }
  //     object[split[i]]++;
  //   }
  //   return object;
  // }
  
  // countCharacters("hello");
  
  //-------------------------------------------------
  
  // 4. Write a function `select` that accepts two arguments: an object and an
  //   array. The **array** should contain names of keys that will be *selected* from
  //   the object:
  
  //   // ```js
  //   // function select(obj, keys) {
  //   //   // ...
  //   // }
  //   // select({a: 1, b: 2, c: 3}, ["a"]); // => {a: 1}
  //   // select({a: 1, b: 2, c: 3}, ["a", "c"]); // => {a: 1, c: 3}
  //   // select({a: 1, b: 2, c: 3}, ["a", "c", "d"]); // => {a: 1, c: 3}
  
  //Solution 
  
  // function select(object, array) {
  //   //declare final object
  //   var finalObj = {}; 
  //   for (var i=0; i < array.length; i++) {
  //     var objectKey = array[i];
  //     if (object[objectKey]) {
  //       finalObj[objectKey] = object[objectKey];
  //     }
  //   }
  //   return finalObj;
  // }
  
  // select(family, ["pup", "yo", "mom"]);
  
  //-------------------------------------------------
  
  // 5. Write a function `extends` that accepts two objects as arguments, and
  //   *extends* all of the key/value pairs of the second one to the first one.
  
  //   ```js
  //   function extend(obj1, obj2) {
  //     // ...
  //   }
  //   extend({a: 1}, {b: 2}); // => {a: 1, b: 2}
  //   extend({a: 1, c: 3}, {b: 2, c: 4}); // => {a: 1, b: 2, c: 4}
    
  object1 = {
    a: 1,
    b: 2,
    c: 3
  };
  
  object2 = {
    c: 4,
    d: 5, 
    e: 6
  };
  
  //Solution 
  
  // function extender(obj1, obj2) {
  //   for (var key in obj2) {
  //     if (!obj1.hasOwnProperty(key) || obj1[key] < obj2[key]) {
  //       obj1[key] = obj2[key];
  //     }
  //   }
  //   return obj1;
  // }
  
  // extender(object1, object2);
  
  
  