class Employ {
  constructor() {
    this.rate = employeesGeneration(2, 30);
    // this.grade = options.grade;
  }
//   randomRate() {
//      this.rate = employeesGeneration(2, 30) 
//      console.log('this.rate :>> ', this.rate);
//   }
}
const options = { rate: 0, grade: "midl" };

class ItCompany {
  employees = [];
  hireEmployees() {
    const frontDev = employeesGeneration(1, 15);
    // const backDev = employeesGeneration(1, 15);
    console.log("frontDev :>> ", frontDev);
    // console.log("beckDev :>> ", backDev); 
    for (let i = 0; i < frontDev; i++) {
        this.employees.push(employ);

    }
      console.log("employees", this.employees);
  }
}

const employeesGeneration = (max, min) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

const employ = new Employ();
const itCompany = new ItCompany();
itCompany.hireEmployees();

// console.log("itCompany :>> ", itCompany.emloyees);
