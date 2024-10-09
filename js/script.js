//                                             // oddiy misollar

// // 1-misol
// // let massiv=[1,2,3,4,5,6,7,8,9,10];
// // console.log(massiv[0]);
// // console.log(massiv[massiv.length - 1]);

// 2-misol
// let massiv = [1,2,45,`bye`,12,`alik`];
// massiv[4]=`salom`;
// console.log(massiv);

// 3-misol
// let fruits =[]
// fruits.push(`uzum`)
// fruits.push(`olma`)
// fruits.push(`behi`)
// console.log(fruits);

// 4-misol

// let massiv =[`olma`, `behi`,`Mers`,``]
// console.log(massiv.length);

// 5-misol
// let massiv=[`BMW`,`mers`,`KIA`]
// massiv.push(`tayota`)
// console.log(massiv);

// 6-misol
// let massiv=[`BMW`,`mers`,`KIA`];
// massiv.pop();
// console.log(massiv);

// 7-misol
// let massiv=[`BMW`,`mers`,`KIA`]
// massiv.unshift(`tayota`)
// console.log(massiv);

// 8-misol
// let massiv=[`BMW`,`mers`,`KIA`];
// massiv.shift();
// console.log(massiv);

// 9-misol
// let num = [1, 2, 3, 4, 5];
// for (let i = 0; i < num.length; i++) {
//     console.log(num[i]);
// }

// 10-misol
// let mevalar = ["Olma", "Banan", "Apelsin"];

// let qiymat = "Banan" ;

// if (mevalar.includes(qiymat)) {
//     console.log(" massivda mavjud");
// } else {
//     console.log(" massivda mavjud emas");
// }

//                                                          For loop ga oid masalalar

// 1-misol

// let num = [1, 2, 3, 4, 5,6,7,8,9,10];
// for (let i = 0; i < num.length; i++) {
//     console.log(num[i]);
// }

// 2-misol

// let num = [`olma`, `behi`, `anjir`, `shaftoli`, `apelsin`];
//  for (let i = 0; i < num.length; i++) {
//      console.log(num[i]);
// }

// 3-misol
//  let num = [1, 2, 3, 4, 5,232,23,34567,4567,34,566432,4565,565];
// for (let i = 0; i < num.length; i++) {
//    if (num[i]%2==0) {
//     console.log(num[i]);
//    }
// }

// 4-misol
// let num = [1, 2, 3, 4, 5,232,23,34567,4567,34,566432,4565,565];
// for (let i = 0; i < num.length; i++) {
//    if (num[i]%2!=0) {
//     console.log(num[i]);
//    }
// }

// 5-misol
// let num = [1, 2, -3, 4, 5,232,23,34567,-4567,34,566432,4565,565];
// for (let i = 0; i < num.length; i++) {
//    if (num[i]>=0) {
//     console.log(num[i]);
//    }
// }

// 6-misol
// let num = [1, 2, 3, 4, 5,6,7,8,9,10];
// num.reverse()
// for (let i = 0; i < num.length; i++) {

//     console.log(num[i]);

// }

// 7-misol
// let num = [1, 2, 3, 4, 5,232,23,34567,4567,34,566432,4565,565];
// let sum=0;
// for (let i = 0; i < num.length; i++) {
//    sum=sum+num[i];
// }
// console.log(sum);

// 8-misol
// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i = 0; i < num.length; i++) {
//   num[i] *= 2;
// }
// console.log(num);

// 9-misol
// let num = [1, 2, 3, 4, 5,232,23,34567,4567,34,566432,4565,565];
// let max=Math.max(...num)

// console.log(max);

// 10-misol
// let num = [1, 2, 3, 4, 5,232,23,34567,4567,34,566432,4565,565];
// let min=Math.min(...num)

// console.log(min);

// 11-misol
// let num = [1, 2, 3, -4, 5,232,-23,34567,4567,34,566432,-4565,565];
// for (let i = 0; i < num.length; i++) {
//     if (num[i]<0) {
//         console.log(num[i]);
        
//     }
//     }

// 12-misol
// let num = [1, 2, 3, -4, 5,232,-23,34567,4567,34,566432,-4565,565];
// let sum=0;
// for (let i = 0; i < num.length; i++) {
//     if (num[i]>=0) {
//         sum=sum+num[i];
//     }
//     }
//     console.log(sum);


// 13-misol
// let num = [1324, 234, 334, 4, 5,232,23,34567,4567,34,566432,4565,565];
// for (let i = 0; i < num.length; i++) {
//     console.log(`indeks:`+i+ `   `+`element:`+num[i]);
// }

// 14-misol

// let num = [1324, 234, 334, 4, 5,232,23];
// for (let i = num.length - 1; i >= 0; i--) {
//     console.log(`indeks:`+i+ `   `+`element:`+num[i]);

// }

// 15-misol
// let num = [1324, 234, 334, 4, 5,232,23,34567,4567,34,566432,4565,565];
// for (let i = 1; i < num.length; i++) {
//     console.log(`indeks:`+i+ `   `+`element:`+num[i]);
// }