// TODO: Implement this in the Inspect section of the browser console as this will not work in Node.js environment

fetch(`https://api.chucknorris.io/jokes/random`)
.then((responseGot) => {  //? if the response is ok (status 200)
    return responseGot.json();
}) 
.then((dataGotFromFirstThen) => {  //? if the promise from the first then is resolved
    console.log("Data is :" ,  dataGotFromFirstThen);
    
    var Joke = dataGotFromFirstThen.value;
    console.log("Joke fetched : ", Joke);    
})
.catch()  //? if any error occurred during the fetch request