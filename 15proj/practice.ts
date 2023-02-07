export function simpleMultiplication(num: number): number{
    console.log(num)
    return num % 2 === 0 ? num * 8 : num * 9;

  }
  //okay, I think the first number in the parameter is the variable name and the 2nd is the type, but I don't know what the 2nd 'number' means. I'll ask chatgpt.

  //ok, the second number is the expected output of the function.

  //I learned about 'unreachable' code that I tried to enter after the return.

  //I'm going to try and make a deno and fresh framework now.

  //TS seems really similar to JS at the 8 kyu level

  export function mango(q: number, p: number): number{
    const free = Math.floor(q/3)
    return (p*q)-(p*free)
  }

  //VScode let me know that 'free' is never reassigned and to use 'const'. cool.
  

