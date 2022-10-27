class worker {
    constructor(options) {
    this.name = options.name
    this.surname = options.surname
    this.rate = options.rate
    this.days = options.days
    
    }
      getSalary(){
        return this.rate * this.days
      } 
  
      get name() {
        return this.name;
      }
      get surname() {
        return this.surname;
      }
      get rate() {
        return this.rate;
      }
      get days() {
        return this.days;
      }
      
      set name(value) {
        this.name = value;
      }

      set surname(value) {
        this.surname = value;
      }

      set rate(value) {
        this.rate = value;
      }

       set days(value) {
        this.days = value;
      }
}



class BackDev extends worker {


}

class FrontDev extends worker {


}


const user = new worker ( {
    name: 'Max',
    surname: 'Popov',
    rate: 1000,
    days: 30,

})

console.log(user.getSalary);