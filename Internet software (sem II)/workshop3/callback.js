// function greet(name, callback){
//     console.log( Hello, ${name}!);
//     callback();
// }

// function sayGoodbye(){
//     console.log("Goodbye!");
// }

// greet("john", sayGoodbye);

//1. Async/Await:
async function example(){
    try{
        let result = await somePromise();
        console.log(result);
    } catch(error) {
        console.log(error);
    }
}

//Fetch API
async function fetchData() {
    try{
        const response = await fetch('https://www.google.com/')
    }
}