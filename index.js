'use strict';

// YOU KNOW WHAT TO DO //

/**
 * identity: Designed to return value.
 * 
 * @param {Any value} values: a data type you are trying to return.
 * @return {Any value}: Returns any given value.
 */
function identity (values) {
    return values;
};
module.exports.identity = identity;

/**
 * typeOf: Designed to take a value and return a string of what datatype is the
 * value.
 * 
 * @param {Any values} datatype: a datatype you are using in the return statement.
 * @return {string} string: a string of the datatype your value is.
 */
function typeOf (dataTypes){
     if(Array.isArray(dataTypes)){
         return "array";
     }else if(dataTypes === null){
         return 'null';
     }else if(typeof dataTypes ==='object'){
         return 'object';
     }else if (typeof dataTypes === 'number'){
         return 'number';
     } else if (typeof dataTypes === 'undefined'){
         return 'undefined';
     }else if (typeof dataTypes === 'boolean'){
         return 'boolean';
     }else if (typeof dataTypes === "function"){
         return 'function';
     }else if (typeof dataTypes === 'string'){
         return 'string';
     }
};
module.exports.typeOf = typeOf;

/**
 * first: Designed to take in an array and a number and returns a given number 
 * of element. Lastly, if the number is not given it'll return the first element. 
 * Also, if an element is not in the array then it'll return an array literal.
 * 
 * @param {Array} array: the array that contains the element
 * @param {Number} number: the number of element we want
 * 
 * @return {array}: return an array literal if elment not in array
 * @return {element}: return first element of the array if number isn't given
 * @return {element}: return the number amount of element in the array. 
 */
function first(array, number){
    let arrayLit = [];
    if(Array.isArray(array) === false || number < 0){
        return arrayLit;
    }else if (number === null || typeof number !== 'number'){
        return array[0];
    }else{
        return array.slice(0, number);
    }
};
module.exports.first = first;

/**
 * last: Designed to take in an array and a number and returns a given number 
 * of the last elements. Lastly, if the number is not given it'll return the 
 * last element. Also, if an element is not in the array then it'll return an 
 * array literal.
 * 
 * @param {Array} array: the array that contains the elements
 * @param {Number} number: the number of element we want
 * 
 * @return {array}: return an array literal  
 * @return {element}: return the last element of the array
 * @return {element}: return the number amount of element in the array. 
 */
function last(array, number){
    let litArr = [];
    if(Array.isArray(array) === false || number < 0){
        return litArr;
    }else if(number > array.length){
        return array;
    }else if (number === null || typeof number !== 'number'){
        return array[array.length - 1];
    }else{
        return array.slice(array.length - number, array.length);
    }
};
module.exports.last = last;

/**
 * indexOf: Designed to check what index does the value first appear in the 
 * array, and if the value is does not exisit in the array, then we'll retrun -1
 * 
 * @param {Array} array: this the array we are checking to see where the value
 * exisit. 
 * @param {Value} value: the value we are trying to find in the array.
 * 
 * @return {index}: we are returning the index where the value we are looking 
 * for in the array 
 */
function indexOf (array, value){
    for(var i = 0; i < array.length; i++){
        if(array[i] === value){
            return i;
        }
    }
        return -1;
}
module.exports.indexOf = indexOf;

/**
 * contains: Designed for checking if the value exisit in the array, and if it
 * does exisit then it will return a boolean statement. 
 * 
 * @param {Array} array: This is the array we are checking to if the value
 * exisit. 
 * @param {Value} value: the value we are trying to find in the array.
 * 
 * @return {Boolean}: true will be return if the value exisit in the array, and  
 * if not then a false will be return.
 */
 function contains (array, value){
    for (var i = 0; i < array.length; i++){
        if(array[i] === value){
            return true;
        }
    }
    return false;
};
module.exports.contains = contains;

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;

/**
 * unique: Designed to check for duplicates in the orginal array, and return a 
 * new array of the same element with no duplicates.
 * 
 * @param {Array} array: the array we are itterating through to find the 
 * duplicate value.
 * 
 * @return {Array}: we are returning the new array with no duplicates.
 */
function unique(array){
var result = [];
each(array, function(element, index, collection){
    if(indexOf(result, element) === -1){
        result.push(element);
    }
});
return result;
}
module.exports.unique = unique;

/**
 * filter: Designed to test each element in the array to the callback function 
 * given to filter. If it does pass the callback, then return a new array with 
 * the elements that pass the callback function given to filter.
 * 
 * @param {Array} array: the array that contains the values we will us in the 
 * function paramater 
 * @param {function} action: the function we will use to test what values if it 
 * passed .
 * 
 * @return {Array}: an array of the elements that passed the function paramter.
 */
 function filter(array, action){
    let result = [];
    each(array, function(element, index, array){
        if(action(element, index, array) === true){
            result.push(element);
        }
    });
    return result[0];
}
module.exports.filter = filter; 

/**
 * reject:  Designed to test each element in the array to the callback 
 * function given to reject. If it does fail the function, then return a new  
 * array with the elements that failed the callback function given to reject.
 * 
 * @param {Array} array: the array that contains the values we will us to test 
 * in the function paramater 
 * @param {function} action: the function we will use to test what values if it 
 * failed.
 * 
 * @return {Array}: an array of the values that failed the function paramter.
 */
 function reject(array, test){
    var result = filter(array, function(element, index, array){
        return !test(element, index, array);
    });
    return result;
}
 module.exports.reject = reject; 

/**
 * partition: Designed to combine both the return of filter and reject 
 * function into one array with two sub array as the element. The element at 
 * the first element is the one has all of the values that return true from 
 * the callback function and the second element contains all of the values that 
 * return false. 
 *  
 * @param {Array} array: the array that contains the values we will us to test 
 * in the function paramater 
 * @param {function} action: the function we will use to test what values if it 
 * passed and failed.
 * 
 * @return {Array}: one array with two sub array as the element.
 */
function partition(array, test){
 var result = [];
 var filter = filter(array, function(element, index, array){
     return test(element, index, array); 
  });  
 var reject = reject(array, function(element, index, array){
      return test(element, index, array);
  });
  result.push(filter, reject);
  return result;
}
module.exports.partition = partition; 
 
/**
 * map: Designed to apply a function to each element in the orginal array 
 * without chaninging, adding or removing an element in the orginal array. 
 * After that, it'll return a new array with the modified element. 
 * 
 * @param {Array} collect: the array that has element we are applying to the
 * function.
 * @param {function} test: the test that every element runs through in the array
 * 
 * @return {Array}: we are returning a new array with the element that ran 
 * through the function. 
 */
 
 function map(collect, test){
    let result = [];
    each(collect, function(element, index, collection){
        if(typeOf(collection) === 'array'){
            result.push(test(element, index, collection));
        } else{
            result.push(test(element, index, collection));
        }
    });
    return result;
};
module.exports.map = map; 


/**
 * pluck: Designed to take an array of object, and create a new array with the 
 * values from the object as the elements.
 * 
 * @param {Array} array: the array with objects as the element
 * @param {string} property: the key of each element
 * 
 * @return {Array}: an array of the values in each element
 */
 function pluck(array, property){
    return map(array, function(element, index, collection){
        return element[property];
    });
};
module.exports.pluck = pluck; 

/**
 * every: Designed return true if every element in the array passed in the 
 * function parameter. If one element in the array fails then it'll return false.
 * 
 * @param {Array} collect: is the array that contains the element that will be 
 * tested in the function
 * @param {function} test: the function that every element in the array will go 
 * through
 * 
 * @return {Boolean}: return true if every element pass the function and false
 * if every element did not passed then it'll return false
 */
function every (collect, test){
    var result = true;
    if(test !== undefined){
        each(collect, function(element, index, collection){
               if(test(element, index, collection) === false){
                   result = false;
               }
        });
    }else if (!test){
        each(collect, function(element, index, collection){
            if(Boolean(element) === false){
                result = false;
            }
        });
    }
    return result;
}
module.exports.every = every; 

/**
 * some: Designed to return a true or false if at leat one element in the array 
 * passes the callback function. If all the element in the array fails then 
 * it'll return false.
 * 
 * @param {Array} collect: is the array that contains the element that will be 
 * tested in the function
 * @param {function} test: the function that every element in the array will go 
 * through
 * 
 * @return {Boolean}: return true if some element pass the function and false
 * if none of the element did not passed then it'll return false
 */
function some(collect, test){
    var result = false;
    if (test !== undefined){
        each(collect, (element, index, collection) =>{
            if(test(element, index, collect)){
                result = true;
            }
        });
    }else{
        each(collect, function(element, index, collection){
            if(Boolean(element) === true){
                result = true;
            }
        });
    }
    console.log(result);
    return result;
}
module.exports.some = some;

/**
 * reduce: Designed to use a callback function on each element in the array then 
 * boils down into a one element in the array.
 * 
 * @param {array} array: the array we itterate through to acces the element
 * @param {function} test: the function that each elment goes through to turn
 * the each element into one elment 
 * @seed {Any datatype} seed: A variable that is assigned to any value that is 
 * given, and if it is not given then it'll be the first element of the array.
 * 
 * @return {Array}: returns a new array with one element of each of the element 
 * in the old array.
 */
function reduce(array, test, seed){
    each(array, (element, index, collection) => {
        if(seed === undefined){
            seed = element;
        }else{
            seed = test(seed, element, index);
        }
    });
    return seed;
}
module.exports.reduce = reduce;




/**
 * extend: Designed to combine two or more sperate object into one object.
 * 
 * @param {object} obj1: the first object with properties 
 * @param {object} obj2: the second object with properties
 * @param {object} ...obj: an object w properties
 * 
 * @return{object}: All the properties from the argument 
 * inside one new object 
 */
 
 function extend(obj1, obj2, ...obj){
   var result = Object.assign(obj1, obj2, ...obj);
   return result;
 }
module.exports.extend = extend;