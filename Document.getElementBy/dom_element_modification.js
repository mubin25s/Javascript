document.getElementById("HI").innerHTML='hlw';
document.getElementById("ri").innerHTML='WOW';

let fullname = "FATHUM MUBIN";
let age = 22;
let student = true;

//document.getElementById("").textContent = ` ${}`= println
document.getElementById("p1").textContent = `my name is ${fullname}`;
document.getElementById("p2").textContent = `I'm  ${age} years old`;
document.getElementById("p3").textContent = `I am a ${student}`;

document.getElementById("my submit").onclick = function(){
    let username = document.getElementById("ghost").value;
    console.log(username);
}
