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

const myarry11 = [48 ,45 , 55 ,58];
// console.log(myarry11.every(num => num > 43)); // give you true or false if all element are true check 


const myarry12 = [48 ,45 , 55 ,58];
// console.log(myarry12.filter(num => num > 45)); // give your existing element after apply conditioner

const myarry13 = [48 ,45 , 55 ,58]; 
const sum = myarry13.reduce((total, n) => total + n, 0)
// console.log(sum);  // give you total sum of element

const myarry14 = [48 ,45 , 55 ,58];
// console.log(myarry14.map(num => num + num)); // give you result after running function


const myarry15 = [48 ,45 , 55 ,58];
for(let s in myarry15){
//   console.log(s);     // give you index 
}
for(let f of myarry15){
    // console.log(f); // give you values
}             

const myarry16 = [48 ,45 , 55 ,58];
// console.log(myarry16.sort());  // give you sorting array element


const myarry17 = ["kalpesh","raj", 45 , 48];
// console.log(myarry17.reverse()); // give you reverse arrays


const myarry18 = [48 ,45 , 55 ,58 , 7 , 56]
const newarr = myarry18.slice(1, 3);
// console.log(newarr); // give you new array , does not remove any elements and selects elements from the start argument, and up to (but not including) the end argument


const myarry19 = [48 ,45 , 55 ,58 , 7 , 56];
const arrnew = myarry19.splice(1,2, 88,94);
// console.log(myarry19); //  give you delete array and add new array in position which you want
