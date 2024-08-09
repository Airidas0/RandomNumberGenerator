let randomnum;
let number;
document.getElementById("mysubmit").onclick = function(){
    number = document.getElementById("number").value;
    randomnum = Math.floor(Math.random()* number) + 1;
    document.getElementById("result").textContent = `Your random number is: ${randomnum}`;
}