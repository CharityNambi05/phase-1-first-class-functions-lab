// Code your solution in this file!

const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
};


const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


const createFareMultiplier = function(multiplier) {
    return function(fare) {
   
        return fare * multiplier;
    };
};


const fareDoubler = createFareMultiplier(2);


const fareTripler = createFareMultiplier(3);


const selectDifferentDrivers = function(arrayOfDrivers, selectingFunction) {
    return selectingFunction(arrayOfDrivers);
};

const drivers = ['Alice', 'Bob', 'Charlie', 'David'];

console.log(returnFirstTwoDrivers(drivers)); // ['Alice', 'Bob']
console.log(returnLastTwoDrivers(drivers)); // ['Charlie', 'David']
console.log(selectingDrivers[0](drivers)); // ['Alice', 'Bob']
console.log(selectingDrivers[1](drivers)); // ['Charlie', 'David']
console.log(fareDoubler(10)); // 20
console.log(fareTripler(10)); // 30
console.log(selectDifferentDrivers(drivers, returnFirstTwoDrivers)); // ['Alice', 'Bob']
console.log(selectDifferentDrivers(drivers, returnLastTwoDrivers)); // ['Charlie', 'David']
