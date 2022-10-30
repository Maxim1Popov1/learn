class Customer {
  constructor(options) {
    this.side = options.side;
    this.parallel = options.parallel;
    this.timeJob = options.timeJob;
  }
  createProject() {}
}

class Employ {
  constructor(options) {
    this.rate = options.rate;
    this.grade = options.grade; 
  } 
}

class ItCompany {
  emloyees = [];

  hireEmployees() {
    function frontDev(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }

    frontDev(1, 15);

    function beckDev(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }

    beckDev(1, 15);
  }

  calculateProjectImplementation(project) {}
}

const customer = new Customer();
const itCompany = new ItCompany();
itCompany.hireEmployees();
const project = customer.createProject();
const resultOfProjectImplementation =
  itCompany.calculateProjectImplementation(project);
console.log(
  "результат расчета стоймости и времени реализации проекта: ",
  resultOfProjectImplementation
);

// class Worker {
//     constructor(options) {
//     this.name = options.name
//     this.surname = options.surname
//     this.rate = options.rate
//     this.days = options.days

//     }
//       getSalary(){
//         return this.rate * this.days
//       }

//       get name() {
//         return this.name;
//       }
//       get surname() {
//         return this.surname;
//       }
//       get rate() {
//         return this.rate;
//       }
//       get days() {
//         return this.days;
//       }

//       set name(value) {
//         this.name = value;
//       }

//       set surname(value) {
//         this.surname = value;
//       }

//       set rate(value) {
//         this.rate = value;
//       }

//        set days(value) {
//         this.days = value;
//       }
// }

// class BackDev extends Worker {

// }

// class FrontDev extends Worker {

// }

// const user = new Worker ( {
//     name: 'Max',
//     surname: 'Popov',
//     rate: 1000,
//     days: 30,

// })

// console.log(user.getSalary);
