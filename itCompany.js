class Employ {
  constructor() {
    this.rate;
    this.grade;
    this.side;
    this.tasks = [];
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
  constructor() {
    // this.description;
    // this.side;
    // this.estimate;
    this.projectSettings = [];
  }
  createProject() {
    const numberOfTasks = randomGeneration(1, 10);
    for (let i = 1; i < numberOfTasks; i++) {
      const task = {
        description: `Task ${i}`,
        side: sideGenetation(),
        estimate: randomGeneration(1, 30),
      };

      this.projectSettings.push(task);
    }
    // console.log(this.projectSettings);
    return this.projectSettings;
  }
}

class ItCompany {
  employees = [];
  hireEmployees() {
    const devs = randomGeneration(1, 10);
    for (let i = 0; i < devs; i++) {
      const employ = new Employ();
      this.employees.push(employ.createEmploy());
    }
  }

  calculateProjectImplementation(project) {
    
    console.log("employees :>> ", this.employees);
    const assignTask = project.projectSettings.map((task) => {
      console.log('task :>> ', task);
      return this.employees.find((employ) => {
        if (employ.tasks.length === 0) {
          employ.tasks.push(task);
          return employ.side === task.side;
        }
      });
      // console.log("findedEmploy :>> ", findedEmploys);
    });
    console.log("assignTask :>> ", assignTask);
    
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
const project = new Customer();
project.createProject();
const resultOfProjectImplementation =
  itCompany.calculateProjectImplementation(project);
// console.log("itCompany :>> ", itCompany.emloyees);
