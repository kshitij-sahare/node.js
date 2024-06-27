// GLOBALS  - NO WINDOW !!!!

// __dirname  - path to current directory
// __filename - file name
// require    - function to use modules (CommonJS)
// module     - info about current module (file)
// process    - info about env where the program is being executed

// console.log(__filename)




// export let name = "asha"
// let name1 = "asha"


// module.exports = {name, name1}



// import

let {john , peter} = require('./04-names')

console.log(john)
console.log(peter)

require('./07-mind-grenade')