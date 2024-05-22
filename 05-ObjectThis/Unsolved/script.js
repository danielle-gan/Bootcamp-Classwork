// TODO: What is `this` referring to here?
console.log(this);
// this is the window object itself

// TODO: What is `this` referring to here?
function helloThis() {
  console.log('Inside this function, this is ' + this);
}
// still the object window

// TODO: What is `this` referring to here? What will be logged in the console?
// this refers to the age of child
var child = {
  age: 10,
  ageTenYears: function() {
    console.log(this.age + 10);
  }
};

// TODO: What is `this` referring to here? What will be logged in the console?
// "This" refers to the investment within investor. the console will be 5000 * 1.15 = 5750. 
var investor = {
  name: 'Cash Saver',
  investment: {
    initialInvestment: 5000,
    investmentGrowth: function() {
      console.log(this.initialInvestment * 1.15);
    }
  }
};

// TODO: Call the `helloThis` function and the object methods to check results in the console

helloThis();

child.age;
child.ageTenYears();


investor.investment.investmentGrowth();