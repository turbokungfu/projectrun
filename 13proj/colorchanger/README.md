# I just needed help understanding the useState for React. I figured I could have the background color 'react' to a button click and see how that data is passed. The tic tac toe was a little steep for me.

so, I just figured that a style component of an element can be changed by listing the value of that component as a variable. Then you do declare a 'const [original, setOriginal] = useState(the value of the variable).

in my case, I made a const [color, setColor]= useState(`rgb(0,0,0)`) and then made a function that would allow us to make random numbers for those three values.

Then you make a function that allowed me to make random numbers to replace the zeroes. Once you get those numbers, you can setColor to equal this new number.

So, in summary, the declaration with useState allows you to set your original value (color) and then make a function that will give you a new value and when you make your setColor equal to that, it will change the variable...I think.
