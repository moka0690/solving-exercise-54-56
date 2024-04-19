 friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index = 0;
let counter = 0;
let letter = "A";
let i= true
// Output
// "1 => Sayed"
// "2 => Mahmoud"
while (index < friends.length){
    if(friends[index][counter]===letter || typeof friends[index]==="number") {
       index++
        continue
     }   
       console.log( `${[i++] }`+"=>" +friends[index])
       index++
          }



