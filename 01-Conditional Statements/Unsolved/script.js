// TODO: Change the values and operators below to test your algorithm meets all conditions
var x = 50;
var expression1 = x < 60;
var expression2 = x > 70;

// TODO: Write Your JavaScript Code Here
if (expression1 && expression2){
    console.log("True ✅ True ✅")
}
else if (expression1){
    console.log("True ✅ False ❌")
}
else if (expression2) {
    console.log("False ❌ True ✅")
}
else {
    console.log("False ❌ False ❌")
}

// Dani is thinking of another way to do this: 
if(expression1) {
    var a = "True ✅";
}
else {
    a ="False ❌"
}
if(expression2) {
    var b = "True ✅";
}
else {
    b ="False ❌"
}

console.log(a + " " + b);

//Roma said there was a third way: 
x = expression1 ? "True ✅" : "False ❌"
y = expression2 ? "True ✅" : "False ❌"

console.log(x + " " + y);