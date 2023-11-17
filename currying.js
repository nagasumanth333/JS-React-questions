
    // 3. add(2)(3)(1)(4)(5)()

    function add(a){
        return function(b){
            if(b)
                return add(a + b);
            else
                return a;
        }
    }

    console.log(add(2)(3)(1)(4)(5)());



    // 4. add(1,2..n)(5,6…n)…(n)()

    // ***line 66, empty array and object are also converted to true;

    function add(...args){
        let a = args.reduce((acc, val) => {
            return acc + val;
        }, 0);

        return function(...newArgs){
            let b = newArgs.reduce((acc, val) => {
                return acc + val;
            }, 0);
            if(b){
                return add(a + b);
            }else{
                return a;
            }

        }
    }

    console.log(add(1,2)(3,4)());


    // 5. Partial appliaction example - 

    function sum(a) {
        return (b, c) => {
            return a + b + c
        }
    }

    let x = sum(10);
    x(1,2);
    x(20,30);
    console.log(x(40,50))
    // OR
    sum(10)(1,2);
    sum(10)(20,30);
    console.log(sum(10)(40,50))


    // 6. Convert a normal function to a curry function
    //    add(a, b, c) to add(a)(b)(c)


    function add(a, b, c){
        return a + b + c;
    }

    // arrow functions and normal functions have a length property which indicate
    // the no of parameters in the function definition,
    // but does not include ...rest


    function curry(func){
        return function curriedFunc(...args){
            if(args.length >= func.length){
                return func.apply(this, args);
            }else{
                return function(...newArgs){
                    return curriedFunc.apply(this, [...args, ...newArgs]);
                }
            }
        }
    }

    let result = curry(add);

    console.log(result(1)(2, 3));
    

    console.log(result(1)(2)(3));