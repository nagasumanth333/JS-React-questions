
// Memoize function



function memoize(func){

    let data = {};

    return function(...args){
        const key = JSON.stringify(args);
        // console.log(key);
        if(!data[key])
            data[key] = func(...args);

        return data[key];
    }

}


let memoizedFunction = memoize(multiply)


function multiply(num1, num2){

    for(let i = 0; i < 100000; i++){}
    
    return num1 * num2;
}

console.time("start");
console.log(memoizedFunction(2, 3));
console.timeEnd("start");

console.time("start");
console.log(memoizedFunction(2, 3));
console.timeEnd("start");



// Flatten an Object


function flattenObject(obj, parent) {
    const finalObj = {}
    const generateFlatObjects = (obj, parent) => {
        for (let key in obj) {
            const newParent = parent+key
            const value = obj[key]
            if(typeof value === 'object') {
                generateFlatObjects(value, newParent+".")
            } else {
                finalObj[newParent] = value
            }
        }
    }
    generateFlatObjects(obj, parent)
    return finalObj
}

const obj = {
    A: "12",
    B: 23,
    C: {
      P: 23,
      O: {
         L: 56
      },
      Q: [1, 2]
     }   
  };

console.log(flattenObject(obj, ""));



// Flatten the array


let arr = [
    [1, 2],
    [3, 4, 5],
    [6, 7],
    [8, 9, 10]
];

let result = [];

function flatten(arr){
    arr.forEach(element => {
        if(Array.isArray(element))
            flatten(element);
        else{
            result.push(element);
        }
        
    });
    
    
}

flatten(arr);

console.log(result);


// LRU Cache


class LRUCache {

    constructor(cap){
        this.capacity = cap;
        this.map = new Map();
    }

    get(key){
        if(this.map.has(key)){
            const val = this.map.get(key);
            this.map.delete(key);
            this.map.set(key, val);
            return val;
        }else{
            return -1;
        }
    }

    put(key, val){
        if(this.get(key) === -1){
            if(this.map.size == this.capacity){
                for(let entry of this.map){
                    this.map.delete(entry[0]);
                    break;
                }
            }
        }

        this.map.set(key, val);
    }
}


// custom deep-copy


function deepCopy(obj) {
  if (obj === null || typeof obj !== 'object') {
    if (typeof obj === 'function') {
      return new Function('return ' + obj.toString())();
    }
    return obj;
  }

  if (obj instanceof Date) {
    return new Date(obj);
  }

  if (obj instanceof RegExp) {
    return new RegExp(obj);
  }

  const copy = Array.isArray(obj) ? [] : {};

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      copy[key] = deepCopy(obj[key]);
    }
  }

  return copy;
}