// function outermost (x){
//     var a = 20
//     function outer (){
//         const b = 10
//         console.log(x)

//         function inner(){

//             console.log(b, a, x)
//         }
//         inner()
//     }

//     outer()
// }

// outermost(30)

// function outer (){
//     let b = 10
//     function inner(){
//         console.log(b)
//         b++
//     }
//     return inner
// }

// const innerVarFn = outer()

// innerVarFn()
// innerVarFn()
// innerVarFn()
// innerVarFn()

// Encapsulation

// function outer (){
//     let b = 10
//     function get(){
//         return b
//     }
//     function set(x){
//         // logic to control changing b
//         if(x<0){
//             console.log(`can't assign negative value to b`)
//         }else{
//             b = x
//         }

//     }

//     return {
//         get, set
//     }
// }

// const encObj = outer()

// console.log(encObj.get())
// console.log(encObj.set(-40))
// console.log(encObj.get())
// console.log(encObj.set(60))
// console.log(encObj.get())

//Memoized cube function

// function cube (){
//     let cache = {}
//     return function (x){
//         if(cache[x]){
//             console.log(`alraedy calculated cube of ${x}`)
//             return cache[x]
//         }
//         console.log(`calculating cube of ${x}`)
//         const result = Math.pow(x, 3)
//         cache[x] = result
//         return result
//     }
// }

// const memoizedCube = cube()
// memoizedCube(4) //
// memoizedCube(14)
// memoizedCube(20)
// memoizedCube(2)
// memoizedCube(4) //
// memoizedCube(4) //

// Currying Function

// function outer () {
//     let result = 0;
//     return function sum(x){
//             if(!x){
//                 return result
//             }
//             result = result + x
//             return sum
//     }
// }

// const sum = outer()

// console.log(sum(10)(20)(20)(60)())
