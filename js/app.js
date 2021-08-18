'use strict'

console.log('hello world')

const locationsTable = document.getElementById('locations');



function Location(city, minCust, maxCust, avgPH, ) {
  this.city = city;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this. avgPC = avgPC;
  this.hourlySalesArray = [];

  Location.allLocations.push(this);
}
Location.allLocations = [];

Location.prototype.randomNumberOfCustomers = function() {
  return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
}

Location.prototyppe.fillHourlySalesArray = function () {
  for (let i = 0; i < hoursOfOperation.length; i++ ) {
  let salesPerHour = this.randomNumberOfCustomers() * this.avgPC;
  this.hourlySalesArray.push(Math.ceil(salesPerHour));
  }
}

const seattle = new Location('Seattle', 23, 65, 6.3);
const tokyo = new Location();
const dubai = new Location();
const paris = new Location();
const lima = new Location();

function fillHourlySalesArrayAllLocations() {
  for (let i = 0; i < Location.allLocations.length; i++) {
    const currentLocation = Location.allLocations[i];
     currentLocation.fillHourlySalesArray();
  }
}

fillHourlySalesArrayAllLocations();

function _makeElement(tag, parent, text) {
  const element = document.createElement(tag);
  parent.appendChild(element);
  if (text) {
    element.textContent = text;
  }
  return element;
}

Location.prototype.renderSingLocation = function () {
  let total = 0; 
  const rowElem = document.createElement('tr');
  body.appendChild(rowElem);
  const thElem = _makeElement('th', rowElem, this.name);
  for (let i = 0; i < hoursOfOperation.length; i ++){
    let cookiesThisHour = this.hourlySalesArray[i];
    total += cookiesThisHour;
    _makeElement('td', rowElem, cookiesThisHour);
  }
  _makeElement('td', rowElem, total)
}

function renderAllLocations() {
  let tbodyElem = _makeElement('tbody', locationsTable, null);
  for (let i = 0; i < Location.allLocations.length; i ++) {
    Location.allLocations[i].renderSingLocation(tbodyElem);
    }
}


  //   const articleElem = _makeElement('article', locationsDiv, null);
  //   _makeElement('h3', articleElem, location.location);
  //   const ulElem = _makeElement('ul', articleElem, null);
  //   for (let i = 0; i < hoursOfOperation.length; i ++){
  //     const text = `${hoursOfOperation[i]}: ${location.finalArray[i]} cookies`;
  //     total += location.finalArray[i];
  //    _makeElement('li', ulElem, text);
  //   }
  //   let totalString = 'Total: '+ total + ' cookies';
  //   _makeElement('li', ulElem, totalString);


  

  //to generate random numbers of customers
  
  
  
  
  
  
  
  
  
  // min/max of hourly customers
//avg cookie per customer
//
//write a function to generate a random number of customers per hour
//caculate and store (array) simulated cookies purchased per hour  at each location using avg cookies purchased and random number of customers generated
//store the results for each location in a separate array, as a property of the location object that reps location
//display the values of each array as an unordered list in the browser

// const locationsDiv = document.getElementById('locations');

// const hoursOfOperation = ['6am', '7am', '8am', '9am', '10am', '11am','12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm' ];


// const seattle = {
//     location : 'Seattle',
//     minCust: 23,
//     maxCust: 65,
//     avg: 6.3,
//     finalArray: [],
//     randCustPH: function () {
//       return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust); 
//     },
//     hourlySales: function() {
//       for (let i = 0; i < hoursOfOperation.length; i++ ) {
//         let salesPerHour = this.randCustPH() * this.avg;
//         this.finalArray.push(Math.ceil(salesPerHour));
//     }
//   }
// }

// const tokyo = {
//   location : 'Tokyo',
//   minCust: 3,
//   maxCust: 24,
//   avg: 1.2,
//   finalArray: [],
//   randCustPH: function () {
//     return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust); 
//   },
//   hourlySales: function() {
//     for (let i = 0; i < hoursOfOperation.length; i++ ) {
//       let salesPerHour = this.randCustPH() * this.avg;
//       this.finalArray.push(Math.ceil(salesPerHour));
//     }
//   }
// }

// const dubai = {
//   location : 'Dubai',
//   minCust: 11,
//   maxCust: 38,
//   avg: 3.7,
//   finalArray: [],
//   randCustPH: function () {
//     return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust); 
//   },
//   hourlySales: function() {
//     for (let i = 0; i < hoursOfOperation.length; i++ ) {
//       let salesPerHour = this.randCustPH() * this.avg;
//       this.finalArray.push(Math.ceil(salesPerHour));
//     }
//   }
// }
 
// const paris = {
//   location : 'Paris',
//   minCust: 20,
//   maxCust: 38,
//   avg: 2.3,
//   finalArray: [],
//   randCustPH: function () {
//     return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust); 
//   },
//   hourlySales: function() {
//     for (let i = 0; i < hoursOfOperation.length; i++ ) {
//       let salesPerHour = this.randCustPH() * this.avg;
//       this.finalArray.push(Math.ceil(salesPerHour));
//     }
//   }
// }

// const lima = {
//   location : 'Lima',
//   minCust: 2,
//   maxCust: 16,
//   avg: 4.6,
//   finalArray: [],
//   randCustPH: function () {
//     return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust); 
//   },
//   hourlySales: function() {
//     for (let i = 0; i < hoursOfOperation.length; i++ ) {
//       let salesPerHour = this.randCustPH() * this.avg;
//       this.finalArray.push(Math.ceil(salesPerHour));
//     }
//   }
// }

// function _makeElement(tag, parent, text){
//   const element = document.createElement(tag);
//   parent.appendChild(element);
//   if(text) {
//     element.textContent = text;
//   }
//   return element;
// }


// function renderLocation(location) {
//   let total = 0; 
//   const articleElem = _makeElement('article', locationsDiv, null);
//   _makeElement('h3', articleElem, location.location);
//   const ulElem = _makeElement('ul', articleElem, null);
//   for (let i = 0; i < hoursOfOperation.length; i ++){
//     const text = `${hoursOfOperation[i]}: ${location.finalArray[i]} cookies`;
//     total += location.finalArray[i];
//    _makeElement('li', ulElem, text);
//   }
//   let totalString = 'Total: '+ total + ' cookies';
//   _makeElement('li', ulElem, totalString);

// }
// const locationsArray = [seattle, tokyo, dubai, paris, lima];
// function renderAllLocations() {
//   for (let i = 0; i < locationsArray.length; i ++) {
//     const currentLocation = locationsArray[i];
//     currentLocation.hourlySales()
//     renderLocation(currentLocation);
//   }
// }
// renderAllLocations();






// const allLocations = [seattle, tokyo, dubai, paris, lima];
// function getAllLocations() {
//   for (let i = 0; i < allLocations.length; i++) {
//     let currentLocation = allLocations[i];
//     currentLocation.getLocation();
//     console.log(`${currentLocation.name} is ${currentlocation.}`)
//   }
// }
