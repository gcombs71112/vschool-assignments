function Employee(name, jobTitle, salary, status = "Full Time") {
  this.name = name;
  this.jobTitle = jobTitle;
  this.salary = salary;
  this.status = status;
  this.printEmployeeForm = function () {
    console.log(
      "Hello my name is " +
      this.name +
      " and I am the " +
      this.jobTitle +
      " I currently earn " +
      this.salary +
      " and I work " +
      this.status
    );
  };
}

let employee1 = new Employee("Django", "boss", "2 million/year");


//console.log(employees)
employee1.printEmployeeForm();


let employee2 = new Employee(
  "Prince",
  "The Artist",
  "2 thousand/month",
);
employee2.status = "Part time"
employee2.printEmployeeForm();

let employee3 = new Employee("Shrek", "Forest Ogre", "20 dollars/hr");
employee3.printEmployeeForm();

const employees = [employee1, employee2, employee3];
console.log(employees)