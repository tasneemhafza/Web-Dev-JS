console.log("Im a tutorial on Loops")

// for loop
for(let i=1; i<=10; i++){
    console.log(i);
}

// for-in loop
let object={
    name: "Tasneem",
    role: "Student",
    degree: "B.tech"
}
for (const key in object) {
        const element = object[key];
        console.log(key,element)        
    }

// for-of loop
for (const i of "Tasneem") {
    console.log(i);
}

// while loop
// let i=0
// while(i<5){
//     console.log(i+1)
//     i++
// }

// do-while loop
let i=9
do {
    console.log(i+1)
    i++
}
while (i<2);