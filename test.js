const { sum } = require('./app.js');

// start your first test
test('adds 14 + 9 to equal 23', () => {
    //inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // we expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});

test("One euro should be 1.206 dollars", function(){
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js')

    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})

test("1 dollar should be 136.9 yen", function(){
    //import the function from app.js
    const { fromDollarToYen } = require('./app.js')

    // use the function like its suppoed to be used
    const dollars = fromDollarToYen(1)

    // if 1 dollar are 136.9 yen
    const expected = 1 * 136.9; 
    
    // this is the comparison for the unit test
     expect(fromDollarToYen(4)).toBe(547.60); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})

test("1 yen should be 0.0062 pound", function(){
    //import the function from app.js
    const { fromYenToPound } = require('./app.js')
    
    // this is the comparison for the unit test
     expect(fromYenToPound(1)).toBe(0.0062); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})