let map = new Map();
map.set(1, "number");
map.set("1", "str");
map.set(true, "bool");
console.log(map.get(1));
console.log(map.get("1"));
console.log(map.get(true));
console.log(map.size);
console.log("Objects")
let obj = Object.fromEntries(map.entries());
console.log(obj.true);

var map2 = new Map();
map2.set("apple", 250)
.set("orange", 300)
.set("Banana", 350);
for (let variab of map2.keys()){
    console.log(variab);
}
for (let price of map2.values()){
    console.log(price);
}
for (let details of map2.entries()){
    console.log(details);
}
console.log(map2.get("Banana"));

//array passing for initialization of map, when we pass in map.set,
//it takes it as a key as shown below
let map3 = new Map();
map3.set([[1, "Bilal"],
["1", "Bilal Ahmad"],
["bool", "true"],
[2, 225]],"abc");
for (let vari of map3.keys()){
    console.log(vari);
}
for (let variablee of map3.values()){
    console.log(variablee);
}
for (let variablees of map3.entries()){
    console.log(variablees);
}

