const input=document.querySelector("button");
input.addEventListener("click",hotorcold);
const horc=document.querySelector("answer");
function hotorcold(){
    let y= Math.floor(Math.random()*100+1);
    let x=prompt("What is your number");
    if(y==x){
        horc.textContent="DAMN YOU'RE HOT AS HELL YOU WIN"
    }else if(Math.abs(y-x)<10){
    horc.textContent="You're super hot"
    } else if(Math.abs(y-x)<25){
        horc.textContent="You're warming up"
    } else if(Math.abs(y-x)<25){
        horc.textContent="You're warming up"
    }
}
