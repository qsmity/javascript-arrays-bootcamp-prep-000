var ingredient1 = "bread"
var ingredient2 = "mild cheese"
var ingredient3 = "sharp cheese"
var ingredient4 =  "butter"
var ingredient5 = "tomato"
var ingredient6 = "garlic"

var chocolateBars = ['snicker', "hundred grand", "kitkat", 'skittles']

var addElementToBeginningOfArray = function (array,element){
 const array2 = array.unshift(element)
 return array 
}

var destructivelyAddElementToBeginningOfArray = function (array, element){
  array.unshift(element)
  return array
}


var addElementToEndOfArray = function (array,element){
 const array2 = array.push(element)
 return array 
}

var destructivelyAddElementToEndOfArray = function (array, element){
  array.push(element)
  return array
}

var accessElementInArray = function(array, index){
  return array[index]
}

console.log(addElementToBeginningOfArray(chocolateBars, "payday"));

console.log(destructivelyAddElementToBeginningOfArray(chocolateBars, "cars"));

console.log(addElementToEndOfArray(chocolateBars,"heathbar"))

console.log(destructivelyAddElementToEndOfArray(chocolateBars,"recesecup"))

console.log(accessElementInArray(chocolateBars, 2))