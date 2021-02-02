// Truthy value 

 1 - '0'
 2- ' '
 3- [ ]
 4- {}

//  Falsy Value 

1- 0
2- ""
3- undefined
4- null
5- NaN
6- false

let name = 12;
if (name || name == 0) {
    console.log("Condition True");
}
else{
    console.log("Condition False");
}