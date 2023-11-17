
// Polyfill for Promise.allSettled

const promises = [ //new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")), 4000)),
new Promise((resolve, reject) => setTimeout(() => resolve(1), 2000)),
new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
];


if(!Promise.myAllSettled){

Promise.myAllSettled = function(promises){

const resolveHandler = (response) => {
return {status: 'fulfilled', value: response}
};

const rejectHandler = (error) => {
return  {status: 'rejected', reason: error}
};

const newPromises = promises.map((p) => {
return  Promise.resolve(p)
.then(resolveHandler, rejectHandler);
});

//even if a promise is rejected, it will go into rejectHandler and also if any value in promises array is not a promise,
//   then Promise.resolve() will convert in to a promise.

return Promise.all(newPromises)

}
}

Promise.myAllSettled(promises)
.then((value) => console.log(value));


// Promise.myAll


if(!Promise.myAll){

    let results = [];
    let completed = 0;

    Promise.myAll = function(promises){

        return new Promise((resolve, reject) => {
            promises.forEach((promise, index) => {
                promise.then((value) => {
                    results[index] = value;
                    completed++;

                    if(completed === promises.length)
                        resolve(results);
                })
                .catch((error) => reject(error));
            });
        })
    }
}


Promise.myAll(promises)
.then((value) => console.log(value))
.catch((error) => console.log(error))



// Promise.myRace



if(!Promise.myRace){

    Promise.myRace = function(promises){

        return new Promise((resolve, reject) => {
            promises.forEach((promise) => {
                promise
                .then((value) => resolve(value))
                .catch((error) => reject(error))
            });
        });
    }
}


Promise.myRace(promises)
.then((value) => console.log(value))
.catch((error) => console.log(error))



// Promise.myAny


if(!Promise.myAny){

    let errors = [];
    let count = 0;

    Promise.myAny = function(promises){

        return new Promise((resolve, reject) => {
            promises.forEach((promise, index) => {
                promise
                .then((value) => resolve(value))
                .catch((error) => {
                    errors[index] = error;
                    count++;

                    if(count == promises.length)
                        reject(errors);
                })

            });
        })
    }
}


Promise.myAny(promises)
.then((value) => console.log(value))
.catch((error) => console.log(error))



// Polyfill for Promise

function MyPromise(executor){

    let isFulfilled = false,
        isRejected = false,
        called = false,
        value,
        onResolved,
        onRejected; 

    function resolve(val){
        value = val;
        isFulfilled = true;

        if(typeof onResolved === 'function'){
            onResolved(value);
            called = true;
        }
    }

    function reject(val){
        value = val;
        isRejected = true;

        if(typeof onRejected === 'function'){
            onRejected(value);
            called = true;
        }
    }

    this.then = function(cb){
        onResolved = cb;

        if(isFulfilled && !called){
            onResolved(value);
            called = true;
        }
        return this;
    }

    this.catch = function(cb){
        onRejected = cb;

        if(isRejected && !called){
            onRejected(value);
            called = true;
        }
        return this;
    }

    try{
    executor(resolve, reject);
    }catch(error){
        reject(error)
    }
}


let promise = new MyPromise((resolve, reject) => {
    setTimeout(() => {
        resolve("done");
    }, );
})

promise
.then((val) => console.log(val))
.catch((error) => console.log(error))


Promise.resolve = function(val){
    return new MyPromise((resolve, reject) => {
        resolve(val);
    });
}

Promise.reject = function(val){
    return new MyPromise((resolve, reject) => {
        reject(val);
    });
}