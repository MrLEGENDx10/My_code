// within forEach we cannot
// use the #oop control statements such as break, an6 continue.

// syntax

// array.forEach((item,index,array) => { });

let itemsInCart =["apple","comb","mike","keyboard","t-shirt","mobile holder"];
// Display the item in cart 
// itemsInCart.forEach((item)=>console.log(item));
// itemsInCart.forEach((element,index,arr)=>{
//     console.log(`${index} and their element ${element}`)
// });

// console.log(itemsInCart);

// const filteredItems = itemsInCart.filter((element,index,arr)=>{
//     return element.length>4
// })
// console.log(filteredItems);

// const filteredItems2 = itemsInCart.filter(element=>element.includes("e"));
// console.log(filteredItems2);

// const filteredItems3 = itemsInCart.filter((element,index)=>{
//     console.log(element,index);
//     return element.toUpperCase().includes("e");
// })

// console.log(filteredItems3);

// map
// map is used to create a new array from an existing array
// map is used to modify the existing array

// const array = [1,2,3,4,5];

// array.map((element,index,arr)=>{
//     console.log(element,index,arr);
// })

// array.map((h)=>console.log(h));

const cartBill = [10,20,30,40,50];

const sumOfCart = cartBill.reduce((pre,curr)=>{
    console.log(`pre is ${pre} and curr is ${curr}`);
    return pre+curr;
},0) ;
console.log(sumOfCart);

const Check = cartBill.every((v) => typeof v === "number");

console.log("Check is ",Check);

const above20 = cartBill.find((v)=>v>20);
console.log(above20);

const above20Index = cartBill.findIndex((v)=>v>20);
console.log(above20Index);

console.log(...(cartBill.keys()));