var resenie=document.getElementById("resenie");
var otvet=document.getElementById("otvet");

const kilo=0.00001;
const metr=0.01;
const deci=0.1;
const santi=1;
const milli=10;
const mikron=10000;
const nano=10000000;
const ang=100000000;


function calculate(zadaca, kurrency) {
    return (zadaca * kurrency).toFixed(5);

}
function perevodsm(event){
    var inputValue=resenie.value;
    if(event.target.value === "kilo") {
        otvet.innerHTML = calculate(inputValue, kilo) + " km";
    } else if(event.target.value === "metr"){
        otvet.innerHTML=calculate(inputValue, metr) + " m";
    } else if(event.target.value === "deci"){
        otvet.innerHTML=calculate(inputValue, deci) + " dm";
    } else if(event.target.value === "canti"){
        otvet.innerHTML=calculate(inputValue, santi) + " cm";
    } else if(event.target.value === "mili"){
        otvet.innerHTML=calculate(inputValue, milli) + " mm";
    } else if(event.target.value === "mikron"){
        otvet.innerHTML=calculate(inputValue, mikron) + " mkm";
    } else if(event.target.value === "nano"){
        otvet.innerHTML=calculate(inputValue, nano) + " nm";
    } else if(event.target.value === "ang"){
        otvet.innerHTML=calculate(inputValue, ang) + " A";
    }

}