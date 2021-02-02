// const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// for (let i = 0; i < number.length; i++) {
    
//     if (number[i]>3) {
//         break;
//     }
//     console.log(number[i]);
// }

const number = [1, -1, -2, 2, 3, -3, -7, -9, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < number.length; i++) {
    
    if (number[i]<0) {
        continue;
    }
    console.log(number[i]);
}