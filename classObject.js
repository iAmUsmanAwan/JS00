//* newer syntax for importing classes from separate files
// import User from "./classes";

const User = require("./classes");    //? require method is used to import classes from separate files

//? create a new user object
const User1 = new User("John Wick", "mr.wick@gmail.com");

//? display user details
// console.log("User Information: ", User1.getInfo() );
//? display the email address directly (without getter method)
// console.log("Direct Email Access:", User1.email);
//? display the user object with all properties and methods
// console.log("User Object:", User1);

//? display user information properties separately like in a vertical format
// const userInfo = User1.getInfo();
// console.log("User Info Properties:");
// for (let prop in userInfo) {
//     console.log(prop + ": " + userInfo[prop]);
// }

User1.enrollCourse("Mongodb");
User1.enrollCourse("Express.js");
User1.enrollCourse("React.js");
User1.enrollCourse("Node.js");

// console.log(User1.getCourseList());  //? display the user's enrolled courses in a array format

var Courses = User1.getCourseList();   // hold the array of courses in a variable "Courses"

//? Simply dumps the values of the array using a simple for each loop.
// Courses.forEach((cs) => {
//     console.log(cs);
// });

//? more sophisticated way to display the user's enrolled courses
console.log(`The user has enrolled in ${Courses.length} courses. And the list of courses are as follow: ${Courses.join(", ")}`);


//!..............................................

//   *   TODO:
//   ?   FIXME:
//   !   