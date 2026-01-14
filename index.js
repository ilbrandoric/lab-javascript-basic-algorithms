// Iteration 1: Names and Input

let hacker1 = "Alice";
console.log("The driver's name is " + hacker1);

let hacker2 = "Alexander";
console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals

console.log(hacker1.length);

if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker1.length < hacker2.length) {
  console.log(`The navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

// Iteration 3: Loops

let driverUpperCase = "";
let driverSpaced = ""; 

for (let i = 0 ; i < hacker1.length ; i++) {
    driverUpperCase += hacker1[i].toUpperCase();
    driverSpaced += hacker1[i].toUpperCase() + " ";
}

console.log(driverUpperCase);
console.log(driverSpaced);

let navigatorReversed = "";

for (let i = hacker2.length - 1 ; i >= 0 ; i--) {
    navigatorReversed += hacker2[i];
}

console.log(navigatorReversed);

// Lexicographic Order

if (hacker1.localeCompare(hacker2) < 0) {
    console.log("The driver's name goes first.");
} else if (hacker1.localeCompare(hacker2) > 0) {
    console.log("Yo, the navigator goes first definitely.");
} else {
    console.log("What?! You both have the same name?");
}

// Explanation is:

// When hacker1 is lexicographically FIRST the value is TRUE or = -1
// When hacker2 is lexicographically FIRST the value is FALSE or = 1
//let hacker1 = "Alice";
//let hacker2 = "Alexander";


// Bonus 1
let longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lobortis egestas maximus. Morbi posuere aliquet velit, ut lacinia turpis tempor a. Phasellus aliquam facilisis scelerisque. Etiam eu lobortis lorem. Quisque vulputate pulvinar nibh at bibendum. Nullam sit amet convallis dui. Mauris tempus nisi cursus ex consequat sagittis. Fusce convallis et libero ut scelerisque. Maecenas sed tellus placerat, suscipit lectus sed, faucibus ex. Nulla imperdiet leo sed bibendum tempus. Phasellus ut libero metus.

Vivamus lobortis lorem id ex aliquam, at tincidunt orci ullamcorper. In lectus dolor, fringilla quis sollicitudin a, dapibus at elit. Integer at dui diam. Proin molestie sodales nibh, et semper neque venenatis in. Nulla a turpis a nunc pretium vulputate sed pharetra justo. Praesent at eros luctus, faucibus metus non, tincidunt ligula. Etiam id ante sit amet elit mattis volutpat. Etiam vitae faucibus lacus. Ut a felis enim. Praesent scelerisque eros odio, at mollis quam convallis in. Nunc eu tempor ligula. Fusce id ex eu sem porttitor placerat a vitae sem.

Pellentesque rhoncus urna diam, sit amet dignissim urna ornare auctor. Fusce convallis, augue quis tempus efficitur, neque sapien mattis nisi, ac sodales diam orci quis odio. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer luctus velit at fringilla lobortis. Vestibulum eget dui vel dui semper congue ac vel quam. Duis a velit eros. Donec ut purus quis urna auctor blandit. Curabitur varius erat sit amet mi vulputate, consequat vulputate elit finibus. Pellentesque massa nisl, egestas et sapien sed, auctor luctus tellus. Donec nec enim eu massa luctus finibus. Praesent cursus pellentesque quam, at laoreet lacus blandit in. Sed tincidunt, nisi non consectetur feugiat, lacus purus molestie dolor, sit amet ultricies nisi purus quis ligula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi nec libero et nisl consequat volutpat.`;


const longTextWordCount = longText.trim().split(/\s+/).length; 
//Explanation: trim() removes leading/trailing spaces, split(/\s+/) splits by any whitespace, length counts the words
//Splitting the string using a regular expression /\s+/, which matches one or more whitespace characters.

console.log(longTextWordCount);

// Make your program count the number of times the Latin word et appears.

console.log(`The number of times the Latin word et appears: ${longText.match(/et/g).length}`);
//Explaination: Using match() with the regular expression /et/g to find all occurrences of "et" in the text and then getting the length of the resulting array to count them.


