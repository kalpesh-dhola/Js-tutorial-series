const a = 5;
const b = 8;

function myfun(){
    if(a < 10 && b > 7){
        console.log(true);
    }else{
        console.log(false);
    }
}
// myfun();  The && operator returns true if both expressions are true otherwise false

const c = 5;
const d = 8;

function myfun2(){
    if(c < 6 || d > 9){
        console.log(true);
    }else{
        console.log(false);
    }
}
// myfun2();

// console.log(c < 5 || d > 9); The || operator returns true if one or both expressions are true otherwise false

console.log(!7 === 8);

