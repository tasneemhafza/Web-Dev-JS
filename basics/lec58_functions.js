console.log("Tutorial on functions")

function first(abc) {
    console.log("Hey "+abc+", nice to meet you!")
    console.log("Hey "+abc+", hope you have a nice day.")
}
first("Tasneem")
first("BTS")

// function sum(a, b) {
//     console.log(a+b)
// }
// sum(100, 100)

function sum(a, b) {
    return a+b
}
ans= sum(100, 100)
console.log("The sum is: "+ ans)

const func1 = (x)=>{
    console.log("Im arrow function ", x)
}
func1(22)
func1(23)
func1(24)