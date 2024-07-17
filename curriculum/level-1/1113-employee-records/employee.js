function Employee(name, jobTitle, salary, status) {
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

let employee1 = new Employee("Django", "boss", "2 million/year", "full time");
employee1.printEmployeeForm();

let employee2 = new Employee(
  "Prince",
  "The Artist",
  "2 thousand/month",
  "part time"
);
employee2.printEmployeeForm();

let employee3 = new Employee(
  "Shrek",
  "Forest Ogre",
  "20 dollars/hr",
  "full time"
);
employee3.printEmployeeForm();
