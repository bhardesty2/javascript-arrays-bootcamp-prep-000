var chocolateBars = ['snickers', 'hundred grand', 'kit kat', 'skittles']

function addElementToBeginningOfArray(array, element){
  return [element, ...array];
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element);
  return array;
}

function addElementToEndOfArray(array, element){
  return [...array, element];
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element);
  return array;
}

function removeElementFromBeginningOfArray(array){
  return array.slice(1);
}

function removeElementFromEndOfArray(array){
  return array.slice(0, array.length -1);
}

function accessElementInArray(array, index){
  return array[index];
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element);
  return array;
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element);
  return array;
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift()
  array
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop()
  return array
}
