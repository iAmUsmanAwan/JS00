// const fullName = "Muhammad Usman";
// var email = "usman@gmail.com";
// var courseName = "React JS Bootcamp";
// var isLoggedIn = false ;
// var loggedCount = 34 ;
// var paymentMode = "Credit Card";
// console.log("my full name is " + fullName );
// console.log("my full name is ", fullName );
//       TODO:    Interpolation:
// console.log(`
//     With full name = ${fullName}
//     And Selected course = ${courseName}
//     And with email = ${email}
//     And with Payment method = ${paymentMode}
//     is welcomed to the website.
//     `);

const theDictator = 'Admiral General Aladin';
// console.log(theDictator);

// array = ['red' , 88 ];
// array [2] = 'greeen';
// console.log(array);

// var a= 410;
// var b= 20;
// var answer = a > b ; 
// console.log(answer);

// TODO:   How to find Discounted Price
// var sellingPrice = 100;
// var listingPrice = 1000;
// var discountPercent = ((listingPrice-sellingPrice) / listingPrice) * 100 ;
// var discountedPrice = Math.round(discountPercent);
// console.log(discountedPrice);

//TODO:     if else conxept in javascript

// var authentic = false;
// if(authentic)
// {console.log('the condition is true');}
// else
// {
// console.log('the condition is false');
// } 

// ! writing if statement alternative way is down below 

// authentic ? console.log('condition was true') : console.log('conditoin was false') ;

// ! Switch statement Example
// var temprature = 20 ;

// var name = "Usman";
// switch(name)
// {
//     case 'Usman':
//         return console.log('you have full access');
//         break;
//     case 'Ahmad':
//         return console.log('you are younger brother of Usman');
//         break;
//     default:
//         return console.log('who tf are you?');
//         break;
// }                     

/*               TODO:     also       FIXME:          +  Multi line comment

! falsy values
?they will always be considered as false which is a boolean expression

undefined
null
""
0
''
NaN                                                                   */

// ! Switch statement Example

// var getuserrole = function (name , role)           // this is a unique way of declaring a variable as a function
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

// ! ?????????????????????????????????????????????????????????????????????????????????????????????????????????????

// console.log('Hello WORLD by pressing alt and show curser');
// console.log('Hello WORLD by pressing alt and show curser');
// console.log('Hello WORLD by pressing alt and show curser');
// console.log('Hello WORLD by pressing alt and show curser');
// console.log('Hello WORLD by pressing alt and show curser');

//?  selecting multi lines and pressing ( ctrl + / )
/*
    *>  press ( alt + up or down key ) to move the line up or down  
    *>  press ( alt + shift + up or down key ) to copy the line 
    
*/


// TODO:        function conxept which gives output    

// function sayname (name)
// {
    //     var userName = name ;
    //     console.log("Hello bro ", userName);
    //     console.log(`wat are you doing today? ${userName}`);
    // }
    
    // var name = "papi chulo";
    // sayname(name);
    // sayname("usman");

// TODO:        function conxept and the difference between return statement and console loging    

// function greetings(){
//     return "Greetings Admiral General";
// }
// var greet = greetings();
// console.log(greet);
// console.log(greetings());

// TODO:          function conxept which return boolean values 

// function isEven(number)
// {
//         return number % 2 === 0 ;
// }
    
//! //       ? first example:
// console.log(isEven(3));
    
//! //       ? second example:
// var result = [2 , 4 , 6 , 8].every(isEven); // here the function is referenced to a array and checks every element of the array
// console.log(result);

//?  Arrow function
// var result = [2, 4, 6, 8].every((e) => {
//         return e % 2 === 0;
//     })
// console.log(result);

// //?  Arrow function can also be used without return keyword and curly brackets are also excluded
// var result = [2, 4, 6, 8].every((e) =>  e % 2 === 0 )
// console.log(result);

//! // third example which shows the difference between callback and regular function:

// function greet(name) {
//     console.log("Hello, " + name + "!");
//     }

// function processUserInput(callback) {
//     const name = "Alice";
//     callback(name);
//     }

// processUserInput(greet);  // Output: Hello, Alice!        
// //? greet is a callback function because it's passed as an argument to processUserInput.
// //* processUserInput calls greet later, using the name parameter.

//! fourth example which shows how regular functions handle this keyword: 
//? gives an error in strict mode because it tries to access a non-existent property of the global object (this)

// function Person() {
//     this.age = 0;
    
//     setInterval(function() {
//         this.age++; // `this` here refers to the global object, not Person
//         console.log(this.age);  // NaN or unexpected behavior in strict mode
//     }, 1000);
// }

// const p = new Person();

//! fifth example which shows how arrow functions handle this keyword:

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

//! sixth example which shows Example of Callback Function with Regular Function:

// function displayData(data) {
//     console.log(data);
// }

// function fetchData(callback) {
//     setTimeout(function() {
//         callback("Data received!"); // displayData(data) function 
//     }, 1000); // this is the delay in milliseconds which is 1 second
// }

// fetchData(displayData);  // Output after 1 second: Data received!

//! seventh example which shows Example of Callback Function with Arrow Function:

// function fetchData(callback) {
//     setTimeout(() => {
//         callback("Data received!");
//     }, 1000);
// }

// fetchData(data => console.log(data));  // Output after 1 second: Data received!

// TODO:          function conxept with global context 

// tipper(20);  // simply the function is called before the decleration of the function
// function tipper(a){
//         var bill =parseInt(a);       // here the number in the string entered  will be converted into integer
    
//         console.log(a+5);       // one simple way but it will not convert strings into number but will do string concatination
//         console.log(bill+5);      // or more sophisticated way
//     }
//     tipper("50");
    
// TODO:          function conxept with global context + scope chain 
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

// TODO:         creating an array      

// var countries = ["Pakistan", "Russia", "China", "Germany", "Japan"];
// var fruits = new Array("Apple", "Peach", "Mango", "Banana", "Pineapple");

// console.log(fruits);
// console.log(fruits[1]);
// console.log(fruits.length);

// TODO:          make a new array from a array by breaking it 

// console.log(Array.from("Aladeen"));

// TODO:         find the index of element in array      

// console.log(fruits.indexOf("Pineapple"));
// console.log(fruits.indexOf("Aeroplane"));

// TODO:          replace element in a array

// fruits[2] = "Grapes";
// console.log(fruits);

// TODO:          deleting last element in array  

// fruits.pop(); 
// fruits.pop(); 
// console.log(fruits);

// TODO:         adding and deleting first element in array  

// fruits.unshift("Avacado");      // not recommended
// console.log(fruits);
// fruits.shift();
// console.log(fruits);

// TODO:           fill conxept in array   

// var myArray = [1, 3, 5, 6, 7, 2, 9, 8];
// console.log(myArray.fill(88));
// console.log(myArray.fill("L"));
// console.log(myArray.fill(77 , 2 )); // it will print 77 fron location number 2
// console.log(myArray.fill(99 , 1 , 4)); // it will fill 99 from location number 1 till location number 4, excluding number 4 
// * the start range is inclusive and end range is exclusive

// TODO:           filter conxept in array

// var numberArray = [ 11, 22, 33, 44, 55, 66, 77, 88, 99 ];
// var resultArray = numberArray.filter( (numb) => (numb < 55) ) ;
// console.log(resultArray);

// TODO:          slice conxept in array

// var users =  ["Ted" , "Tim" , "Tony" , "Sam" , "Sad" , "Sod"];
// console.log(users.slice(1, 4));

// TODO:         splice conxept in array
// * here second value is how much to count from the position mentioned

// users.splice(1, 3 , "HI"); // here 1 is the starting point and 3 is the range
// console.log(users);
// users.splice(1, 2 , "HI", "BYE");  // here starting from position 1 and starting from 1 count 2 and replace them with "HI", "BYE"
// console.log(users);

//TODO:     object conxept
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

//TODO:      object conxept with funtions

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

// TODO: simple for loop

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

// TODO: simpler for each loop used for arrays  (it is more of a method on array) 

// myArray.forEach( (s) => (console.log(s)) );   // this way 
// myArray.forEach( (s) => console.log(s) );     //? or this way totaly same

// TODO: for of loop used for array
//? for arrays specially

// const names = ["Youtube", "Facebook", "Instagram", "Netflix", "Amazon" ];
// for (const ironman of names){
//         console.log(ironman);
// }

// TODO: for in loop used for objects
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

// TODO: this keyword returning global object

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

// TODO: new keyword example 

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
// TODO: prototype conxept
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

// TODO: object.create from MDN conxept
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

// TODO: Self Anonymous Executing function or IIFE Immediatly Invoked Function Expression

// (function (){
//     console.log(`Q.>>  your name is Jack Sparrow?`);
//     console.log(`A.>>  Its Captain Jack Sparrow.`);
// }
// )();

// TODO: Lexical Scoping  + a little touch to Closure

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

// TODO:  Closure + Design Decisions of Redux("A JS library for predictable and maintainable global state management") which is Javascript state management library (also in React and Angular)

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

// TODO: Bind and call concept in closure    
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

// TODO:   strings in JavaScript

//? one way
// var string1 = "Jack\'s Black Pearl from string 1";       // single quotes can be used for strings containing single quotes, double quotes and backslashes, and vice versa.  This is called escaping.
// // console.log(string1);

//? other way 
// var string2 = 'Jack\'s Black Pearl from string 2';    
// // console.log(string2);

// var string3 = `Jack's Black Pearl from string 3`;      // backticks are used for multiline strings and template literals are used for string interpolation and best practice for string manipulation 
// // console.log(string3);

// var name = "Jack";
// var fullName = `My name is Captain ${name}`;
// console.log(fullName);

// console.log(string3.length);
// console.log(string3.charAt(3));
// console.log(string3.endsWith('3'));
// console.log(string3.includes("Pearl"));
// console.log(string3.toLocaleUpperCase());

// TODO:  Replace and ReplaceAll in string  
//*      >>>>>>>>     the one used in 3 idiot movie

// const str = "Do Yahoo people really love Yahoo?";
// // const newstr = str.replace("Yahoo", "Google"); // this will replace first occurrences of "Yahoo" with "Google"
// const newstr = str.replaceAll("Yahoo", "Google"); // this will replace all occurrences of "Yahoo" with "Google"
// console.log(newstr);


// TODO:  Maps in JavaScript
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

//     for (let value of myMaps.values())   // for of loop is used to iterate over the values
//     {
//     console.log(`value is ${value}`);
//     }

// for (const [key, value] of myMaps)   // for of loop is best used to iterate over the key-value pairs for the map , and for of loop is gonna always return key first
//     {
//     console.log(`key is ${key}, and value is ${value}`);
//     }

// myMaps.forEach((key) => console.log(`${key}`));   // this will print all values of the map because forEach loop thinks that we will be doing something with the values not the indexes

// myMaps.forEach((value) => console.log(`${value}`));  // this will also print all values of the map 

// myMaps.forEach((v, k) => console.log(`key is ${k} and, value is ${v}`));  // for each is always gonna return the value first

// myMaps.delete("key2");
// console.log(myMaps);

// TODO:  Destructuring in JavaScript
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
//     name: "Jack",
//     lastName: "Sparrow",
//     role: "Captain",
//     shipName: "Black Pearl",
// }
// console.log(myUser.role);

// const {name, lastName, role, shipName} = myUser; // this is destructuring, it is assigning the values of myUser object to name, lastName, role and shipName //? the name of the variables should be same as the properties in the object
// console.log(shipName);

// TODO:  Spread and REST operators in JavaScript

// var returnMaxValue = Math.max(2,3,4,5,6,7,8,9,10);
// console.log(returnMaxValue);

// var myObj = {};   // an empty object

// Object.assign(myObj, {name: "Jack", lastName: "Sparrow", role: "Captain", shipName: "Black Pearl"});   // this is used to merge two or more objects, here it is assigning the values to myObj object
// console.log(myObj);

//! spread operator
// function addTwoNumbers(a, b) 
// {
//     return a + b;
// }
// console.log(addTwoNumbers(3, 5));

// var numbers = [6, 3];
// console.log(addTwoNumbers(...numbers)); // spread operator is used to pass an array as arguments. This is an example of spread operator. //? The spread operator is used to expand elements of an array or properties of an object into individual arguments.

//! rest operator
// function addMultipleNumbers(...args) // args is an array of all the arguments passed to the function
// {
//     console.log(args); // this will print all the arguments passed to the function as an array. This is an example of rest operator. //? The rest operator is used to capture all the remaining arguments into an array.

//     let sum = 0;
//     for (const iterator of args) 
//         {
//             // sum = sum + iterator;
//             sum += iterator;   // or this is also valid
//         }
//     return sum;
// } 

// console.log(addMultipleNumbers(2, 5, 8, 10));

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

// TODO: Event loop 

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

// TODO: Promises Async and Await

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

// TODO: Promise .any()  and  .race() example

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

// TODO: Logical Assignment Operators

// function cartTotal(value) {
//     value ??= 0; //? Logical Assignment Operator. If value is undefined or null, it will be set to 0.
//     console.log(`Current cart total: $${value}`);
// }
// cartTotal();
// cartTotal(10);

// TODO: Numerical Separators

// var longNumber = 1_23_45_67_890;  //? underscore is used as a numerical separator. it will be ignored by JavaScript while printing.
// console.log(longNumber);

// TODO: Quirky Behaviour of javascript
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



//!..............................................

//   *   TODO:
//   ?   FIXME:
//   !   