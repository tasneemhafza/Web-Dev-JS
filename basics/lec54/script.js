alert("Hello World");

console.log("Code is running...");
console.log("Code is running 2...");
console.log("Code is running 3...");

var a = prompt("Enter your number: ")
console.log("Your number is: "+ a)

var isTrue= confirm("Are you sure you want to quit?")
if(isTrue){
    console.log("You're exiting.")
}
else{
    console.log("You're not exiting.")
}
document.title = "First WebPage using JS" 