// Node.js is a non-blocking I/O model.
// Blocking Code : A code that blocks the execution of the code.
// Non-Blocking Code : A code that does not block the execution of the code.

// How does non-blocking code work in Node.js? : 
// Node.js uses the libUV library to handle the event loop.

// Higher Order Function : A function that can take another function as an argument or return a function from itself is called a higher order function.

/*
setTimeout(() => {
    console.log("Hello World");
}, 1000); // 1000ms : 1 second
*/

// It will run for loop for 1000 times and then print "Hello Kanav" because setTimeout is a higher order function and can be blocking or non-blocking.

/*
for (let i = 0; i < 1000; i++) {
    // console.log("Hello Kanav");
    console.log(i);
}
*/

// libUV : is a library that is used to handle the event loop in Node.js.

{
  var a = 5;
}

console.log(a);
