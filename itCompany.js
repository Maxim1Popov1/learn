class Employ {
  constructor() {
    this.rate;
    this.grade;
    this.side;
    // this.parallel = options.parallel;
  }
  createEmploy() {
    const devGrade = gradeGenetation();
    let devRate = 0;

    if (devGrade == "Junior") {
      devRate = 12;
    } else if (devGrade == "Middle") {
      devRate = 22;
    } else {
      devRate = 29;
    }

    this.rate = devRate;
    this.grade = devGrade;
    this.side = sideGenetation();

    return this;
  }
}

class Customer {
  constructor(options) {
    this.description = options.description;
    this.side = options.side;
    this.estimate = options.estimate;
  }
  createProject() {}
}

class ItCompany {
  employees = [];
  hireEmployees() {
    const devs = randomGeneration(1, 30);
    for (let i = 0; i < devs; i++) {
      const employ = new Employ();
      this.employees.push(employ.createEmploy());
    }
  }
}

const randomGeneration = (max, min) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

const randomBoolean = () => {
  return Math.random() < 0.5;
};

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
