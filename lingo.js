var lingo = document.getElementsByClassName("lingo")[0];
lingo.onkeyup = function(e) {
    var target = e.srcElement || e.target;
    var maxLength = parseInt(target.attributes["maxlength"].value, 10);
    var myLength = target.value.length;
    if (myLength >= maxLength) {
        var next = target;
        while (next = next.nextElementSibling) {
            if (next == null)
                break;
            if (next.tagName.toLowerCase() === "input") {
                next.focus();
                break;
            }
        }
    }

    else if (myLength === 0) {
        var previous = target;
        while (previous = previous.previousElementSibling) {
            if (previous == null)
                break;
            if (previous.tagName.toLowerCase() === "input") {
                previous.focus();
                break;
            }
        }
    }
}

var myArray = ['losser', 'lutten', 'diever','diemen','almelo','almere','reutum','londen','parijs','madrid','delden','aadorp'
    ,'athene','dublin','tirana','beerze','lemele','raalte','hattem','zwolle','ermelo','arnhem','lochem','leiden','geleen','dokkum','putten','petten'];
var rand = Math.floor(Math.random() * myArray.length);
var word = myArray[rand];

document.getElementById("1").value = word.charAt(0);
document.getElementById("7").value = word.charAt(0);
document.getElementById("13").value = word.charAt(0);
document.getElementById("19").value = word.charAt(0);


var t11 = document.getElementById("1");
var t12 = document.getElementById("2");
var t13 = document.getElementById("3");
var t14 = document.getElementById("4");
var t15 = document.getElementById("5");
var t16 = document.getElementById("6");

var t21 = document.getElementById("7");
var t22 = document.getElementById("8");
var t23 = document.getElementById("9");
var t24 = document.getElementById("10");
var t25 = document.getElementById("11");
var t26 = document.getElementById("12");

var t31 = document.getElementById("13");
var t32 = document.getElementById("14");
var t33 = document.getElementById("15");
var t34 = document.getElementById("16");
var t35 = document.getElementById("17");
var t36 = document.getElementById("18");

var t41 = document.getElementById("19");
var t42 = document.getElementById("20");
var t43 = document.getElementById("21");
var t44 = document.getElementById("22");
var t45 = document.getElementById("23");
var t46 = document.getElementById("24");

t11.style.background = "#28a745";
t21.style.background = "#28a745";
t31.style.background = "#28a745";
t41.style.background = "#28a745";


var count = 0;
function myClickHandler() {
    switch(count) {
        case 0:
            een();
            break;
        case 1:
            twee();
            break;
        case 2:
            drie();
            break;
        case 3:
            vier();
            break;
    }
    count++;
}



function een() {

    if(t12.value != word.charAt(1))
    {
        t12.style.background = "#dc3545";
    }
    else {
        t12.style.background = "#28a745";
    }
    if(t13.value != word.charAt(2))
    {
        t13.style.background = "#dc3545";
    }
    else {
        t13.style.background = "#28a745";
    }
    if(t14.value != word.charAt(3))
    {
        t14.style.background = "#dc3545";
    }
    else {
        t14.style.background = "#28a745";
    }
    if(t15.value != word.charAt(4))
    {
        t15.style.background = "#dc3545";
    }
    else {
        t15.style.background = "#28a745";
    }
    if(t16.value != word.charAt(5))
    {
        t16.style.background = "#dc3545";
    }
    else {
        t16.style.background = "#28a745";
    }


    t11.disabled = true;
    t12.disabled = true;
    t13.disabled = true;
    t14.disabled = true;
    t15.disabled = true;
    t16.disabled = true;
}

function twee() {


    if(t22.value != word.charAt(1))
    {
        t22.style.background = "#dc3545";
    }
    else {
        t22.style.background = "#28a745";
    }
    if(t23.value != word.charAt(2))
    {
        t23.style.background = "#dc3545";
    }
    else {
        t23.style.background = "#28a745";
    }
    if(t24.value != word.charAt(3))
    {
        t24.style.background = "#dc3545";
    }
    else {
        t24.style.background = "#28a745";
    }
    if(t25.value != word.charAt(4))
    {
        t25.style.background = "#dc3545";
    }
    else {
        t25.style.background = "#28a745";
    }
    if(t26.value != word.charAt(5))
    {
        t26.style.background = "#dc3545";
    }
    else {
        t26.style.background = "#28a745";
    }


    t21.disabled = true;
    t22.disabled = true;
    t23.disabled = true;
    t24.disabled = true;
    t25.disabled = true;
    t26.disabled = true;
}

function drie() {


    if(t32.value != word.charAt(1))
    {
        t32.style.background = "#dc3545";
    }
    else {
        t32.style.background = "#28a745";
    }
    if(t33.value != word.charAt(2))
    {
        t33.style.background = "#dc3545";
    }
    else {
        t33.style.background = "#28a745";
    }
    if(t34.value != word.charAt(3))
    {
        t34.style.background = "#dc3545";
    }
    else {
        t34.style.background = "#28a745";
    }
    if(t35.value != word.charAt(4))
    {
        t35.style.background = "#dc3545";
    }
    else {
        t35.style.background = "#28a745";
    }
    if(t36.value != word.charAt(5))
    {
        t36.style.background = "#dc3545";
    }
    else {
        t36.style.background = "#28a745";
    }



    t31.disabled = true;
    t32.disabled = true;
    t33.disabled = true;
    t34.disabled = true;
    t35.disabled = true;
    t36.disabled = true;
}

function vier() {

    if(t42.value != word.charAt(1))
    {
        t42.style.background = "#dc3545";
    }
    else {
        t42.style.background = "#28a745";
    }
    if(t43.value != word.charAt(2))
    {
        t43.style.background = "#dc3545";
    }
    else {
        t43.style.background = "#28a745";
    }
    if(t44.value != word.charAt(3))
    {
        t44.style.background = "#dc3545";
    }
    else {
        t44.style.background = "#28a745";
    }
    if(t45.value != word.charAt(4))
    {
        t45.style.background = "#dc3545";
    }
    else {
        t45.style.background = "#28a745";
    }
    if(t46.value != word.charAt(5))
    {
        t46.style.background = "#dc3545";
    }
    else {
        t46.style.background = "#28a745";
    }


    t41.disabled = true;
    t42.disabled = true;
    t43.disabled = true;
    t44.disabled = true;
    t45.disabled = true;
    t46.disabled = true;
}






