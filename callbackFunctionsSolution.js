let even_predicate = function (value)
{
    // return true if value is even, false otherwise
    return value % 2 === 0;
};

let odd_predicate = function (value)
{
    // return true if value is odd, false otherwise
    return value % 2 !== 0;
};

let undefined_predicate = function (value)
{
    // strictly check if the value is undefined
    return value === undefined;
};

let null_predicate = function (value)
{
    // strictly check if the value is null
    return value === null;
};

// We're defining a function that takes predicate function to 'callback' 
// and a value to check using the given predicate
let check = function (predicate,value)
{
    // apply the predicate to the value and return the result
    return predicate(value);
};

// DO NOT CHANGE ORDER OF OUTPUT
console.log(check(even_predicate, 9));
console.log(check(odd_predicate, 9));
console.log(check(even_predicate, 8));
console.log(check(odd_predicate, 8));
let x;
console.log(check(undefined_predicate, x));
console.log(check(null_predicate, x));
