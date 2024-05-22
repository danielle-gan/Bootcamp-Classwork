// TODO: Write Your JavaScript Code Here

a = 8+3;
b = 11;
b = b.toString();

function evaluate(a, b) {
    if (a === b) {
        var message = "they are equal in type and value";
    }
    if (a == b) {
        message = "they are equal in value";
    }
    else {
        message = "they are not equal"
    }
    
    var message2 = a === b ? "They are equal in type and value" : a == b ? "They are equal in value" : "The values are not equal";
    console.log(message2);
}

evaluate(a, b);