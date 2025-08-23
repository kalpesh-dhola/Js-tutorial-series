const myarry1 = [1,2,3,4,5,6];
// console.log(myarry1.length); // give you array length

const myarry2 = ["kalpesh" , "raj"];
// console.log(...myarry1,...myarry2); // give you combine string without array
// console.log(myarry1.concat(myarry2)); // give you conbine array

const myarry3 = ["kalpesh","raj", 45 , 48];
const add = myarry3.push(56); // add element on the last of array
// console.log(myarry3);

const myarry4 = ["kalpesh","raj", 45 , 48];
// console.log(myarry4.pop()); // remove elememt on the last of array
// console.log(myarry4);

const myarry5 = ["kalpesh","raj", 45 , 48];
const addd = myarry5.unshift(65); // add elemnet on the first of array
// console.log(myarry5);

const myarry6 = ["kalpesh","raj", 45 , 48];
// console.log(myarry6.shift()); // remove element on the first of array
// console.log(myarry6);

const myarry7 = ["kalpesh","raj", 45 , 48];
function myfunn(num){
    return num === 45;
}
// console.log(myarry7.find(myfunn)); // give you finding element 
// console.log(myarry7.findIndex(myfunn)); // give you that index which you want 

const myarry8 = ["kalpesh","raj", 45 , 48];
// console.log(myarry8.indexOf("raj"));  // give you that index which you want 

const myarry9 = ["kalpesh","raj", 45 , 48];
const ad = myarry9.includes(45); // check the element is in the array or not 
// console.log(ad);

const myarry10 = ["kalpesh","raj", 45 , 48];
// console.log(myarry10.lastIndexOf(45)); // give index numbder but count the end side of array and start index 1 to ...

const myarry11 = ["kalpesh","raj", 45 , 48];
const check =  myarry11.every()


