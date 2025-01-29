// TODO: Primitive Data Types:
//* Primitive data types are immutable and directly store values. JavaScript has seven primitive data types:

//? String
//* Represents textual data.

// const fullName = "Muhammad Usman";
// var email = "muhammadusmanawan88@gmail.com";
// var paymentMode = "Credit Card";
// console.log(typeof fullName); // Output: "string"
// console.log(typeof email); // Output: "string"
// console.log(typeof paymentMode); // Output: "string"

//? Number
//* Represents numeric values, including integers and floating-point numbers.
//* Special numeric values: Infinity, -Infinity, and NaN (Not-a-Number).

// let age = 25;
// let price = 19.99;
// var loggedCount = 34 ;
// console.log(typeof age);   // Output: "number"
// console.log(typeof price); // Output: "number"
// console.log(typeof loggedCount); // Output: "number"

//? BigInt
//* Represents integers larger than the Number type can safely represent.
//* BigInt literals are created by appending n to the end of an integer.

// let bigNumber = 123456789012345678901234567890n;
// console.log(typeof bigNumber); // Output: "bigint"

//? Boolean
//* Represents a logical entity and can have only two values: true or false.

// let isLoggedIn = true;
// console.log(typeof isLoggedIn); // Output: "boolean"

// var a= 40;
// var b= 20;
// var answer = a > b ; 
// console.log(answer);


//? Undefined
//* Represents a variable that has been declared but not assigned a value.

// let x;
// console.log(typeof x); // Output: "undefined"

//? Null
//* Represents the intentional absence of any object value.
//* Note: typeof null returns "object" due to a historical bug in JavaScript.

// let emptyValue = null;
// console.log(typeof emptyValue); // Output: "object"

//? Symbol
//* Represents a unique identifier. Often used as object property keys to avoid name collisions.

// let id = Symbol("id");
// console.log(typeof id); // Output: "symbol"


// TODO: Non-Primitive Data Types:
//* Non-primitive data types store references to objects and are mutable.

//? Object
//* A collection of key-value pairs. Keys can be strings or symbols, and values can be any data type.

// let user = { name: "Alice", age: 30 };
// console.log(typeof user); // Output: "object"

//? Array
//* A special kind of object that stores a list of values.

// let numbers = [1, 2, 3, 4];
// console.log(typeof numbers); // Output: "object"

//? Function
//* A callable object that executes a block of code. Functions are also a type of object.

// function greet() {
//     return "Hello";
//     }
//   console.log(typeof greet); // Output: "function"

//? Date, RegExp, Map, Set, WeakMap, WeakSet
//* These are specialized object types provided by JavaScript for specific use cases:

// Date: Represents a date and time.
// RegExp: Represents a regular expression.
// Map: A collection of key-value pairs where keys can be any data type.    
// Set: A collection of unique values.
// WeakMap, WeakSet: Similar to Map and Set, but with some differences in behavior.
// Weaksets are used to store weak references to objects, which do not prevent garbage collection.
// weakmaps are used to store key-value pairs where the keys are weakly referenced.

// TODO: Dynamic Typing:
//* JavaScript is a dynamically-typed language, meaning the type of a variable is determined at runtime and can change dynamically.

// let variable = 42;       // Initially a number
// variable = "Hello";      // Now a string
// console.log(typeof variable); // Output: "string"


//! 
const theDictator = 'Admiral General Aladin';


// TODO: String Concatination:
//? String concatenation is the process of combining two or more strings into a single string. In JavaScript, the + operator is commonly used for this purpose.

// console.log("my full name is " + fullName );
// console.log("my full name is ", fullName );

//? Using Template Literals (Preferred)
//* Template literals, introduced in ES6, are a cleaner way to concatenate strings using backticks (`) and ${} for variable interpolation:

// console.log(`my full name is ${fullName}`);   // Output: "my full name is John Doe"


//? Using concat() Method

// let firstName = "John";
// let lastName = "Doe";
// console.log("my full name is ".concat(firstName, " ", lastName));    // Output: "my full name is John Doe"


// TODO: Interpolation:
//? Interpolation is the process of embedding or inserting variables or expressions directly into a string. It allows for dynamically constructing strings by substituting placeholders with actual values or computed results.

// var fullName = "Muhammad Usman";
// var courseName = "JavaScript";
// var email = "muhammadusmanawan88@gmail.com";
// PaymentMethod = "Credit Card";

// console.log(`
//     With full name = ${fullName}
//     And Selected course = ${courseName}
//     And with email = ${email}
//     And with Payment method = ${paymentMode}
//     is welcomed to the website.
//     `);


// TODO: Array Operations:

// array = ['red' , 88 ];
// array [2] = 'greeen';  // this is how to add a new element to the array
// console.log(array);

// array.push('blue');   // another way to add a new element to the array
// console.log(array);

// array.pop();   // this is how to delete the last element of the array
// console.log(array);

// array.shift();    // this is how to delete the first element of the array
// console.log(array);

// array.unshift('yellow');    // this is how to add a new element to the start of the array
// console.log(array);


// TODO: How to find Discounted Price:

// var sellingPrice = 100;
// var listingPrice = 1000;
// var discountPercent = ((listingPrice-sellingPrice) / listingPrice) * 100 ;
// var discountedPrice = Math.round(discountPercent);   //? this is how to round off the number to the nearest integer
// console.log(discountedPrice);

// TODO: If-Else conxept in javascript:

// var authentic = false;
// if(authentic)
// {console.log('the condition is true');}
// else
// {
// console.log('the condition is false');
// } 

//* Pro way of Writing If statement in one line

// authentic ? console.log('condition was true') : console.log('conditoin was false') ;

// TODO: Switch statement Example

// var temprature = 20 ;

// var name = "Usman";
// switch(name)
// {
//     case 'Usman':
//         return console.log('you have full access');
//         break;
//     case 'Ahmad':
//         return console.log('you are first younger brother of Usman');
//     case 'Tayyab':
//         return console.log('you are second younger brother of Usman');
//         break;
//     default:
//         return console.log('who tf are you?');
//         break;
// }                     

//! Another Example

// var getuserrole = function (name , role)    // this is a unique way of declaring a variable as a function
// {
//     switch(role)
//     {
//         case "admin" :
//             return `${name} is the admin , and have all the access`;
//             break;       // this is unnessesary because after return it is not executed

//         case "subadmin" :
//             return `${name} is the subadmin , and have access almost same as admin `;
//             break;

//         case "testmaker" :
//             return `${name} is the testmaker and have the authority to create or delete tests `;
//             break;

//         default :
//             return `${name} is the user , and have the limited access`;
//             break;
//     }
// }

// var value = getuserrole("Usman" , "admin");  //? this must be called after the function because it was assigned to a variable and if it is called before the function it will generate error like undefined 
// console.log(value);



/*  TODO: Multi line comment

? or by selecting multi lines and pressing ( ctrl + / )


TODO: Falsy Values  {important for interview part}
* They will always be considered as false which is a boolean expression

undefined
null
""
0
''
NaN                                                                                */


// console.log('Hello WORLD by pressing alt and show curser');
// console.log('Hello WORLD by pressing alt and show curser');
// console.log('Hello WORLD by pressing alt and show curser');
// console.log('Hello WORLD by pressing alt and show curser');
// console.log('Hello WORLD by pressing alt and show curser');

/*
//     *>  press ( alt + up or down key ) to move the line up or down  
//     *>  press ( alt + shift + up or down key ) to copy the line 
    
*/


// TODO: Function conxept which gives output:    

// function sayname (name)
// {
//         var userName = name ;
//         console.log("Hello bro ", userName);
//         console.log(`wat are you doing today? ${userName}`);
//     }
    
//     var name = "Captain Jack Sparrow";
//     sayname(name);
//     sayname("Captain Teague");


// TODO: Function conxept and the difference between return statement and console loging:    

// function greetings(){
//     return "Greetings Admiral General";
// }
// var greet = greetings();
// console.log(greet);
// console.log(greetings());


// // TODO: Function conxept which return boolean values: 

// function isEven(number)
// {
//         return number % 2 === 0 ;
// }
    
// //? First example:
// console.log(isEven(3));
    
// //? Second example:
// var result = [2 , 4 , 6 , 8].every(isEven); // here the function is referenced to a array and checks every element of the array
// console.log(result);


// TODO: Arrow function:

// var result = [2, 4, 6, 8].every((e) => {
//         return e % 2 === 0;
//         })
// console.log(result);

//*  Arrow function can also be used without curly brackets, when we don't want to use return keyword

// var result = [2, 4, 6, 8].every((e) =>  e % 2 === 0 )
// console.log(result);

//! Third example which shows the difference between callback and regular function:

// function greet(name) {
//         console.log("Hello, " + name + "!");
//         }

// function processUserInput(callback) {
//         const name = "Alice";
//         callback(name);
//         }

// processUserInput(greet);  // Output: Hello, Alice!        

//* greet is a callback function because it's passed as an argument to processUserInput.
//* processUserInput calls greet later, using the name parameter.


//! Fourth example which shows how regular functions handle this keyword: 
//? gives an error in strict mode because it tries to access a non-existent property of the global object (this)

// function Person() {
//     this.age = 0;

//     setInterval(function() {
//         this.age++; // `this` here refers to the global object, not Person
//         console.log(this.age);  // NaN or unexpected behavior in strict mode
//     }, 1000);
// }

// const p = new Person();

//! Fifth example which shows how arrow functions handle this keyword:

// function Person() {
//     this.age = 0;

//     const intervalId = setInterval(() => {
//         if (this.age < 30) {         // Condition: Only increment if age is less than 10
//             this.age++;
//             console.log(this.age);
//         } else {
//             clearInterval(intervalId); //? clearInterval() is a built-in JavaScript function that stops a timer set by the setInterval() function. And intervalId is the identifier returned by setInterval() when it was initially called. It's used here to specify which interval should be stopped.  // Stop the interval once age reaches 10
//             console.log("Age limit reached. Age is :", this.age);
//         }
//     }, 100);
// }
// const p = new Person();

//! Sixth example which shows Example of Callback Function with Regular Function:

// function displayData(data) {
//     console.log(data);
// }

// function fetchData(callback) {
//     setTimeout(function() {
//         callback("Data received!"); // displayData(data) function 
//     }, 1000); // this is the delay in milliseconds which is 1 second
// }

// fetchData(displayData);  // Output after 1 second: Data received!

//! Seventh example which shows Example of Callback Function with Arrow Function:

// function fetchData(callback) {
//     setTimeout(() => {
//         callback("Data received!");
//     }, 1000);
// }

// fetchData(data => console.log(data));  // Output after 1 second: Data received!


// TODO: Function conxept with global context:

// tipper(20);  // simply the function is called before the decleration of the function
// function tipper(a){
//         var bill =parseInt(a);       // here the number in the string entered  will be converted into integer

//         console.log(a+5);       // one simple way but it will not convert strings into number but will do string concatination
//         console.log(bill+5);      // or more sophisticated way
//     }
//     tipper("50");


// TODO: Function conxept with global context + scope chain: 
// ? the child function can request from parent function

// var name = "Usman";
// function printName(){
    // var name = "Ahmad";     // if this is not initialized then this function will console.log => Usman   
//     console.log("this is line number 178 ", name);
//     printNameTwo();

//     function printNameTwo(){
        // var name = "Tayyab";  // if this is not initialized then this function will console.log => Ahmad
//         console.log("this is line number 183 ", name);
//     }
// }
// printName();

// TODO: Creating an array:      

// var countries = ["Pakistan", "Russia", "China", "Germany", "Japan"];
// var fruits = new Array("Apple", "Peach", "Mango", "Banana", "Pineapple");

// console.log(fruits);
// console.log(fruits[1]);
// console.log(fruits.length);

//! Make a new array from a array by breaking it: 

// console.log(Array.from("Aladeen"));

//! Find the index of element in array:      

// console.log(fruits.indexOf("Pineapple"));
// console.log(fruits.indexOf("Aeroplane"));

//! Replace element in a array:

// fruits[2] = "Grapes";
// console.log(fruits);

//! Deleting last element in array:  

// fruits.pop(); 
// fruits.pop(); 
// console.log(fruits);

//! Adding and Deleting first element in array:  

// fruits.unshift("Avacado");      // not recommended
// console.log(fruits);
// fruits.shift();
// console.log(fruits);

//! Fill conxept in array:   

// var myArray = [1, 3, 5, 6, 7, 2, 9, 8];
// console.log(myArray.fill(88));
// console.log(myArray.fill("L"));
// console.log(myArray.fill(77 , 2 )); // it will print 77 fron location number 2
// console.log(myArray.fill(99 , 1 , 4)); // it will fill 99 from location number 1 till location number 4, excluding number 4 

// * the start range is inclusive and end range is exclusive

//! Filter conxept in array:

// var numberArray = [ 11, 22, 33, 44, 55, 66, 77, 88, 99 ];
// var resultArray = numberArray.filter( (numb) => (numb < 55) ) ;
// console.log(resultArray);

//! Slice conxept in array:

// var users =  ["Ted" , "Tim" , "Tony" , "Sam" , "Sad" , "Sod"];
// console.log(users.slice(1, 4));

//! Another example of slice:

// const array = ['red', 88, 'green', 'blue'];
// const indexToReplace = 1;
// const newValue = 'grey';

// // Replace the value at index 1
// const newArray = [
//   ...array.slice(0, indexToReplace), // Elements before the index
//   newValue,                         // New value to insert
//   ...array.slice(indexToReplace + 1) // Elements after the index
// ];

// console.log(array);     // Original array remains unchanged
// console.log(newArray);  // New array with replaced value


//! Splice conxept in array:
// * here second value is how much to count from the position mentioned

// users.splice(1, 3 , "HI"); // here 1 is the starting point and 3 is the range
// console.log(users);
// users.splice(1, 2 , "HI", "BYE");  // here starting from position 1 and starting from 1 count 2 and replace them with "HI", "BYE"
// console.log(users);


//TODO: Object conxept:
// * values are stored in key value pair format

// var user = {
//     firstName : "Muhammad" ,
//     lastName : "Usman" , 
//     role : "Admin" ,
//     loginCount : 55 ,
// facebookSignedIn : true ,
// };
// console.log(user.lastName);
// console.log(user["lastName"]);  // here the key should be provided in " " otherwise error will pop up
// user.loginCount = 88 ;
// console.log(user.loginCount);
// console.log(user);
// console.table(user);     // or more sophisticated way


//! Interview Question:

// const a={};
// const b={ key: "b" };
// const c={ key: "c" };

// a[b]=123;
// a[c]=456;

// // console.log(a);  //? it will print { '[object Object]': 456 } because the key is converted to string
// console.log(a[b]);  // 456 after overwriting the previous value 


//TODO: Object conxept with funtions:

// var user = {
//     userId: 88 ,
//     userName: "Muhammad Usman",
//     loggedCount: 33, 
//     courseList: [],
//     buyCourse: function (courseName)    // a function by the name of buyCourse is initialized
//     {
//         this.courseList.push(courseName);   // the courseName this function will be passed will be pushed into Array courseList
//     },
//     getCourseCount: function ()
//     {
//         return `${this.userName} user has been enrolled in ${this.courseList.length} courses`;  // here this keyword makes sure that we are calling userName and courseList from this same object
//     },
//     getInfo: function()
//     {
        // return `${this.userName} user with user Id ${this.userId} has logged in ${this.loggedCount} and enrolled in ${this.courseList.length} `;   //? simple way

//         console.table({           //? more sophisticated way
//             "User Name": this.userName,  // here this keyword should be used but object name can also be referenced
//             "User ID": user.userId,
//             "Login Count": user.loggedCount,
//             "Courses Enrolled": user.courseList.length
//         });
//     },
// };

// var courseList = true ;   // this was made just to make sure that there can be more variable in the code with same name and they will not mess with each other while calling or refering
// console.log(user.getCourseCount() );
// user.buyCourse("Mongo Db course");
// user.buyCourse("Express.js course");
// user.buyCourse("React.js course");
// user.buyCourse("Node.js course");
// console.log(user.getCourseCount() );

// user.getInfo() ;      // marvelous


// TODO: Simple for loop:

// * one simple loop example

// let rows = 5;                          // Number of rows you want to print
// for (let i = 1; i <= rows; i++)        // Outer loop controls the number of lines
// {
//         let stars = '';                // Initialize an empty string for each line 
        
//         //? add stars to the string for each iteration of the outer loop
//         for (let j = 1; j <= i; j++)      // Inner loop controls the number of stars on each line 
//         {
//                 stars += '*';             // Add a star for each iteration of the inner loop
//         }
//         console.log(stars);               // Print the stars for the current line
// }

// * for loop on array example 

// var myArray = ["Punjab", 88 , "K.P.K", "Balochistan", "Sindh", 1947 ];
// for(let i = 0 ; i < myArray.length ; i++)
// {
//     if(typeof myArray[i] !== "string") continue;                                    

//    //? typeof myArray[i] returns a string that describes the type of this element. For example, it could return "string", "number", "object", etc., depending on the element’s type,
//    //! If myArray[i] is not a string, then typeof myArray[i] !== "string" evaluates to true, 
//    //? When continue is executed, the code below it within the loop is skipped for that iteration.         

//     console.log(myArray[i]);
// }


// TODO: simpler (For Each) loop used for arrays  (it is more of a method on array): 

// myArray.forEach( (s) => (console.log(s)) );   // this way 
// myArray.forEach( (s) => console.log(s) );     //? or this way totaly same


// TODO: (For Of) loop used for array:
//? for arrays specially

// const names = ["Youtube", "Facebook", "Instagram", "Netflix", "Amazon" ];
// for (const ironman of names){
//         console.log(ironman);
// }


// TODO: (For In) loop used for objects:
//? for objects specially

// const symbols = {
//     yt: "Youtube" ,
//     ig: "Instagram" ,
//     fb: "Facebook"
// }
// for (const key in symbols)      //  here key refers to the key value pair of object "symbols"
//     {
//         console.log(key);           //  just to print the keys 
//         console.log(symbols[key]);         // just to print the values
//         console.log(`key is ${key} and value is ${symbols[key]} `)         // or to print both of them at same time 
//         // console.log(symbols);         // Against each entry of object, the key value pair of object is dumped 
//     }


// TODO: (This) keyword returning global object:

// var user = {
//     name : "ABC", 
//     age: 23 ,
//     rollNo: 101,
//     getName : function()
//     {
//         console.log(user.name);
//         console.log("Line 379", this);  // here this keyword will dump the whole object, we can get one element by saying this.age to get the age 
//         function sayHello() // this function can be initialized outside the function of the object but when this keyword will be used it will point the global or windowa object 
//         {
//             console.log("Hello");
//             console.log("Line 383", this); // this will points to global or windows object, and will not dump the whole object 
//         }
//         sayHello();   // this is a regular function calling
//     },
// }

// user.getName();     // this is not considered as a regular function calling because it is called through an object 
// console.log("Line 390", this);  // here this keyword refers to the global object or windows object, which in case of node is a global empty object


// TODO: (New) keyword example: 

// var User = function(firstName , courseCount )
// {
//     this.firstName = firstName;
//     this.courseCount = courseCount;
//     this.getCourseCount = function()
//     {
//             console.log(`Course count is: ${this.courseCount}`);
//     };
// };

// var object1 = new User("Jack" ,  2);  // we have to add new to make this not a regular function call in order for the "this" keyword to point to the object rather than global scope and also to creat a new instance of the object 
// // console.log(object1); // dumps the whole object with the new values assigned
// // object1.getCourseCount();

// var object2  = new User("Will" ,  4);
// // console.log(object2);
// // object2.getCourseCount();


//* >>>>>>>>      continued ...
// TODO: Prototype conxept:
// ? to make a function of the object (outside of the object), we use prototype keyword

// User.prototype.getFirstName = function ()
//     {
//         console.log(`Your first name is ${this.firstName}`);
//     }

// ? hasOwnProperty() explained

// if(object2.hasOwnProperty("firstName"))   // hasOwnProperty is available in prototype of the object and it will return true or false + //? this is more sophisticated way
//     {
//     object2.getFirstName();   // gets the first name of object2 by first checking if it exists or not "Will"
//     };

// object1.getFirstName();     // gets the first name of object1 bluntly "Jack"

// var object3 = new User("Barbosa" , 8)
// console.log(object3);       // dumps the whole object3 with the new values assigned
// object3.getFirstName();     // gets the first name of object3
// object3.getCourseCount();       // gets the course count of object3


// TODO: (Object.create) from MDN conxept:
//? creating a proto or a class which defines how every object will be created

// var User = {
//             name: "",
//             getUsername: function () 
//                 {
//                     console.log(`the user name is ${this.name}`);
//                 },
//             };

// var Jacky = Object.create(User);
// // console.log(Jacky);   // here the object is created but the values are not assigned and it will give different results on browser which is "__proto__"
// // Jacky.getUsername(); // this will give empty rusult in name place
// Jacky.name = "Jack Sparrow";
// Jacky.getUsername();

//? not so liked way because values need to be initialized in the {}
// var Barbosa = Object.create(User, {          name: {value: "Hector Barbossa"}, 
//                                             role: {value: "Captain"},     // here new property added to the object
//                                     });

// Barbosa.getUsername();
// var roly = Barbosa.role; // this will pass the role of Barbosa to a variable 'roly'
// console.log(roly); // this will give the role of Barbosa


// TODO: Self Anonymous Executing function or IIFE Immediatly Invoked Function Expression:

// (function (){
//     console.log(`Q.>>  your name is Jack Sparrow?`);
//     console.log(`A.>>  Its Captain Jack Sparrow.`);
// }
// )();


// TODO: Lexical Scoping  + a little touch to Closure:

// function init () 
//     {
//     var Name = "Jack";   // this name will only be available as far as the context of the function
//     function sayName()
//         {      
//         console.log(Name);
//         }
//     sayName();   // here the function in the function is called and hence it goes away after the execution
//     }
// init();


// TODO: Closure + Design Decisions of Redux("A JS library for predictable and maintainable global state management") which is Javascript state management library (also in React and Angular):

//?! one example

// function init ()
// {
//     var Name = "Jack";   // this name will only be available as far as the context of the function //? 'Name' is scoped to 'init'
//     console.log("i am init");
//     function sayName()
//         {
//         console.log(Name);
//         }
//     return sayName;   // here the function is passed as a reference and is not called right away hence it will not leave the memory  //? returns a reference to 'sayName', without invoking it
// }

// console.log("Calling init for the first time");
// var value = init();  // 'init()' is called here, which outputs "i am init"
// value();  // This will output "Jack", here we are using the returned reference of 'sayName' to call it with 'value()'

//?! second example

// function doAdd(x)
// {
//     return function(y)    // y is the second argument passed to doAdd() function, inner function which is returned from doAdd() function
//     {
//         return x+y;
//     }
// }
// var add5 = doAdd(4); // here add5 is holding the execution of doAdd , which simply return the reference of the inner function, this was technically y value
// console.log(add5(5)); // this add5 is now passed x value

// console.log(doAdd(3)(4));  // function can also be called like this 

//?! third example

// let view;
// function likeTheVideo() {
//         let called = 0;
        
//         return function() {
//                 if (called > 0) {
//                         console.log( "Already Subscribed 👍");
//                 } else {
//                         view = "Dictator";
//                         console.log("Subscribed 👍");
//                         called++;
//                 }
//         };
// }

// const subscribe = likeTheVideo(); // Store the returned function

// subscribe(); // Subscribed 👍
// subscribe(); // Already Subscribed 👍
// subscribe(); // Already Subscribed 👍


// TODO: Bind and call concept in closure:    
//? in order to use a function of some other object with same properties bind or call is used

// var firstPirate = {
//     firstName: "Jack",
//     lastName: "Sparrow",
//     role: "Captain",
//     shipName: "Black Pearl",
//     getInfo: function()
//     {
//         console.log(`
//         The First Name is ${this.firstName}
//         The Last Name is ${this.lastName}
//         The Ship Name is ${this.shipName}
//         The Role is ${this.role}
//         `);
//     },
// }

// var secondPirate = {
//     firstName: "Hector",
//     lastName: "Barbossa",
//     role: "Commodore",
//     shipName: "Dauntless",
// }

// firstPirate.getInfo();
// firstPirate.getInfo.bind(secondPirate);       // we can pass it as a reference it will not run 
// firstPirate.getInfo.bind(secondPirate)();     // or we can directly run this 
// var infoOfSecondObject = firstPirate.getInfo.bind(secondPirate);
// infoOfSecondObject();        // or we can call like this

// ? call just calls the function right away
// firstPirate.getInfo.call(secondPirate); 


// TODO: Strings in JavaScript:
//* Escaping characters  

//? one way
// var string1 = "The Jack whispered, \n \"Why Fight \t  When You can Negotiate?.\""       // single quotes can be used for strings containing single quotes, double quotes and backslashes, and vice versa.  This is called escaping. here \n adds a new line and \t adds a tab distance.
// // console.log(string1);

//? other way 
// var string2 = 'Jack\'s Black Pearl from string 2';    
// // console.log(string2);

// var string3 = `Captain Jack Sparrow's Black Pearl`;      // backticks are used for multiline strings and template literals are used for string interpolation and best practice for string manipulation 
// // console.log(string3);

// var name = "Jack";
// var fullName = `My name is Captain ${name}`;
// console.log(fullName);

// console.log(string3.length);
// console.log(string3.charAt(3));
// console.log(string3.endsWith('3'));
// console.log(string3.includes("Pearl"));
// console.log(string3.toLocaleUpperCase());

// var string4 = "The file located at \"C:\\\\Desktop\\My Documents\\Roster\\names.txt\" contains the names on the roster."

// console.log(string4)


// TODO: Strings in JavaScript:
//* ASCI values of the alphabets 
//? ASCII value of 'a' is 97, ASCII value of 'b' is 98, ASCII value of 'c' is 99, ASCII value of 'd' is 100, and so on.

// // Pick a string. Your string can have any number of characters.
// var my_string = "x";    // 120 

// // Calculate the ASCII value of the first character, i.e. the character at the position 0. 
// var ASCII_value = my_string.charCodeAt(0);

// // Let us print
// console.log(ASCII_value);

//? Printing ASCII values of all the characters in your string 

// var my_string = "Mana";     // different from MANA 

// // Iterate using a Loop
// for (var i = 0; i < my_string.length; i++) {
//     console.log(my_string.charCodeAt(i));
// }


// TODO: Replace and ReplaceAll in string:  
//*      >>>>>>>>     the one used in 3 idiot movie

// const str = "Do Yahoo people really love Yahoo?";
// // const newstr = str.replace("Yahoo", "Google"); // this will replace first occurrences of "Yahoo" with "Google"
// const newstr = str.replaceAll("Yahoo", "Google"); // this will replace all occurrences of "Yahoo" with "Google"
// console.log(newstr);


// TODO: Maps in JavaScript:
//? they are similar to objects but with additional features and are not objects

// var myMaps = new Map();
// myMaps.set("key1", "value1");
// myMaps.set("key2", "value2");
// myMaps.set("key3", "value3");
// myMaps.set("key4", "value4");

// console.log(myMaps);

// for (const key of myMaps.keys())   // for of loop is used to iterate over the keys
//     {
//         console.log(`key is ${key}`);
//     }

// for (let value of myMaps.values())   //? for of loop is used to iterate over the values
// {
// console.log(`value is ${value}`);
// }

// for (const [key, value] of myMaps)   //? for of loop is best used to iterate over the key-value pairs for the map , and for of loop is gonna always return key first
//     {
//     console.log(`key is ${key}, and value is ${value}`);
//     }

// myMaps.forEach((key) => console.log(`${key}`));   //? this will print all values of the map because forEach loop thinks that we will be doing something with the values not the indexes

// myMaps.forEach((value) => console.log(`${value}`));  //? this will also print all values of the map 

// myMaps.forEach((v, k) => console.log(`key is ${k} and, value is ${v}`));  //? for each is always gonna return the value first

// myMaps.delete("key2");
// console.log(myMaps);


// TODO: Destructuring in JavaScript:
//? Destructuring is a JavaScript expression that allows us to unpack values from arrays or objects into distinct variables. the datatype of the elements in the array or object must match the type of the variables being destructured. LHS ==must_be== RHS. Destructuring can also be used to swap the values of two variables.

//! example for arrays

// var user = ["Jack", "Sparrow", "Captain", "Black Pearl"];

// // var firstName = user[0];
// // var lastName = user[1];

// var [firstName, lastName, role, shipName] = user; // this is destructuring, it is assigning the values of user array to firstName, lastName, role and shipName //? the name of the variables is different from the properties in the array

// console.log(`The First Name is ${firstName}`);
// console.log(`The Last Name is ${lastName}`);

//! example for objects

// const myUser = {
//         name: "Jack",
//         lastName: "Sparrow",
//         role: "Captain",
//         shipName: "Black Pearl",
// }
// console.log(myUser.role);

// const {name, lastName, role, shipName} = myUser; // this is destructuring, it is assigning the values of myUser object to name, lastName, role and shipName //? the name of the variables should be same as the properties in the object
// console.log(shipName);  
// console.log(myUser);


// TODO: Stringify the Object in JavaScript:

// const settings = {
//         username: "Jack Sparrow",
//         level: 10,
//         health: 100,
// };

// const jsonSettings = JSON.stringify(settings); //? this will convert the object into a JSON string
// const SelectiveJsonSettings = JSON.stringify(settings, ["level", "health"]); //? this will only convert the {level and health} of object into a JSON string
// console.log(jsonSettings);
// console.log(SelectiveJsonSettings);


// TODO: Spread and REST operators in JavaScript:

// var returnMaxValue = Math.max(2,3,4,5,6,7,8,9,10);
// console.log(returnMaxValue);

// var myObj = {};   // an empty object

// Object.assign(myObj, {name: "Jack", lastName: "Sparrow", role: "Captain", shipName: "Black Pearl"});   // this is used to merge two or more objects, here it is assigning the values to myObj object
// console.log(myObj);

//! spread operator

// function addTwoNumbers(a, b) 
// {
//         return a + b;
// }
// console.log(addTwoNumbers(3, 5));

// var numbers = [6, 3];   //? this array should be the lenght of the arguments passed to the function
// console.log(addTwoNumbers(...numbers)); // spread operator is used to pass an array as arguments. This is an example of spread operator. //? The spread operator is used to expand elements of an array or properties of an object into individual arguments.

//! rest operator

// function addMultipleNumbers(...args) // args is an array of all the arguments passed to the function
// {
//     console.log(args); // this will print all the arguments passed to the function as an array. This is an example of rest operator. //? The rest operator is used to capture all the remaining arguments into an array.

//         let sum = 0;
//         for (const iterator of args) 
//                 {
//                 // sum = sum + iterator;
//                 sum += iterator;   // or this is also valid
//                 }
//         return sum;
// } 

// console.log(addMultipleNumbers(2, 5, 8, 10, 11));

//! another example of rest operator

// function addMultipleNumbers(a, b, ...args) // this will treat first two arguments seperately as a and b and the rest of the arguments as an array.
// {
//     console.log(args);    // This is an example of rest operator. //? this will print all the arguments passed to the function as an array except a and b. 

//     let multiply = a * b;
//     let sum = 0;
//     for (const iterator of args) 
//         {
//             // sum = sum + iterator;
//             sum += iterator;   // or this is also valid
//         }
//         return [sum, multiply];
// } 

// console.log(addMultipleNumbers(2, 5, 1, 1));


// TODO: Event loop: 

// const uno = () => {
//     console.log('I am Uno');
// }

// const dos = () => {
//     setTimeout( () => {  //? this could be an AJAX request, database call, or any other asynchronous operation
//         console.log("I am late message");
//         }, 3000);
//     console.log('I am Dos');
//     }

// const tres = () => {
//     console.log('I am Tres');
//     }

// uno();
// dos();  
// tres();


// TODO: Promises Async and Await:

// const uno = () => {
//     return "I am Uno";
// };

// // const dos = () => {    //? this will return a undefined because it is not awaited
// //     setTimeout( () => {  
// //         return "I am two message"; ;
// //         }, 3000);
// //     };

// const dos = async () => {
//     return new Promise((resolve, reject) => {   //? this will return a promise, both resolve and reject are used to handle the success and failure of the promise.
//         setTimeout( () => {  
//                     resolve ( "I am two message"); //? resolve is used to resolve the promise
//                     }, 2000);
//     });
// };

// const tres = () => {
//     return "I am three";
//     };

// const callMe = async () => {   //? async function is used to make the function return a promise.
//     let valOne = uno();
//     console.log(valOne);

//     let valTwo = await dos();   //? await keyword is used to wait for the promise to resolve.
//     console.log(valTwo);

//     let valThree = tres();
//     console.log(valThree);
// };

// callMe();


//! Async JavaScript:

// console.log("Start");

// setTimeout(() => {
//         console.log("Inside setTimeout");
// }, 0); //? this will be exucuted after the console.log("End") because it is a part of the event loop, synchronous code is executed first and then the asynchronous code is executed. There is also priority in the asynchronous code, fetch API has the highest priority, then the promises, then the setTimeout() function.

// console.log("End");


// TODO: Promise .any()  and  .race() example:

// const rejectMe = new Promise((_, reject) => reject("path issue"));
// const resolveMe = new Promise(resolve => resolve());

// //* promise.any(promises)  
// //? if any promise resolves, it resolves the promise.all(promises) waits for all promises to resolve.
// Promise.any([rejectMe, resolveMe, rejectMe])
// .then(() => console.log("All promises resolved"))
// .catch(e => console.log("Rejected"));

// //* promise.race(promises) 
// Promise.race([rejectMe, resolveMe, rejectMe])
// .then(() => console.log("All promises resolved"))
// .catch(e => console.log("Rejected"));


// TODO: Logical Assignment Operators:

// function cartTotal(value) {
//     value ??= 0; //? Logical Assignment Operator. If value is undefined or null, it will be set to 0.
//     console.log(`Current cart total: $${value}`);
// }
// cartTotal();
// cartTotal(10);


// TODO: Numerical Separators:

// var longNumber = 1_23_45_67_890;  //? underscore is used as a numerical separator. it will be ignored by JavaScript while printing.
// console.log(longNumber);


// TODO: Quirky Behaviour of javascript:
//* The behavior of JavaScript should be handled carefully.

// const student = { 
//     age: 25, 
//     name: {
//         firstName: "John",
//         lastName: "Wick",
//     }, 
// };

// student.age = 18;
// console.log(student);
// Object.freeze(student); //? freezes the object and its properties.
// student.age = 33;
// console.log(student);
// student.name.firstName = "Jonathan";
// console.log(student);


// TODO: Adding a random cat picture on the browser by writing a line of code in the inspect section of the browser:

// document.body.addEventListener('click', function () {
//     var myParent = document.getElementsByTagName("h1")[0]; 
//     var myImage = document.createElement("img");
//     myImage.src = 'https://thecatapi.com/api/images/get?format=src&type=gif';
//     myParent.appendChild(myImage);
//     myImage.style.marginLeft = "160px";
// });


// TODO:  A function to reverse the order of characters in a word:

// function reverseTheWord(word) {     // word is parameter passed to the function 
//     var reversedWord = "";       // initially set to empty string
//     console.log(word);      // return the original word

//     //? looop over the characters in reverse order
//     for (var i = word.length - 1; i >= 0; i--) {
        
//         //? adds characters to a new word
//         reversedWord = reversedWord.concat(word[i]);
//         // reversedWord = "" + "o" = "o"
//         // reversedWord = "o" + "l" = "ol"
//         // reversedWord = "ol" + "l" = "oll"
//         // reversedWord = "oll" + "e" = "olle"
//         // reversedWord = "olle" + "H" = "olleH"
//     }
//     console.log(reversedWord);   // return the reversed word

//     return reversedWord;    
// }
// reverseTheWord("Hello World");


// TODO: Interview Questions Practice (Logical)
//* ⚪🟢🔵🟡

//! Falsy values
//? They will always be considered as false which is a boolean expression.
// undefined
// null
// ""
// 0
// ''
// NaN

// console.log("">-1);  // true
//? because if we convert empty string to a value it is 0

// console.log(!!""); // False
//? here first ! changed the false value to true, but the second ! then again changed the true to false 

// console.log(!!"0"); // True
//? here the first ! negates the value, converting the truthy value into false, but the second ! negates it again, flipping it back to true

// console.log(""==true); // False
//? because empty string is a falsy value

// console.log("greater">"elephant");
//? The first characters of the strings are compared: "g" (from "greater") and "e" (from "elephant"). Since 103 > 101, "g" is greater than "e", and the entire comparison stops here without looking at the rest of the characters.

// console.log(![] + []) // False
//? In JavaScript, [] (an empty array) is considered a truthy value. The ! (logical NOT) operator negates the truthiness of its operand. So, ![] becomes false. The + operator here performs type coercion, as one operand ([]) is not a number. When an empty array ([]) is involved in string concatenation, it is coerced into an empty string (""). So, false + [] is equivalent to "false" + "". Result: "false" , and the type of this is string

// console.log([] + []);    //? ""
// console.log(![]);        //? false
// console.log(![] + []);   //? "false"
// console.log(true + []);  //? "true"


//! ForEach
//* Purpose: Iterates through each element of the array and executes a callback function for each element.
//* Returns: undefined or the result of callback against each value (does not return a new array).
//* Use Case: When you need to perform side effects like logging, updating variables, or interacting with external systems.

// const arr = [1, 2, 3];
// arr.forEach(num => console.log(num * 2)); //? Logs: 2, 4, 6
// console.log(arr); //? [1, 2, 3] - Original array remains unchanged

//* Another Example

// let a = [1, 2, 3, 4];
// a.forEach((num)=> {
//     num++;
//     console.log(num);
// })


//! Map() of Array:  
//* Purpose: Iterates through each element of the array, applies a transformation via a callback function, and returns a new array containing the results.
//* Returns: A new array with the transformed elements.
//* Use Case: When you want to create a new array by transforming the elements of an existing array.

// const arr = [1, 2, 3];
// const doubled = arr.map(num => num * 2); //? new array is formed [2, 4, 6]
// console.log(arr); //? [1, 2, 3] - Original array remains unchanged
// console.log(doubled); //? [2, 4, 6]

//* Another Example

// let a = [1, 2, 3, 4];
// let b = a.map(num => num > 2);
// console.log(b); //? [ false, false, true, true ] - Original array remains unchanged


//! Object of objects
//* An object of objects in JavaScript refers to an object where the values are themselves objects. This structure allows us to create hierarchical or nested data models, where we can organize and access data in a meaningful way.

// let a = {}
// let b = {key: "b"}
// let c = {key: "c"}
// a[b] = 100;
// a[c] = 200;

// console.log(a); //? { [object Object]: 200 } - The key is an object (b), and the value is 200

//* Another Example

// const users = {   //? here, there is a object inside a object
//         user1: {
//             id: 1,
//             name: "Alice",
//             age: 25,
//         },
//         user2: {
//             id: 2,
//             name: "Bob",
//             age: 30,
//         },
//         user3: {
//             id: 3,
//             name: "Charlie",
//             age: 35,
//         },
//     };

// console.log(users);
// console.log(users.user1.name); // Output: Alice
// console.log(users.user3.age);  // Output: 35

//? You can access the inner objects and their properties using dot notation (.) or bracket notation ([]).
// console.log(users["user1"]["name"]); // Output: Alice
// console.log(users["user3"]["age"]);  // Output: 35

//* Iterating Over an Object of Objects

//? Using for...in
// for (let key in users) {
//     console.log(`The key is ${key}:`, users[key]);
//     // console.log(`${key}:`, users[key]);  //? or this
//     }

//? Using Object.keys()
// Object.keys(users).forEach((key) => {
//     console.log(`${key}:`, users[key]);
//     });


//? Using Object.entries()
// Object.entries(users).forEach(([key, value]) => {
//     console.log(`${key}:`, value);
//     });

//* Modifying an Object of Objects

// users.user1.age = 26; // Update age for user1
// users.user4 = { id: 4, name: "David", age: 40 }; // Add a new user
// console.log(users);

//* Another Example with Deeper Nesting

// const organization = {
//     department1: {
//         manager: "Alice",
//         employees: {
//             emp1: { name: "Bob", role: "Developer" },
//             emp2: { name: "Charlie", role: "Designer" },
//         },
//         },
//         department2: {
//             manager: "David",
//             employees: {
//                 emp3: { name: "Eve", role: "Analyst" },
//                 emp4: { name: "Frank", role: "Tester" },
//         },
//         },
//     };

//   console.log(organization.department1.employees.emp1.name); //? Output: Bob


//! Scope of variable

// var a = 10;
// {
//     let a = 20;
// }
// var b = 30;
// {
//     let b = 60;
// }

// console.log(a); // Output: 10
// console.log(b); // Output: 30

//* Another Example
//! Temporal Dead Zone (TDZ):

// a = 34;   // a has not been declared yet
// let a;     //? In JavaScript, variables declared with let or const are in a "temporal dead zone" from the start of the block until their declaration is encountered. During this period, accessing the variable (even just assigning a value to it) results in a ReferenceError.
// console.log(a);


// TODO: Hoisting in JavaScript:
//* Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution. This means that no matter where functions and variables are declared, they are moved to the top of their scope regardless of whether their scope is global or local.

// function testHoisting() {
//         console.log(x); //? Output: undefined
//         var x = 100;   // but if we use let instead of var, it will give an error, because let does not allow hoisting and it will not be able to find x
//         console.log(x); //? Output: 100
//         }


// TODO: Null Coalescing in JavaScript:
//* Null Coalescing in JavaScript refers to using the nullish coalescing operator (??) to handle null and undefined values. It provides a concise way to assign a default value when an expression evaluates to null or undefined.

// function value(marks){
//         const valueStorer = marks ?? "nahi aayi";
//         console.log(`value ${valueStorer}`);
// }
// value(10); //? Output: value 10
// value(50); //? Output: value 50
// value(0); //? depending on the operator used, the valueStorer variable will be assigned the value 
//! here zero will be treated as falsy value and will print the alternate value for the valueStorer variable, if the || operator is used.


//TODO: Encapsulation in JavaScript:

// function createCounter() {
//     let count = 0; //? count is a private variable, accessible only within the createCounter function.
//         return {
//         increment() {
//                 count++;
//                 },
//         decrement() {
//                 count--;
//                 },
//         getCount() {
//                 return count;
//         },
//         };

//         //* The createCounter function encapsulates the count variable and the functions increment, decrement, and getCount. The count variable is private and can only be accessed or modified through the functions returned by createCounter.
// }

// const counter = createCounter();
// counter.increment();
// console.log(counter.getCount()); //? Output: 1
// counter.decrement();
// console.log(counter.getCount()); //? Output: 0


// FIXME:
//* Fibonacci sequence
//* ⚪🟢🔵

//! Iterative Approach
//? Most efficient for a single Fibonacci number.

// function fibonacciIterative(n) {
//     if (n <= 0) return 0;      //? If `n` is 0 or less, return 0 (base case).
//     if (n === 1) return 1;     //? If `n` is 1, return 1 (base case).

//         let prev = 0, curr = 1;      // Start with the first two Fibonacci numbers: 0 and 1. prev keeps track of the Fibonacci number before the current one. curr holds the current Fibonacci number.
//         for (let i = 2; i <= n; i++) {      // Start a loop from 2 (since we already know the Fibonacci numbers for n = 0 and n = 1).
//         const temp = curr;    // Store the current value of `curr` in a temporary variable.
//         curr = curr + prev;     // Update `curr` to the sum of `curr` and `prev`.
//         prev = temp;     // Update `prev` to the old value of `curr` (from `temp`).
//         }
//         return curr;
//     }

//   console.log(fibonacciIterative(5)); // Output: 5 , as the fifth number in fibonacci series is 5 

//! Generate Fibonacci Sequence
//? Useful to generate multiple Fibonacci numbers.

// function generateFibonacci(n) {
//     if (n <= 0) return [];
//     if (n === 1) return [0];
//     if (n === 2) return [0, 1];

//     const fib = [0, 1];
//     for (let i = 2; i < n; i++) {
//         fib.push(fib[i - 1] + fib[i - 2]);
//     }
//     return fib;
//     }

//   console.log(generateFibonacci(10)); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]


//! Get two or more same occurences in a array 

// let a = [1, 2, 3, 4, 5, 6, 2, 4, 6]
// function getDuplicate(n){
//     for (let i = 0; i < n.length; i++) {
//         for (let j = i+1 ; j < n.length; j++) {
//             let temp = n[i];
//             if(temp == n[j]){
//                 console.log(temp);
//             }
        
//         }
        
//     }
// }
// getDuplicate(a);


//! Infinite currying
//? Infinite currying relies on closures to maintain the intermediate state of calculations (a). Infinite currying is a way to write concise, chainable, and elegant code for problems involving repeated operations. It's often used in functional programming.

// function add(a) {
//     return function(b) {
//         if (b !== undefined) {
//             return add(a + b); // Keeps returning the function
//         }
//         return a; // If no argument is provided, return the accumulated result
//     };
// }

// console.log(add(1)(2)(3)(4)()); // Output: 10


//* Another Practical Example: Multiplication
// function multiply(a) {
//     return function(b) {
//         if (b !== undefined) {
//             return multiply(a * b); // Keep returning the function
//         }
//         return a; // Return the final product
//     };
// }

// console.log(multiply(2)(3)(4)()); // Output: 24


//! Partial Application:
//? Partial application is a technique where a function with multiple parameters is broken down into a series of functions that each take a subset of the parameters. This technique is used to fix a number of arguments to a function, producing a new function with fewer parameters.

// function add(a){
//         return function(b, c){    //* In Currying function, we can pass the arguments in multiple steps, for this scenerio, there will be three functions which takes three arguments each
//                 return a + b + c;
//         }
// }
// const x = add(1);
// console.log(x(2, 3));  //? 6

// //* or this can also be written as

// const y = add(1)(2, 3);  //? 6
// console.log(y);



// FIXME:
//* Coin Change 
//* ⚪🟢🔵

//? Given:
// An array of coin denominations, coins = [c₁, c₂, ..., cₙ].
// A target amount, amount.
//? Objective:
// Find the minimum number of coins required to make up the given amount.
// If it's not possible to make up the amount with the given coins, return -1.

//! Dynamic Programming (Iterative) Approach  {for optimal performance}

// function coinChangeDP(coins, amount) {
//     // Initialize DP array with amount + 1 (a value greater than any possible minimum)
//     const dp = new Array(amount + 1).fill(amount + 1);
//     dp[0] = 0; // Base case: 0 coins are needed to make amount 0

//     for (let i = 1; i <= amount; i++) {
//         for (let coin of coins) {
//             if (coin <= i) {
//                 dp[i] = Math.min(dp[i], dp[i - coin] + 1);
//             }
//         }
//     }

//     // If dp[amount] has not been updated, return -1
//     return dp[amount] > amount ? -1 : dp[amount];
// }

// // Example Usage:
// const coins = [1, 2, 5];
// const amount = 11;
// console.log(coinChangeDP(coins, amount)); // Output: 3


//! Additional: Counting the Number of Ways to Make Change

// function countWaysToMakeChange(coins, amount) {
//     const dp = new Array(amount + 1).fill(0);
//     dp[0] = 1; // There's 1 way to make amount 0 (by using no coins).

//     for (let coin of coins) {
//         for (let i = coin; i <= amount; i++) {
//             dp[i] += dp[i - coin];
//         }
//     }

//     return dp[amount];   // The value dp[amount] is built up step by step during the nested loops. It represents the number of ways to make change for the given amount.
// }

// // Example Usage:
// const coins = [1, 2, 5];
// const amount = 5;
// console.log(countWaysToMakeChange(coins, amount)); // Output: 4


// FIXME:
//* Given an array of integers, find the pairs that adds up to get a particular number

// function findPairs(array, targetSum) {
//     const pairs = [];
//     const seen = new Set(); // To keep track of visited numbers

//     for (let num of array) {
//         const complement = targetSum - num; // The number that would complete the pair. The complement is the number that, when added to num, equals the targetSum. For example, { if targetSum = 9 and num = 4, then complement = 9 - 4 = 5. this will get the 5 from the array and add it to the pairs array }
//         if (seen.has(complement)) {
//             pairs.push([complement, num]);
//         }
//         seen.add(num); // Add the current number to the set
//     }

//     return pairs;
// }

// // Example usage
// const array = [1, 2, 3, 4, 5, 6, 7, 8];
// const targetSum = 9;
// console.log(findPairs(array, targetSum));


//! Basic Usage of Set in JavaScript:

// const mySet = new Set();

// mySet.add(1); // Add 1 to the set
// mySet.add(2); // Add 2 to the set
// mySet.add(1); // Duplicate, ignored

// console.log(mySet); // Output: Set { 1, 2 }
// console.log(mySet.has(1)); // Output: true (1 exists in the set)
// console.log(mySet.has(3)); // Output: false (3 is not in the set)

// mySet.delete(2); // Remove 2 from the set
// console.log(mySet); // Output: Set { 1 }

//? The Set object lets you store unique values of any type, whether primitive values or object references.

// const array = [1, 2, 3, 4, 1, 2];
// const uniqueValues = [...new Set(array)];
// console.log(uniqueValues); // Output: [1, 2, 3, 4]


//! Print a tree of * with for loop:

// function printTree(height) {
//     for (let i = 1; i <= height; i++) {
//         // Print spaces for alignment
//         const spaces = ' '.repeat(height - i);
//         //? Print stars for the tree layer
//         const stars = '*'.repeat(2 * i - 1);    
//         // If i = 1, 2 * 1 - 1 = 1 star.
//         // If i = 2, 2 * 2 - 1 = 3 stars.
//         // If i = 3, 2 * 3 - 1 = 5 stars, and so on. 
//         console.log(spaces + stars);
//     }
//     const spaces = ' '.repeat(height - 1);
//     console.log(spaces + '*'); // Print the tree trunk / stem
// }

// // Example: Print a tree with height 5
// printTree(5);


// FIXME:
//! Seperate positive and negetive  numbers from a array: 

// function separateNumbers(array) {
//         let positiveNumbers = [];
//         let negativeNumbers = [];
        
//         for (let i = 0; i < array.length; i++) {
//         if (array[i] >= 0) {
//                         positiveNumbers.push(array[i]);
//                 } else {
//                         negativeNumbers.push(array[i]);
//                         }
//         }
        
//         return { positiveNumbers, negativeNumbers };    // Return statement should be carefully used outside the loop
//         //* Return both arrays as an object, coz JavaScript does not support returning multiple values directly.
//         }

// //? Example usage:
// let numbers = [3, -1, 0, 5, -9, -2, 8];
// let result = separateNumbers(numbers);

// console.log("Positive Numbers:", result.positiveNumbers); // [3, 0, 5, 8]
// console.log("Negative Numbers:", result.negativeNumbers); // [-1, -9, -2]


// FIXME:
//* Swap the value of two variables without using third variable:

//? Using Arithmetic Operations
//* Arithmetic operations are straightforward but can lead to overflow issues with very large numbers.

// let a = 5;
// let b = 10;

// console.log(`Before Swap: a = ${a}, b = ${b}`);

// // Swap using addition and subtraction
// a = a + b; // a becomes 15
// b = a - b; // b becomes 5 (original value of a)
// a = a - b; // a becomes 10 (original value of b)

// console.log(`After Swap: a = ${a}, b = ${b}`);


//? Using Bitwise XOR
//* The XOR method is safe for integers and avoids overflow.

// let a = 5;
// let b = 10;

// console.log(`Before Swap: a = ${a}, b = ${b}`);

// // Swap using XOR
// a = a ^ b; // a becomes 15 (binary XOR of 5 and 10)
// b = a ^ b; // b becomes 5 (original value of a)
// a = a ^ b; // a becomes 10 (original value of b)

// console.log(`After Swap: a = ${a}, b = ${b}`);


// FIXME: 
//* Implementation of a Singly Linked List in JavaScript:

// class Node {
//         constructor(value) {
//         this.value = value;
//         this.next = null; // Pointer to the next node
//         }
// }

// class LinkedList {
//         constructor() {
//         this.head = null; // Start of the list
//         this.size = 0;    // Keep track of the size
//         }

//         // Add a node to the end of the list
//         append(value) {
//         const newNode = new Node(value);
//         if (this.head === null) {
//         this.head = newNode;
//         } else {
//         let current = this.head;
//         while (current.next) {
//         current = current.next;
//         }
//         current.next = newNode;
//         }
//         this.size++;
//         }

//         // Add a node at the start of the list
//         prepend(value) {
//         const newNode = new Node(value);
//         newNode.next = this.head;
//         this.head = newNode;
//         this.size++;
//         }

//         // Remove a node by value
//         remove(value) {
//         if (!this.head) return null;

//         if (this.head.value === value) {
//         this.head = this.head.next;
//         this.size--;
//         return;
//         }

//         let current = this.head;
//         let previous = null;

//         while (current && current.value !== value) {
//         previous = current;
//         current = current.next;
//         }

//         if (current) {
//         previous.next = current.next;
//         this.size--;
//         }
//         }

//         // Print the list
//         print() {
//         let current = this.head;
//         let result = '';
//         while (current) {
//         result += `${current.value} -> `;
//         current = current.next;
//         }
//         console.log(result + 'null');
//         }

//         // Get the size of the list
//         getSize() {
//         return this.size;
//         }
// }

// // Example usage
// const list = new LinkedList();
// list.append(10);
// list.append(20);
// list.prepend(5);
// list.print(); // Output: 5 -> 10 -> 20 -> null
// list.remove(10);
// list.print(); // Output: 5 -> 20 -> null


// FIXME:
//* detect if a number is prime

// function isPrime(n) {
//         if (n < 2) return false; // Numbers less than 2 are not prime.
        
//         for (let i = 2; i <= Math.sqrt(n); i++) {
//         if (n % i === 0) {
//         return false; // Divisible by i, not a prime number.
//         }
//         }
        
//         return true; // Passed all checks, it's prime.
// }

// // Examples
// console.log(isPrime(2));  // true
// console.log(isPrime(11)); // true
// console.log(isPrime(15)); // false
// console.log(isPrime(1));  // false


// FIXME:
//* Pyramid generator:

// const character = "*";
// const count = 8;
// const rows = [];

// function padRow(rowNumber, rowCount) {
//   return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
// }
// for (let i = 0; i < count; i += 1) {   //? {i += 1} "take the original value of the variable, add this value, and assign the result back to the variable."
//         rows.push(padRow(i + 1, count));
// }

// let result = ""

// for (const row of rows) {
//     result = result + row + "\n";
// }
// console.log(result);



//!..............................................

//   *   TODO:
//   ?   FIXME:
//   !   