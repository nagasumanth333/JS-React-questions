
// 1. setInterval using SetTimeout

function customSetInterval(callback, delay) {
  let timerId;

  function repeat() {
    callback();
    timerId = setTimeout(repeat, delay);
  }

  timerId = setTimeout(repeat, delay);

  return {
    clearInterval: function() {
      clearTimeout(timerId);
    }
  };
}

function sayHello() {
  console.log("Hello!");
}

const myInterval = customSetInterval(sayHello, 1000);

setTimeout(() => {
  myInterval.clearInterval();
}, 5000);



// 2. setTimeout using SetInterval

function customSetTimeout(callback, delay) {
  const intervalId = setInterval(() => {
    clearInterval(intervalId); // Clear the interval immediately
    callback();
  }, delay);
}

function sayHello() {
  console.log("Hello!!!");
}

// customSetTimeout(sayHello, 2000); // Calls `sayHello` after a delay of 2000 milliseconds (2 seconds)



//3. SetTimeout Polyfill

// The window.requestIdleCallback() method queues a function to be called during a browser's 
// idle periods. This enables developers to perform background and low priority work on 
// the main event loop, without impacting latency-critical events such as animation and 
// input response

let createSetTimeout = function(){
    let id = 1;
    let map ={};

    function customSetTimeout(cb, delay){
        id++;
        map[id] = true;
        let start = new Date().getTime();

        function triggerCb(){
                if(!map[id])
                    return;
            let now = new Date().getTime();
            if(now - start > delay){
                cb();
            }else{
                requestIdleCallback(triggerCb);
            }
        }

        triggerCb();
        return id;
    }

    function customClearTimeout(id){

        delete map[id];
    }
    return {customSetTimeout, customClearTimeout}

}

const {customSetTimeout, customClearTimeout} = createSetTimeout();

customSetTimeout(() => {
    console.log("hello");
}, 2000);