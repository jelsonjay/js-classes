// classes use to create one or more objects
// the 'new' keyword - create a new empty object {}
// it set the value of "this" to be new empty object,
// it call the constructor method
"use strict";
class Staff {
  // setup
  constructor(name, job) {
    //instance the properies
    this.name = name;
    this.job = job;
  }
  getInfo(){
  const div = document.createElement('div')
      div.appendChild(document.createTextNode(`Name: ${this.name}`))
      div.appendChild(document.createTextNode(`Job: ${this.job}`))
      return div;
 }
}
// new subclass extends developer
class Developer extends Staff {
    constructor() {
        super("Steve Job", "Web Developer")
    }
}

// new subclass extends design
class Design extends Staff {
    constructor() {
        super("Julia Robertson", "Design")
    }
}

// new subclass extends tester
class Tester extends Staff {
    constructor() {
        super("Ana Smith ", " Tester")
    }

}

// 
const app = document.querySelector('#app')

// create constructor method
let developer = new Developer();
let tester = new Tester();
let design = new Design();

const data = []
data.push(developer)
data.push(developer)
data.push(developer)
data.push(tester)
data.push(tester)
data.push(design)
data.push(design)
data.push(design)
data.forEach( items => app.appendChild(items.getInfo()))


console.log(developer);
console.log(tester);
console.log(design);
