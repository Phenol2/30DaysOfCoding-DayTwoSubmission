/*Create a function that takes an integer as its input. The function should print all numbers from 1 to n but follow these rules as well:

- If the number is divisible by 3, print Fizz in its place

- If the number is divisible by 5, print Buzz in its place

- If divisible by both 3 and 5, print FizzBuzz */

let fizzBuzzFunc = (n) => {
  let arr = [];
  let num = 0
  for (let i = 0; i < n; i++) {
    num++
    arr.push(num)
    if(arr[i] % 3 === 0 && arr[i] % 5 === 0){
      arr[i] = "FizzBuzz"
    }else if(arr[i] % 5 === 0){
      arr[i] = "Buzz"
    }else if(arr[i] % 3 === 0){
      arr[i] = "Fizz"
    }
  }
  //console.log(arr)
  return arr.join(" ")
}

console.log(fizzBuzzFunc(15))