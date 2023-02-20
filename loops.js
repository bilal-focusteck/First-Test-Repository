//for loops
let size =5;
for(let i = 0; i < size ; i++){
    console.log(i*2);
}

let ssize =5;
for(let i = 0; i < ssize ;){
    console.log(i++);;
}

//while loop
console.log("while loop exe: ")
let i = 0;
while (i<8){
    console.log(i++);
    //i++;
}

//do while loop
console.log("do while loop exe: ")
let ii = 0;
do {
    console.log(++ii);
}while (ii<8);

//switch
let a =3;
switch (a){
    case a=1:
    case a=2:
        console.log("Smaller");
        break;
    case a=3:
        console.log("Perfect for three");
        break;
    case a=4:
        console.log("Not right");
        break;
    case a=5:
        console.log("Perfect");
        break;
        default:
        console.log("Not exist");
}