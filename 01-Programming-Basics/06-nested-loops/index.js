/*
Execution rule

The outer loop runs one iteration → the inner loop runs completely → outer loop moves to the next iteration → inner loop starts again.
*/

// for (let i = 0; i < 3; i++){
//     for (let j = 0; j < 5; j++){
//         console.log("i = " + i +" "+ "j = " + j);
        
//     }
// }

// for (let i = 0; i < 3; i++){
//     for (let j = 0; j < i; j++){
//         console.log(i,j);
        
//     }
// }

// for(let i=0; i<5;i++){
//     for(let j=0; j<=i; j++){
//         console.log(j)
//     }
// }

// for (i = 0; i < 3; i++){
//     for (j = i; j > 0; j--){
//         console.log(i,j);
        
//     }
// }
// for (i = 0; i < 3; i++){
//     for (j = i; j >= 0; j--){
//         console.log(i,j);
        
//     }
// }

for (let i = 5; i > 0; i--){
    for (let j = 0; j < i; j++){
        console.log(i,j);
        
    }
}