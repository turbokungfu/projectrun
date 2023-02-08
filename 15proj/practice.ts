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
  
export function trim (str: string, size: number): string {
  if (str.length > 3 && size >3 && str.length > size){return `${str.slice(0,size-3)}...`}
  else if (str.length > 3 && size <= 3 && str.length > size){return `${str.slice(0,size)}...`}
  else if(str.length > 3 && str.length < size){return `${str.slice(0,size)}`}
  else if(str.length <= 3 && str.length>size){return `${str.slice(0,size)}...`}
  else {return  `${str}`}
}


//I'm dead in the water on this 7kyu

export function maxRot(n:number):number {
 const ans = []
 
 let arr= n.toString().split('')
for(let i=0; i<arr.length; i++){
arr = arr.slice(0,i), arr.slice(i+1,arr.length), arr.slice(i, i)
console.log(arr)

}
  return n
 
}

//I will come back tomorrow and study. I couldn't assign an array of strings to a string:

export class G964 {
    public static maxRot(n) {
      
      let arrResult = [];
      arrResult.push(n);
      
      let arrNum = n.toString().split('');
      let i = 0;
      while(arrNum.length >= i){
        arrNum.push(...arrNum.splice(i, 1));
        
        arrResult.push(arrNum.join(''));
        i++;
      }
      
      return arrResult.sort().pop();
    }
}