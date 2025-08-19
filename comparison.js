let num = 5;
function myfun(){
    if(num == 5){
        console.log(true)
    }else{
        console.log(false)
    }
}
// myfun()

// == : value check

let num1 = ["5"];
let result = num1.map( (num) => {
    if(num1 === 5){
        return true
    }else{
        return false
    }
})
// console.log(result);

// === : value and type check


let num2 = "2";
function resultt(){
    if(num2 != 3){
        console.log(false);
    }else{
        console.log(true);
    }
}
// resultt();

// != : check value and convert type

let num3 = "5";
function num3check(){
    if(num3 !== 5){
        console.log(false)
    }
    else{
        console.log(true);
    }
}
// num3check();

// !== : check value and type both

let num4 = 5;
function num4check(){
    if(num4 > 4){
        console.log(true);
    }else{
        console.log(false);
    }
}
// num4check();

// > : Greater than perimeter


let num5 = 5;
function num5check(){
    if(num4 < 6){
        console.log(true);
    }else{
        console.log(false);
    }
}
// num5check();

// < : less than perimeter


let num6 = 5;
function num6check(){
    if(num6 >= 5){
       console.log(true);
    }else{
        console.log(false);
    }
}
// num6check();

// >= : Greater than perimeter and equal to perimeter

let num7 = 6;
function num7check(){
    if(num7 <= 5){
       console.log(true);
    }else{
        console.log(false);
    }
}
// num7check();

// <= : less than perimeter and equal to perimeter