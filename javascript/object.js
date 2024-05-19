// single ton  object create is ka ander single ton lgta ha

// object literals


//interviews question
const sym = Symbol("key")

const jsUser = {
    name: "hello world",
    //interviews question
    [sym]: "key",
    "Full name": "Google Chrome",
    age: 20,
    location: "Karachi",
    email: "Microsoft@gamial.com"
}

// console.log(jsUser.name);
// console.log(jsUser["email"]);
// //interviews question
// console.log(jsUser["Full name"]);

// important question interviews
// console.log( jsUser[sym]);

// // change email
// jsUser.email = "youtube@gmail.com";
// console.log(jsUser);

// Object.freeze(jsUser)
// jsUser.location = "Sindh"
// console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello Js object");
}

jsUser.greeting = function(){
    console.log(`Hello Js object, ${this.email}`);
}

console.log(jsUser.greeting());