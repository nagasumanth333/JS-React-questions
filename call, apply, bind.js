
// Bind


let car = {
    name: "Honda",
    color: "white" 
}


function foo(price){
    console.log(this.name + " and " + this.color + " and " + price);
}

Function.prototype.myBind = function(context={}, ...args){
    if(typeof this !== 'function')
        throw new Error("It's not callable");
        
    context.func = this;
    return function(...newArgs){
        return context.func(...args, ...newArgs);
    }
}

foo.myBind(car, "1000000")();



// Call


Function.prototype.myCall = function(context={}, ...args){
    if(typeof this !== 'function')
        throw new Error("It's not callable");
        
    context.func = this;
   return context.func(...args);
}

foo.myCall(car, "1000000");



// Apply


Function.prototype.myApply = function(context={}, args=[]){
    if(typeof this !== 'function')
        throw new Error("It's not callable");
        
    if(!Array.isArray(args))
        console.log("Not an Array");
        
    context.func = this;
    return context.func(...args);
}

foo.myApply(car, ["1000000"]);