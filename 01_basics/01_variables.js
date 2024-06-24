const accountId=123456
let accountEmail="xyz@gmail.com"
var accountPassword= "12345678"
accountCity="peshawar"
// accountId = 2 //not allowed
console.log(accountId);
accountEmail="abc@yahoo.com"
accountPassword="0987"
accountCity="khanpur"
let accountState;
/* 
prefer not to use "var "
because of an issue in block scope and funtional scope
*/
console.table([accountEmail,accountPassword,accountCity,accountState])