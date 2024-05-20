// ya ak single ton object ha
// const tinder = new Object()


//or ya ak double ton object ha
const tinder = {}
// console.log(tinder);

tinder.id = "Tinder ID"
tinder.name = "Tinder 123"
tinder.loggedIn = "False"

// console.log("HEllo world");

// const regular = {
//     email: "google@gmail.com",
//     name: {
//         name: "Javascript In Depth",
//         FullName: "Next topic in Depth Json"
//     }
// }

// console.log(regular.name);

const obj1 = {1: "a", 2: "c"};
const obj2 = {2: "d", 2: "f"};
const obj4 = {3: "I", 4: "J"};

// const obj3 = Object.assign({}, obj1, obj2, obj4)

// const obj3 = {...obj1, ...obj2, ...obj4};
// console.log(obj3);


const person = {
    firstName: 'John',
    lastName: 'Doe'
};

// values , key
const conArray = Object.entries(person)
console.log(conArray);

// console.log();
