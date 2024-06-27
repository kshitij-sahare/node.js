// let {readFileSync, writeFileSync, appendFileSync, readFile, writeFile} = require("fs")


// let syncData = readFileSync("./content/first.txt", "utf8")
// console.log(syncData);
// writeFileSync("./content/first.txt", "this is my content")
// appendFileSync("./content/first.txt", "this is my content1")
// writeFileSync("./content/first.txt", "this is my content2", {flag: "a"})
let syncData = readFile("./content/first.txt", "utf8", (err, res) => {
    if (err) {
        console.log("some error");
    }
    else {
        console.log("something");
    }
})
let syncwrite =writeFile("./content/first.txt", "utf8", (err, res) => {
    if (err) {
        console.log("some error");
    }
    else { console.log(res); }
})


let asynFunct = async () => {
try {
    let data = await syncData
    let data2 = await syncwrite

    console.log("data enterd");
} catch (error) {
    console.log(error)
}
}


let { readFile, writeFile } = require("fs").promises

// async await


// async return a promise
// await makes the function wait for the promise

// console.log("hii");
// function myFunc() {
//     return new Promise(rej, res){

//     }
// }
// console.log(syncData);


// let age = 20;
// let prom = new Promise((valid, invalid) => {
//     setTimeout(() => {
//         if (age > 18)
//             valid("let him enter")
//         else invalid(" underage")
//     }, 3000);
// })



asynFunct()
// console.log(prom)