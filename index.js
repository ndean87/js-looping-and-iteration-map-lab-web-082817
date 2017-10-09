// Code your solution in this file.


function lowerCaseDrivers(drivers) {
  let smallDrivers = drivers.map(function(driver){
    return driver.toLowerCase();
  })
  return smallDrivers;
}

function nameToAttributes(drivers){
  return drivers.map(function(driver) {
    let name = driver.split(" ")
    return {firstName: name[0], lastName: name[1]}
  })
}

function attributesToPhrase(drivers){
  return drivers.map(function(driver) {
    return `${driver.name} is from ${driver.hometown}`
  })
}

// attributesToPhrase - this function takes an array of drivers as JavaScript objects and returns a string saying "<NAME OF DRIVER> is from hometown" for each JavaScript object in the array.
