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
    static login()  //? this is a static method, it belongs to the class itself, not to an instance of the class, nor it is inherited by other classes 
    {
        return "User logged in";
    }

}
// let User1 = new User('John Wick', 'mr.wick@gmail.com');
// console.log(User1);

//* Continuing with the above code...
// TODO: Classes and inheritance in JavaScript

class Admin extends User {
    constructor(name, email) {
        super(name, email);
    }
    getAdminInfo() {
        return "I am an admin";
    }
    login()   //? Overriding the login method from the parent class, and it will be called instead of the parent class's login method. when called when called from an instance of the child class, it will call the overridden method.
    {
        return "Admin logged in";
    }
}

//* Exports User class
module.exports = User;

var User2 = new User('John Cena', 'john.cena@gmail.com');
// console.log(User2.getInfo());
User2.enrollCourse('C++');
User2.enrollCourse('C#');
User2.enrollCourse('Python');
// console.log(User2.getCourseList());
// console.log(User2.courseList);        // Accessing private property directly is not allowed, if "courseList" was not a private property this will work fine. just like the above line.

const tom = new Admin("Tom Hanks", "tom.hanks@gmail.com");
console.log(tom.getAdminInfo());
// console.log(tom.login());    //? static method can be accessed directly on the class itself, not on an instance of the class.

console.log(tom.getInfo());
console.log(User.login());     //? static method can only be called directly on the class itself, not on an instance of the class.
console.log(tom.login());      //? Overridden method will be called instead of the parent class's login method. when called from an instance of the child class, it will call the overridden method. 





//!..............................................

//   *   TODO:
//   ?   FIXME:
//   !   