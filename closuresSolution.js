let counter = function (increment) {
    /*
        Uncomment the line that will correctly result in a separate (rather than shared) 
        counter if multiple counter functions are defined
    */
    let count = 0; // ensures each closure has its own counter

    /*
        Create and return an inner function that receives a value increment
        and increments the value stored in count by increment.
    */
    return function() {
        count += increment;
        return count;
    };
};

let countByTwo = counter(2); // set this variable to a closure that adds two each time
let countByOne = counter(1); // set this variable to a closure that adds one each time

// DO NOT change the lines below
console.log(countByTwo());
console.log(countByOne());
console.log(countByTwo());
console.log(countByOne());
