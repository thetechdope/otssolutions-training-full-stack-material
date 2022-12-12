//  'use strict';
// const func= function(){
//   console.log(this)
// }

// const onClick = ()=>{
//   console.log(this)
// }
// const button = document.querySelector('button')
// button.addEventListener('click', onClick)

// func()

// const obj={
//   name:'John',
//   favouriteFood:'pizza',
//   about:function(){
//     console.log(`My name is ${this.name}`)
//   }
// }


// const obj2 = {
//   name:'Matilda',
//   favouriteFood:'burger',

// }

// obj.about.apply(obj2)




// //arrow: lexical scope
// //normal: window
// //method: object that is caling the method
// //for eventlisteners: element to which event is attached

// const promise = new Promise(function(resolve, reject){
//   resolve('Hi')
// })

// console.log(promise, 'promise')

// const arr = ['Sakshi', 'Akshay']

// let obj3={
//   name:'Akshay',
//   city:'Dehradun',
//   getIntro:function(){
//     console.log(`My name is ${this.name}`)
//   }
// }

// // const user1={
// //   name:'Will',
// //   score:3,
// //   increament:function(){
// //     user1.score++
// //   }
// // }

// // const user2={
// //   name:'XYZ',
// //   score:3,
// //   increament:function(){
// //     user1.score++
// //   }
// // }
// // const user3={
// //   name:'ABC',
// //   score:3,
// //   increament:function(){
// //     user1.score++
// //   }
// // }

// //Functional

// // function userCreate(name, score){
// //   const newUser= {}
// //   newUser.score=score;
// //   newUser.name= name;
// //   newUser.increament= function(){
// //     newUser.score++
// //   }

// //   return newUser
// // }

// // const user1 = userCreate('John', 5)
// // const user2 = userCreate('xyz', 5)
// // const user3 = userCreate('John', 5)

// //Prototype Chain

// //

// //create a function{}

// .prop

// function userCreate2(name, score){
//   const newUser =Object.create(userfunctionStore)
//   newUser.score=score;
//   newUser.name= name;
//   return newUser
// }

// const userfunctionStore ={
//   increament:function(){this.score++},
//   login: function(){console.log('User Logged In')}

// }

// //{} ---------> bond -->userFunction store

// const user1 = userCreate2('John', 2)
// const user2 = userCreate2('Tim', 4)

// console.log(user1, 'user1')

// console.log(user1.hasOwnProperty('increament'))

// console.log(user1.login())

// //New Keyword: automate this task

// //
// function userCreate3(name, score){
//   this.score=score;
//   this.name= name;
// }



// userCreate3.prototype

// //never
// userCreate3.prototype.increament = function(){
//   return this.score++
// }

// const newUser4 = new userCreate3('Tom', 6)
// console.log(newUser4, 'user Created')
// console.log(newUser4.increament())
// //{}
// //{}===>this

// //return the created object this

// //Function: 

// //Classes

// class UserCreator{
//   constructor(name, score){
//     this.name = name;
//     this.score= score

//   }

//   increament(){this.score++}
//   logout(){console.log(this.name,'Logged Out')}
// }

// const myUser = new UserCreator('Sakshi', 4)

// console.log(myUser, 'My User')
// myUser.increament()

// myUser.logout()
// //{}
// //this.

const getData = function () {
  fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))

}

// const debouncedFunction = doSomeThing(callBack, delay)

//

const doSomeThing = function (callBack, delay) {
  let timer;
  return function () {
    clearTimeout(timer)
   timer =   setTimeout(() => {
      callBack()
    }, delay)
  }
}

const goodFunction = doSomeThing(getData, 1000)














