'use strict'

console.log('hello world')

// min/max of hourly customers
//avg cookie per customer
//
//write a function to generate a random number of customers per hour
//caculate and store (array) simulated cookies purchased per hour  at each location using avg cookies purchased and random number of customers generated
//store the results for each location in a separate array, as a property of the location object that reps location
//display the values of each array as an unordered list in the browser


const seattle = {
    location : 'Seattle',
    minCust: 23,
    maxCust: 65,
    avg: 6.3,
    randCustPH: function (min, max) {
      min + Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1) + min); 
    },
    dailySales: function() {
      let totalSales = 0
      for (let i = 0; i < 14; i++ ) {
        let randCust = this.randCustPH(this.minCust, this.maxCust)
        let hCookieTotal = randCust*this.avg
        hCookieTotal = Math.round(hCookieTotal)
        this.dailySalesArray.push(hCookieTotal)
        console.log(this.dailySalesArray)
        totalSales = (hCookieTotal + totalSales)
      }
      console.log(totalSales)
  },
  dailySalesArray:[]
}
seattle.dailySales()

const tokyo = {
  location : 'Dubai',
  minCust: 3,
  maxCust: 24,
  avg: 1.2,
  randCustPH: function (min, max) {
    min + Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); 
  },
  dailySales: function() {
    let totalSales = 0
    for (let i = 0; i < 14; i++ ) {
      let randCust = this.randCustPH(this.minCust, this.maxCust)
      let hCookieTotal = randCust*this.avg
      hCookieTotal = Math.round(hCookieTotal)
      this.dailySalesArray.push(hCookieTotal)
      console.log(this.dailySalesArray)
      totalSales = (hCookieTotal + totalSales)
    }
    console.log(totalSales)
},
dailySalesArray:[]
}
tokyo.dailySales()

const dubai = {
  location : 'Dubai',
  minCust: 11,
  maxCust: 38,
  avg: 3.7,
  randCustPH: function (min, max) {
    min + Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); 
  },
  dailySales: function() {
    let totalSales = 0
    for (let i = 0; i < 14; i++ ) {
      let randCust = this.randCustPH(this.minCust, this.maxCust)
      let hCookieTotal = randCust*this.avg
      hCookieTotal = Math.round(hCookieTotal)
      this.dailySalesArray.push(hCookieTotal)
      console.log(this.dailySalesArray)
      totalSales = (hCookieTotal + totalSales)
    }
    console.log(totalSales)
},
dailySalesArray:[]
}
dubai.dailySales()

const paris = {
  location : 'Paris',
  minCust: 20,
  maxCust: 38,
  avg: 2.3,
  randCustPH: function (min, max) {
    min + Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); 
  },
  dailySales: function() {
    let totalSales = 0
    for (let i = 0; i < 14; i++ ) {
      let randCust = this.randCustPH(this.minCust, this.maxCust)
      let hCookieTotal = randCust*this.avg
      hCookieTotal = Math.round(hCookieTotal)
      this.dailySalesArray.push(hCookieTotal)
      console.log(this.dailySalesArray)
      totalSales = (hCookieTotal + totalSales)
    }
    console.log(totalSales)
},
dailySalesArray:[]
}
paris.dailySales()

const lima = {
  location : 'Lima',
  minCust: 2,
  maxCust: 16,
  avg: 4.6,
  randCustPH: function (min, max) {
    min + Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); 
  },
  dailySales: function() {
    let totalSales = 0
    for (let i = 0; i < 14; i++ ) {
      let randCust = this.randCustPH(this.minCust, this.maxCust)
      let hCookieTotal = randCust*this.avg
      hCookieTotal = Math.round(hCookieTotal)
      this.dailySalesArray.push(hCookieTotal)
      console.log(this.dailySalesArray)
      totalSales = (hCookieTotal + totalSales)
    }
    console.log(totalSales)
},
dailySalesArray:[]
}
lima.dailySales()






// const allLocations = [seattle, tokyo, dubai, paris, lima];
// function getAllLocations() {
//   for (let i = 0; i < allLocations.length; i++) {
//     let currentLocation = allLocations[i];
//     currentLocation.getLocation();
//     console.log(`${currentLocation.name} is ${currentlocation.}`)
//   }
// }
