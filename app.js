console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
let thisNum = 1;
for ( ; thisNum <= 100; thisNum++) {
    let remainder = thisNum % 2;
    if (remainder) {
        console.log("The number " + thisNum + " is odd.")
    }
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
thisNum = 1;
for ( ; thisNum <= 100; thisNum++) {
    if (thisNum % 3 == 0 && thisNum % 5 == 0) {
        console.log(thisNum + " --> FIZZBUZZ");
    } else if (thisNum % 3 == 0) {
        console.log(thisNum + " --> FIZZ");        
    } else if (thisNum % 5 == 0) {
        console.log(thisNum + " --> BUZZ");        
    }
}

// Exercise 3 Section
console.log("EXERCISE 3 - WHILE Odds:\n==========\n");
thisNum = 1;
while (thisNum <= 100) {
    if (thisNum % 2) {
        console.log("The number " + thisNum + " is odd.")
    }
    ++thisNum;
}
console.log("EXERCISE 3 - WHILE FizzBuzz:\n==========\n");
thisNum = 1;
while (thisNum <= 100) {
    if (thisNum % 3 == 0 && thisNum % 5 == 0) {
        console.log(thisNum + " --> FIZZBUZZ");
    } else if (thisNum % 3 == 0) {
        console.log(thisNum + " --> FIZZ");        
    } else if (thisNum % 5 == 0) {
        console.log(thisNum + " --> BUZZ");        
    }
    ++thisNum;
}

console.log("EXERCISE 3 - DO WHILE Odds:\n==========\n");
thisNum = 1;
do {
    if (thisNum % 2) {
        console.log("The number " + thisNum + " is odd.")
    }
    ++thisNum;
} while (thisNum <= 100)
console.log("EXERCISE 3 - DO WHILE FizzBuzz:\n==========\n");
thisNum = 1;
do {
    if (thisNum % 3 == 0 && thisNum % 5 == 0) {
        console.log(thisNum + " --> FIZZBUZZ");
    } else if (thisNum % 3 == 0) {
        console.log(thisNum + " --> FIZZ");        
    } else if (thisNum % 5 == 0) {
        console.log(thisNum + " --> BUZZ");        
    }
    ++thisNum;
} while (thisNum <= 100)

// Exercise 4 Section
console.log("EXERCISE 4 - Searching for Random Value:\n==========\n");
let value = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500
console.log("Searching for " + value + " in the range of [0," + n + "]");
let foundIt = false;
for (let thisVal=0; thisVal<=n; thisVal++) {
    if (thisVal==value) {
        console.log("Found our random value! (" + value + ")");
        foundIt = true;
        break
    }
}
if (foundIt == false) {
    console.log("Never found value " + value);
}

// Exercise 5 Section
console.log("EXERCISE 5 - Custom FIZZBUZZ:\n==========\n");
let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let start = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let end = Math.round(Math.random() * (1000 - 100) + 100); // creates a random number between 100 and 1000
console.log("Fizzing for " + fizzDivisor + " and buzzing for " + buzzDivisor + " in the range [" + start +"," + end + "]");
for (let specialFB=start ; specialFB <= end; specialFB++) {
    if (specialFB % fizzDivisor == 0 && specialFB % buzzDivisor == 0) {
        console.log(specialFB + " --> FIZZBUZZ");
    } else if (specialFB % fizzDivisor == 0) {
        console.log(specialFB + " --> FIZZ");        
    } else if (specialFB % buzzDivisor == 0) {
        console.log(specialFB + " --> BUZZ");        
    }
}