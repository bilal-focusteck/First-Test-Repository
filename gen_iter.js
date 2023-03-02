let print = function* () {
    for (let i = 0; i < 5; i+=1) {
        yield i;
    }
}
let g = print();
for (let values of g){
    console.log(values);
}




// let generator = print();
// var x=generator.next().value;
// console.log(x);
// x=generator.next().value;
// // console.log(x);
// x=generator.next().value;
// console.log(x);
// x=generator.next().value;
// console.log(x);
// x=generator.next().value;
// console.log(x);
// x=generator.next().value;
// console.log(x);
// x=generator.next().value;
// console.log(x);
// x=generator.next().value;
// console.log(x);
// x=generator.next().value;
// console.log(x);

// function* infinite() {
//     let index = 0;
  
//     while (true) {
//       yield index++;
//     }
//   }
  
//   const generator = infinite(); // "Generator { }"
  
//   console.log(generator.next().value); // 0
//   console.log(generator.next().value); // 1
//   console.log(generator.next().value); // 2