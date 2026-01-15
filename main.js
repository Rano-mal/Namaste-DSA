// console.log("Namaste DSA");

// const firstName = "Rano";
// const lastName = "Mal";

// const fullName = firstName + " " + lastName;
// console.log(fullName);

// 4. Functions, if else

// function greeting(name){
//     console.log("Namaste " + name);
// }

// let x = "Virat Kohli"
// let y = "Rohit Sharma"
// greeting(x);
// greeting(y);

// function add(a, b){
//     const add = a + b;
//     console.log(add);
// }

// let sumNum1 = 2;
// let sumNum2 = 33;
// let sumNum3 = 33;

// add(sumNum1, sumNum2);

// function multiply(n1, n2){
//     let res = n1 * n2;
//     console.log(res);
// }

// multiply(3, 7);

// function eligibility(age) {
//   if (age < 18) {
//     console.log("You'are Not eligible for Vote.");
//   } else {
//     console.log("You'are eligible for Vote.");
//   }
// }

// eligibility(18);

// 5. Loops

// let arra = [3, 4, 6, 0, 10, 12, 15];

// for(let i = 0; i < arra.length; i++){
//     if(arra[i] % 2 === 0){
//         console.log('Even', arra[i]);
//     } else {
//         console.log('ODD', arra[i]);
//     }
// }

// function searches(n) {
//     let Array = [4, 2, 0, 10, 8, 20];
//   for (let i = 0; i < Array.length; i++) {
//     if (Array[i] == n) {
//       return n;
//     }
//   }
//   return -1
// }
// const res = searches(10);
// console.log(res);

let countArray = [2, -9, 17, 0, 1, -10, -4, 8];

function countNegative(countArray) {
  let count = 0;
  for (let i = 0; i < countArray.length; i++) {
    if (countArray[i] < 0) {
      count++;
    }
  }

  return count;
}

let result = countNegative(countArray);
console.log(result);
