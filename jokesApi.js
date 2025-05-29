// TODO: Implement this in the Inspect section of the browser console but this will also work in Node.js environment

fetch(`https://api.chucknorris.io/jokes/random`)

.then((responseGot) => {  //? if the response is ok (status 200)
    return responseGot.json();
})

.then((dataGotFromFirstThen) => {  //? if the promise from the first then is resolved
    // console.log("Data is :" ,  dataGotFromFirstThen);
    
    // var Joke = dataGotFromFirstThen.value;
    // console.log("Joke fetched : ", Joke);    

    console.log("✅ Joke Data Received:", dataGotFromFirstThen);
    console.log("🤣 Joke:", dataGotFromFirstThen.value);
})

.catch((error)=>{
    console.error("❌ Error occurred while fetching the joke: ", error);
})  //? if any error occurred during the fetch request