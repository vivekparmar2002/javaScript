const accountId = 12452
let accountEmail ="vivek@gmail.com"
var accountPassword ="12345"
accountCity ="ahemdabad"

// accountId = 2 // not allow

accountEmail ="chirag@gamil.com"
accountPassword ="0692"
accountCity ="kolkata"


/*
Prefar not use var 
becouse of issue in block scpoe and functional Scope   
*/

console.log(accountEmail ,accountPassword);
console.table([accountId , accountEmail ,accountPassword , accountCity])
