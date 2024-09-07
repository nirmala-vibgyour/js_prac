// all the comparisons are based with respect to the left entity
// less than 
console.log(3 < 4)
// less than equal to
console.log(3 <= 4)
// greater than 
console.log(3 > 4)
// greater than equal to
console.log(3 >= 4)
// equals
console.log(3 == 4)
// not equals
console.log(3 != 4)
// strict equals, not taking into account the coercion
// take into account the primitive data types
// compares both the side
console.log( 4 === 4.0)
console.log( 4 === '4')
console.log( 4 === 4)
// strict not equal
// take into account the differences of primitive data types
// compares both the side
console.log( 4 !== 4.0)
console.log( 4 !== 4) 
console.log( 4 !== '4')
console.log('4' !== 4)

console.log('Rose' != 'rose')
console.log('Rose' !== 'rose')
console.log('Rose' == 'rose')
console.log('Rose' === 'rose')

// comparisons with && and || can be resolved using parnes too.