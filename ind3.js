//1 Տրված են a,b,c բնական թվերը, որոնք եռանկյան կողմերի երկարություններն են: Արտածել YES, եթե a,b,c կողմերով եռանկյունը  հավասարակողմ է
// function erankyun(a, b, c) {
//     if (a == b && b == c) {
//         console.log("YES");
//     } else {
//         console.log("NO"); 
//     }
// }

// erankyun(1,2,3);
// erankyun(2,2,2);
// erankyun(4,4,4);


//1.1 Տրված են a,b,c բնական թվերը, որոնք եռանկյան կողմերի երկարություններն են: Արտածել YES, եթե a,b,c կողմերով եռանկյունը   հավասարասրուն է
// function erankyun(a, b, c) {
//     if (a == b || b == c || a == c) {
//         console.log("YES");
//     } else {
//         console.log("NO");
//     }
// }

// erankyun(4,4,3);
// erankyun(2,3,4);
// erankyun(4,4,4);


//1․2 Տրված են a,b,c բնական թվերը, որոնք եռանկյան կողմերի երկարություններն են: Արտածել YES, եթե a,b,c կողմերով եռանկյունը  ուղղանկյուն եռանկյուն  է

// function Number(a, b, c) {
//     if (a ** 2 + b **2  === c ** 2) {
//         console.log("YES");
//     } else {
//         console.log("NO");
//     }
// }

// Number(1,2,3);
// Number(3,4,5);
// Number(6,4,2);


//2 Տրված են երեք ամբողջ թվեր: Արտածել դրանցից փոքրագույնի արժեքը

// function number(a, b, c) {
//     let min = a;

//     if (b < min) {
//         min = b;
//     }
//     if (c < min) {
//         min = c;
//     }
//     console.log(min);
// }

// number(1,2,5);
// number(3,5,9);
// number(9,4,8);

//2.1 Տրված են երեք ամբողջ թվեր: Արտածել դրանցից մեծագույնի արժեքը

// function number(a, b, c) {
//     let max = a;
//     if (b > max) {
//         max = b;
//     }
//     if (c > max) {
//         max = c;
//     }
//     console.log(max);
// }

// number(1,2,5);
// number(3,5,9);
// number(9,4,8);


//2.1 Տրված են երեք ամբողջ թվեր: Արտածել մեծությամբ երկրորդ թվի արժեքը,

// function number(a, b, c) {
//     let secondmax;

//     if (a > b && a < c || a < b && a > c) {
//         secondmax = a;
//     }else if (b > a && b < c || b < a && b > c) {
//         secondmax = b;
//     }else {
//         secondmax = c;
//     }console.log(secondmax);
// }

// number(1,2,5);
// number(3,5,9);
// number(9,4,8);


//3 Արտածել տրված n թիվը չգերազանցող բոլոր այն բնական թվերը, որոնք առանց մնացորդի բաժանվում են իրենց թվանշանների գումարի վրա:

// function number(a) {
//     let s = 0;
//     while (a > 0) {
//         s += a % 10;
//         a = (a - (a % 10)) / 10;
//     }
//     return s;
// }
// function temp(n) {
//     for (let i = 1; i <= n; i++) {
//         let s = number(i);
//         if (i % s == 0) { 
//             console.log(i);
//         }
//     }
// }

// temp(50);
                                   