// function concept excersises


//functions that converts percentgrade to letter grade
function letterGrade(number) {
    if (number >=0 && number <=49) {
        return console.log("F")
    }
    else if (number <= 59) {
        return console.log("D")
    }
    else if (number <= 69) {
        return console.log("C")
    }
    else if (number <= 79) {
        return console.log("B")
    }
    else {
        return console.log("A")
    }
}

console.log("A grade of 99% is a letter grade of " + letterGrade(99) + ".");
console.log("A grade of 75% is a letter grade of " + letterGrade(75) + ".");
console.log("A grade of 40% is a letter grade of " + letterGrade(40) + ".");
