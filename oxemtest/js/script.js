var swiper = new Swiper('.swiper-container', {
    cssMode: true,
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },
    pagination: {
    el: '.swiper-pagination',
    clickable:true,
    },
    mousewheel: true,
    keyboard: true,
    
    dynamicBullets:true,
});

function rangenumber(){
    var val=$('.rangenumber').val();
    val=(val*100)/6000000;
    $('.rangenumber').css({'background':'-webkit-linear-gradient(left, #FF9514 0%, #FF9514 '+val+'%, rgb(168, 168, 168) '+val+'%, rgb(168, 168, 168) 100%)'})
}
function rangepr(){
    var valprotr=$('.rangepr').val();
    valprotr=(valprotr*100)/60;
    $('.rangepr').css({'background':'-webkit-linear-gradient(left, #FF9514 1%, #FF9514 '+valprotr+'%, rgb(168, 168, 168) '+valprotr+'%, rgb(168, 168, 168) 60%)'})
}
function rangermonth(){
    var valprot=$('.rangermonth').val();
    valprot=(valprot*100)/60;
    $('.rangermonth').css({'background':'-webkit-linear-gradient(left, #FF9514 1%, #FF9514 '+valprot+'%, rgb(168, 168, 168) '+valprot+'%, rgb(168, 168, 168) 60%)'})
}

const totalCostNumber=document.getElementById('total-cost-number'),
        totalCostProtient=document.getElementById('total-cost-protient'),
            totalCostMonth=document.getElementById('total-cost-month');
const totalCostRange=document.getElementById('total-cost-range'),
        totalCostProtientRange=document.getElementById('total-cost-protient-range'),
            totalCostMonthProtient=document.getElementById('total-cost-month-protient');
const contractCalcul=document.getElementById('contract-calcul'),
        paymentCalcul=document.getElementById('payment-calcul'),
            totalCostMnthActive=document.getElementById('total-cost-month-active');

const inputRange=document.querySelectorAll('.range');

const accignValue=()=>{
    totalCostNumber.value=totalCostRange.value;
    totalCostProtient.value=totalCostProtientRange.value;
    totalCostMonth.value=totalCostMonthProtient.value;
}
accignValue();

for(let input of inputRange){
    input.addEventListener('input', () =>{
        accignValue();
        calculation(totalCostNumber.value, totalCostProtient.value, totalCostMonth.value);
    })
}

const calculation=(totalCostNumber=1000000, totalCostProtient=1, totalCostMonth=1) =>{

    let oneSum;
    let summdog;
    let everymonth;
    oneSum=(totalCostProtient/100)*totalCostNumber;
    const oneSumArounded=Math.round(oneSum);
    everymonth=totalCostNumber-oneSumArounded*(totalCostProtient/100)/((1+(totalCostProtient/100))-totalCostMonth-1);
    const everymonthArounded=Math.round(everymonth);
    summdog=oneSumArounded+(totalCostMonth*everymonthArounded);
    totalCostMnthActive.innerHTML=`${oneSumArounded}₽`;
        paymentCalcul.innerHTML=`${everymonthArounded}₽`
            contractCalcul.innerHTML=`${summdog}₽`
}

window.onscroll=function showHeader(){
    var header=document.querySelector('.header');
    if (window.pageYOffset>100){
        header.classList.add('header__fixed');
    } else{
        header.classList.remove('header__fixed');
    }
}

var modal=document.getElementById("modal");
var btn=document.getElementById("button_modal");
var btn1=document.getElementById("button_modal1");
var btn2=document.getElementById("button_modal2");
var btn3=document.getElementById("button_modal3");
var btn4=document.getElementById("button_modal4");
var btn5=document.getElementById("button_modal5");
var btn6=document.getElementById("button_modal6");
var close=document.getElementsByClassName("popup__close")[0];

btn.onclick=function(){
    modal.style.display="block";
}
btn1.onclick=function(){
    modal.style.display="block";
}
btn2.onclick=function(){
    modal.style.display="block";
}
btn3.onclick=function(){
    modal.style.display="block";
}
btn4.onclick=function(){
    modal.style.display="block";
}
btn5.onclick=function(){
    modal.style.display="block";
}
btn6.onclick=function(){
    modal.style.display="block";
}
close.onclick=function(){
    modal.style.display="none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function burgerMenu(selector) {
    let menu = $(selector);
    let button = menu.find('.burger-menu__button');
    let links = menu.find('.burger-menu__link');
    let overlay = menu.find('.burger-menu__overlay');
    
    button.on('click', (e) => {
        e.preventDefault();
        toggleMenu();
    });
    
    links.on('click', () => toggleMenu());
    overlay.on('click', () => toggleMenu());
    
    function toggleMenu() {
        menu.toggleClass('burger-menu_active');
        if (menu.hasClass('burger-menu_active')) {
            $('body').css('overflow', 'visible');
        } else {
            $('body').css('overflow', 'hidden');
        }
    }
}
burgerMenu ('.burger-menu');
$(".burger-menu__button").click(function(e){
    e.preventDefault();
    $(".burger-menu__nav").toggleClass("show");
if ($(".burger-menu__nav").hasClass('show')) {
$('<div class="overlay">&nbsp;</div>').prependTo($('body'));
} else {
$('.overlay').remove();
}
});

let reg = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
var yesblock=document.getElementById("yesvalid")
let inp=document.querySelector('#phone');
let reg1=/[A-Za-zA-Яа-яЁё]/;
var yesblock1=document.getElementById("yesvalid1")
let inp1=document.querySelector('#name');

document.querySelector('#submbtn').onclick=function (e) {
    e.preventDefault();

    if (!validate(reg, inp.value)) {
        notValid(inp);
    } else {
        valid(inp);
    }
    if (!(validate1(reg1, inp1.value))) {
        notValid1(inp1);
    } else {
        valid1(inp1);
    } 
    if (validate(reg, inp.value)&&(validate1(reg1, inp1.value))){
        var modal1=document.getElementById("modal");
        modal1.style.display = "none";
    }
}


function validate(regex, inp) {
    return regex.test(inp);
}

function notValid(inp) {
    inp.classList.add('is-invalid');
}

function valid(inp) {
    inp.classList.remove('is-invalid');
    yesblock.style.display="block";
}

function validate1(regex1,inp1) {
    return regex1.test(inp1);
}

function notValid1(inp1) {
    inp1.classList.add('is-invalid1');
}

function valid1(inp1) {
    inp1.classList.remove('is-invalid1');
    yesblock1.style.display="block";
}
