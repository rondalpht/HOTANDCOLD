const input=document.querySelector("button");
const reset=document.getElementById("reset");
reset.addEventListener("click", reseter);

const horc=document.getElementById("answer");
const numguess=document.getElementById("guesses");
let cguess=document.getElementById("cguess");
let pguess=document.getElementById("pguess").textContent;
let table=document.querySelector("table");
let answer=document.getElementById("num");
function loading(){
    answer.value=50;
}
answer.addEventListener("load",loading);
const add1=document.getElementById("add1");
const add5=document.getElementById("add5");
const add10=document.getElementById("add10");
const add25=document.getElementById("add25");
const sub1=document.getElementById("sub1");
const sub5=document.getElementById("sub5");
const sub10=document.getElementById("sub10");
const sub25=document.getElementById("sub25");
add1.addEventListener("click",addtoinput1);
add5.addEventListener("click",addtoinput5);
add10.addEventListener("click",addtoinput10);
add25.addEventListener("click",addtoinput25);
sub1.addEventListener("click",subtoinput1);
sub5.addEventListener("click",subtoinput5);
sub10.addEventListener("click",subtoinput10);
sub25.addEventListener("click",subtoinput25);
input.addEventListener("click",hotorcold);
let played=false;
let y= Math.floor(Math.random()*100+1);
let difference=100
let previousdifference=0;
let guess=5;
function reseter(){
    guess=5;
    previousdifference=0;
    difference=100;
    answer.value=50;
    y= Math.floor(Math.random()*100+1);
    let templete=`
    <tr>
        <td>new</td>
        <td>game</td>
    </tr>
    `
    table.innerHTML+=templete;
}
pguess.textContent=`Previous guesses:50`;
function addtoinput1(){
    
    if(answer.value>0&&1+Number(answer.value)<100)
    {
        answer.value=1+Number(answer.value);
    }
}
function addtoinput5(){
    if(answer.value>0&&5+Number(answer.value)<100)
    {
        answer.value=5+Number(answer.value);
    }
}
function addtoinput10(){
    if(answer.value>0&&10+Number(answer.value)<100)
    {
        answer.value=10+Number(answer.value);
    }
}
function addtoinput25(){
    if(answer.value>0&&25+Number(answer.value)<100)
    {
        answer.value=25+Number(answer.value);
    }
}
function subtoinput1(){
    if(answer.value-1>0&&answer.value<100)
    {
    answer.value-=1;
    }
}
function subtoinput5(){
    if(answer.value-5>0&&answer.value<100)
    {
    answer.value-=5;
    }
}
function subtoinput10(){
    if(answer.value-10>0&&answer.value<100)
    {
    answer.value-=10;
    }
}
function subtoinput25(){
    if(answer.value-25>0&&answer.value<100)
    {
    answer.value-=25;
    }
}

function hotorcold(){
    if(played==false){
        played=true;
    }
    if(guess>0){
    const x=answer.value;
    let heat=`You're here`;
    difference=Math.abs(y-x);
   
    if(y==x){
        horc.textContent=`DAMN YOU'RE HOT AS HELL YOU WIN`;
        heat=horc.textContent;
    }else if(difference<5){
        horc.textContent=`You're very hot`;
        guess+=1;
        heat=horc.textContent;
    }else if(difference<9){
    horc.textContent=`You're hot`;
    heat=horc.textContent;
    } else if(difference<16){
        horc.textContent=`You're very warm`;
        heat=horc.textContent;
    } else if(difference<20){
        horc.textContent=`You're warm`;
        heat=horc.textContent;
    }else if(difference<31){
        horc.textContent=`You're cool`;
        heat=horc.textContent;
    }else if(difference<41){
        horc.textContent=`You're very cool`;
        heat=horc.textContent;
    }else if(difference<56){
        horc.textContent=`You're cold`;
        heat=horc.textContent;
    }else{
        horc.textContent=`You're very cold`;
        heat=horc.textContent;
    }
    if(x>100||x<0)
    {
        horc.textContent=`Number is too big or small.`
        heat=horc.textContent;
        guess++;
    }
    pguess= pguess+ `, ${x}`;
    guess--;
    numguess.textContent=`${guess}`;
    let templete=`
    <tr>
        <td>${x}</td>
        <td>${heat}</td>
    </tr>
    `
    table.innerHTML+=templete;
}else{
    horc.textContent=`game over`;
}
}
