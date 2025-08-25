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

function name (name = "who"){
    console.log("hello" + myname);
}
name();
name("kalpesh");
