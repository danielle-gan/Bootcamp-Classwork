// TODO: Write Your JavaScript Code Here

var students = ["Danielle", "Aidan" , "Abby" ,"Kaytlyn" ,"Xuan"];

//Way 1  for (let i = 0; i < array.length; i++)
for (let student = 0; student <students.length; student++)
{
    console.log("Welcome to class, " + students[student]);
}

//Way 2 (array.forEach(var => {}))
students.forEach(e => {
    console.log("Welcome to class, " + e)
});

//Way 3 for (var... of [array])
for (const student of students) {
    console.log(`Welcome to class, ${student}`)
};