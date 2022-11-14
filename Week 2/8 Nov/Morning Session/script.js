// 'use strict';

//   // let num = 3

//   // //Calling/Invoking the function
//   // const a= multiplyBy2(3)
//   // console.log(a)

//   // // Function Declaration:
//   // function multiplyBy2(value){
//   //   let result = 2*value
//   //   return result
//   // }

//   // //function expression
//   // const multiplyBy3=(value)=>{
//   //   let result = 3* value
//   //   console.log(result)
//   //   return result
//   // }
//   // multiplyBy3(4)

//   const sumArrow=(value)=> console.log(value)

//   sumArrow(9)

//   // let hello=(value)=>{
//   //   let result = 'hello' + value
//   //   console.log(result)
//   //   return result
//   // }

//   // hello('sakshi')

//   let sum=(function (a,b){
//     alert("hello")
//     return a+b
//   })(10,2)
//   console.log(sum)

///Scope:
var d =90

function a(){
  console.log(d)
  var b=10
c()
  function c(){
    console.log(b)

  }
}


a()
console.log(b)