// TODO:  Classes and module exports in JavaScript

class User{
    constructor(name, email){
        this.name = name;
        this.email = email;
    }
    #courseList = [];      //?  with the # symbol to indicate private property
    getInfo(){
        return `Name: ${this.name}, Email: ${this.email}`;
    }
    enrollCourse(name)       // Setter for courseList, here some parameter is usually required
    {
        this.#courseList.push(name);
    }
    getCourseList()          // Getter for courseList, usually return something
    {
        return this.#courseList;
    }

}

// let User1 = new User('John Wick', 'mr.wick@gmail.com');
// console.log(User1);

//* Exports User class
module.exports = User;

var User2 = new User('John Cena', 'john.cena@gmail.com');
console.log(User2.getInfo());
User2.enrollCourse('C++');
User2.enrollCourse('C#');
User2.enrollCourse('Python');
console.log(User2.getCourseList());
console.log(User2.courseList);        // Accessing private property directly is not allowed, if "courseList" was not a private property this will work fine. just like the above line.




//!..............................................

//   *   TODO:
//   ?   FIXME:
//   !   