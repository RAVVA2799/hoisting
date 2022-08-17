console.log(functionBelow("Hello"));
function functionBelow(greet) {
   return `${greet} world`;                  //function hoisting
}
console.log(functionBelow("Hi"));





//variable hoisting
var points;                       //only variable declared
points = 200;                   // values declared later.......
console.log(points);            // right output will be printed with a value of 200