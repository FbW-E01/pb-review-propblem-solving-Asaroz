// Explain each line of code here (answer as a series of comments)

//  function getSome(...arguments) {
//      const args = arguments.slice(1, 3);
//      return args;
//  }
//  console.log(getSome(90, 100, 75, 40, 89, 95));


//1. The function expects any amount of arguments given to it. It will create an array out of the called arguments. It does this with the spread operator.
//2. This will save part of the array (index 1 to 3) into a new constant named args
//3.the function returns new cut array
//4. The function is closed
//5.Here the function is called within a console log. it will print out anything that the function returns, wich in this case is an array with this values[100,75,40]