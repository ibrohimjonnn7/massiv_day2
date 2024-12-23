//1task
// function myfunc(...a){
//       return a.reduce((acc, e) => acc.concat(e), [])
// }
// console.log(myfunc([1,2], [3,4]));

//task2 

// function myfunc(a,b){
//  return a.indexOf(b)
// }
// console.log(myfunc([1,2,3],2));

//task3

// function myfunc(a){
//     return a.filter((e, i) => {
//         if(a.indexOf(e) === i) {
//             return e;
//         }
//     });
// }
// console.log(myfunc([1,2,2,3,4,4,5,6,6]));

//task4

// function myfunc(a){
//    return a.filter((e,i) => e > 0)
// }
// console.log(myfunc([-1,2,-3,4,-5]));

//task5

// function myfunc(a){
//    return a.reduce((acc, curr) => acc + curr,0)/a.length;
// }
// console.log(myfunc([2, 4, 6, 8, 10]));

//task6

// function myfunc(a){
// let b = a.toReversed();
// let ansver = true;
// a.forEach((e,i) =>  {
//     if(e != b[i]){
//         ansver = false;
//     }
// });
// return ansver;
// }

// console.log(myfunc([1, 2, 3, 2, 1]));

//7task

// function myfunc(a,b,c){
//     return c.filter((e) => e >= a && e <= b);
// }
// console.log(myfunc(3, 8, [1, 5, 95, 0, 4, 7]));

//task8

// function myfunc(a){
// return a.reduce((acc, e) => {
//     return acc += e;
// },0);

// }

// console.log(myfunc([1, 2, 3, 4, 5]));

//task9
// function myfunc(a){
//    return a.map((e) => {
//     return typeof e;
//    })
// }

// console.log(myfunc(["214", true, false, 2.15, [], null]));

//task10

// function myfunc(a){
//     return a.map((e) => {
//         return e.length;
//     })

// }
// console.log(myfunc(["hello", "world"]));

//task11

// function myfunc(a){
// let squre = Math.sqrt(a[0]);
// let cube  = squre ** 3;
// return cube === a[1];
// }

// console.log(myfunc([4, 8]));

//task12 

// function myfunc(a) {
//   return a.map((e) => e * -1);
// }

// console.log(myfunc([1, 2, 3, 4, 5]));

//task13

// function myfunc(a){
// return a.reduce((acc, e) => {
//     return acc.concat(e * 2);
// },[])
// }

// console.log(myfunc([2, 5, 3]));

//task14

// function myfunc(a){
//     return a.reduce((acc,e)=>{
//         if(e>5){
//             acc += e;
//         }
//         else {

//         }
//         return acc
//     },0)
// }

// console.log(myfunc([10, 12, 28, 47, 55, 100]));

//task15

// function myfunc(a){
// return a.map((e) => {
//     if(typeof e == "number"){
//         return e
//     }
//     else if(e == undefined){
//         return e
//     }
// });
// }
// console.log(myfunc(["A", 0, "Edabit", 1729, "Python", "1729"]));
