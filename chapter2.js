console.log("Hello world");
// this is a comment 

/* this is a multline comment
here we csn write anything which will not be read by any of the compiler*/

//Arithmetic operators 

let a = 2;
let b = 4;

// console.log("a = ",a," & b = ",b);
// console.log("a + b =", a+b);
// console.log("a - b =", a-b);
// console.log("a * b =", a*b);
// console.log("a / b =", a/b);
// console.log("a ** b =", a**b);

//Unary Operator 

let vari = 25;



//conditional statements 


// if statement
let age = 25;

if(age>=18){
    console.log("Can vote");
}
if(age<18){
    console.log("You cannot vote");
}



let color ;
let mode = "light";
if(mode === "dark"){
    color = "Black";
}
if(mode === "light"){
    color = "White";
}
console.log(color);


//if- else statement 
 
let mode1 = "dark";
let colour;

if(mode1==="dark"){
    colour = "Black";
}else{
    colour = "White";
}
console.log(colour);

//even - odd check 

let num = 29;

if(num%2===0){
    console.log("Even");
}else{
    console.log("Odd");
}

//turnary operators 

let age1 = 25;

let result = age1>18 ? "adult": "Not adult";
//condition ? true output : false output;
console.log(result);