class Employ {
  constructor(options) {
    this.rate = options.rate;
    this.grade = options.grade;
    this.side = options.side;
    this.parallel = options.parallel;
  }
}

class ItCompany {
  employees = [];
  hireEmployees() {
    const devs = randomGeneration(1, 30);

    for (let i = 0; i < devs; i++) {
      const options = {
        rate: randomGeneration(2, 30),
        grade: gradeGenetation(),
        side: sideGenetation(),
        parallel: randomBoolean(),
      };
      const employ = new Employ(options);
      this.employees.push(employ);
    }
    console.log("employees", this.employees);
  }
}

const randomGeneration = (max, min) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

const randomBoolean = () => {return Math.random() < 0.5;};

const rateGeneration = () => {
    
}

const gradeGenetation = () => {
  const grades = ["Junior", "Middle", "Signor"];
  const randomGrade = randomGeneration(3, 0);
  return grades[randomGrade];
};

const sideGenetation = () => {
  const sides = ["Back", "Front"];
  const randomSide = randomGeneration(2, 0);
  return sides[randomSide];
};

const itCompany = new ItCompany();
itCompany.hireEmployees();

// console.log("itCompany :>> ", itCompany.emloyees);
