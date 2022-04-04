function fizzBuzz() {

  // iterate over 1-100
    // if multiple of 3 and 5 print fizzbuzz
    // else if multiple of 3 print fizz
    // else if multiple of 5 pring buzz
    // else print current #
    
  for (var current = 1; current <= 100; current++) {
    if ((current % 3 == 0) && (current % 5 == 0)) {
      console.log('FizzBuzz')
    } else if (current % 3 == 0) {
      console.log('Fizz')
    } else if (current % 5 == 0) {
      console.log('Buzz') 
    } else {
      console.log(current)
    }
  }   
}
    
fizzBuzz();