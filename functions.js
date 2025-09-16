function myfun(){
    console.log("kalpesh dhola");
}
// myfun(); // How to Declare a function

const result = function(){
    console.log("kalpesh dhola");
}
// console.log(result()); // How to expression a function

const number = [1,2,3,4,5,6]
const total = (num) => {
  if(num >= 2){
    return true
  }else{
    return false
  }
}
// console.log(total()); // arraw function 



function add(a, b) {
  return a + b;
}

// console.log(add(5, 10)); // Function with Parameters 

function numberr(number1 , number2){
  console.log(number1 + number2);
}
// numberr(20 , 23);

function demo(number1 , number2){
  let resultt = number1 + number2;
  return resultt;
}
const resultt = demo(20 , 22);
console.log(resultt);

function demo2(number1 , number2){
  return number1 + number2;
}

function usermassege(username){
  if(!username){
    console.log("Please enter a username");
    return
  }
  return `${username} just logged in`
}

// console.log(usermassege());

function userdetails(num , num1){
  return num
}

console.log(userdetails(11 , 545 , 98 , 66));

const mynewarray = [200 , 300 , 400]

function returnarray(ary1 , ...ary2){
  return returnarray()
}

console.log(returnarray(20 , 56 , 24 , 36));








