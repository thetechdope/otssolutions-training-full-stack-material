// const arr = [[1, 2], [2, 4, [5, 6, [2, 4]]], 8, 9];

// // output = [1, 2, 2, 4, 5, 6,  8, 9]

// //[1, 2]

// //1 Number

// //2 Number


// //[2, 4, [5, 6, [2, 4]]]

// //2

// //4

// //[5, 6, [2, 4]]

// //5

// //6

// //[2, 4]

// // 2

// //4

// //8  Number

// //9 Number

// // iterating on array
// // if number => push
// // if array then repeat above two steps

// const output = []

// const flatArray = (array) => {
//     for(let i=0; i<array.length; i++){
//         if(Array.isArray(array[i])){
//             flatArray(array[i])
//         }
//         else{
//             output.push(array[i])
//         }
//     }
// }

// const flatArrayEach = (array) => {
//     array.forEach(element => {
//         if(Array.isArray(element)){
//             flatArrayEach(element)
//         }
//         else{
//             output.push(element)
//         }
//     });
// }


// flatArrayEach(arr)

// console.log(output)


const arr = [[1, 2], [2, 4, [5, 6, [2, 4]]], 8, 9]

const out = []


const getNumber=(array) => {
  array.forEach((value)=>{
    if(Array.isArray(value)){
    getNumber(value)
    }else{
        out.push(value)
    }
})
}
getNumber(arr)

console.log(out)




