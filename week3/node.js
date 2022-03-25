/* function getrectanglearea (width,length){
    return width*length;
}
let area  = getrectanglearea (10,5);
console.log(area); */
function myFunction() {
    let firstArg = arguments[0];
    let secondArg = arguments[1];
    alert("firstArg is: " + firstArg);
    alert("secondArg is: " + secondArg);
}
myFunction("hello","world"); 