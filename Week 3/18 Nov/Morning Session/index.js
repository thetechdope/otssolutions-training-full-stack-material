// creating promise and comparing with it's synchronous counterpart

// function evenOrOdd(number){
//     if(number%2==0){
//         return 'even'
//     }else{
//         return 'odd'
//     }
// }

// function checkEvenAsync(number){
//     return new Promise((resolve, reject)=>{
//     if(number%2==0){
//         resolve('even')
//     }else{
//         new throw('This is an odd number.')
//     }
// })
// }


// console.log(evenOrOdd(4))
// console.log(5)
// console.log(5)
// console.log(5)
// console.log(5)

// checkEvenAsync(4).then((x)=>console.log(x)).catch(err=>console.log(err))

// console.log(5)
// console.log(5)
// console.log(5)
// console.log(5)


// Object.create
// function HARKPARENT (){
//     this.height = 'short heighted'
//     this.eyeColor = 'Blue'
// }

// undefined
// HARKPARENT.prototype.gene = 'PARENT"S GENE'
// 'PARENT"S GENE'
// parent = new HARKPARENT()
// HARKPARENT {height: 'short heighted', eyeColor: 'Blue'}eyeColor: "Blue"height: "short heighted"[[Prototype]]: Objectgene: "PARENT\"S GENE"constructor: ƒ HARKPARENT()[[Prototype]]: Object
// c = Object.create(parent)
// HARKPARENT {}[[Prototype]]: HARKPARENT
// d = Object.create(parent)
// HARKPARENT {}
// c.name = 'Harshit'
// 'Harshit'
// d.name = 'Harshita'
// 'Harshita'
// c
// HARKPARENT {name: 'Harshit'}name: "Harshit"[[Prototype]]: HARKPARENTeyeColor: "Blue"height: "short heighted"[[Prototype]]: Object
// d
// HARKPARENT {name: 'Harshita'}name: "Harshita"[[Prototype]]: HARKPARENTeyeColor: "Blue"height: "short heighted"[[Prototype]]: Object
// c.gene
// 'PARENT"S GENE'
// c.eyeColor
// 'Blue'
// c.height
// 'short heighted'

// function currying

// function outer (){
//     var result = 0
//     return function sum(x){
//         if(x){
//              result = result + x
//              return sum
//         }else{
//             return result
//         }
//     }
// }

// const sum = outer()

// const result = sum(2)(3)()


// task 1
// call once function
// desc: create a function which can't be called more than once

// function sum (){
// }
// sum()
// sum() // new throw()

//task 2

// const arr = [[1,2], [2, 4, [5, 6, [2, 4]]], 8, 9]
// create a fucntion to flat the array => [1,2,2,4,5,6,2,4,8,9]

// task 3
// a = [{name:'amit'}, {name: 'Akshay'}]
// b = [{name: 'abcd'},{name:'abdc'}, {name:'kjdshck}, {name: 'Akshay'}, {name: 'akshay'}, {name:'AMit'}]
// result = [{name: 'Akshay'}, {name: 'akshay'}, {name:'AMit'}] 

