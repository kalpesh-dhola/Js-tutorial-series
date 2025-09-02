const student = {
    name : "kalpesh",
    surname : "dhola",
    ege : 25,
    standard : 12,
    email : "kalpesh123@mail.com",
    pwd : "kalpesh456"
}
console.log(student.email);
console.log(student.name);
console.log(student.ege);

console.log(student.surname = "ahir");

student.massage = function(){
    console.log("hello world");
    console.log(`hello world`, this.name);
}
console.log(student.massage());

student.changes = function(){
    console.log(this.name = "kevin");
}
console.log(student.changes());

student.changing = function(){
    console.log(this.pwd = "kalpesh741");
}
console.log(student.changing());
Object.freeze(student)
console.log(student.pwd = "sgv5");



