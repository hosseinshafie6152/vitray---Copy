let search = document.querySelector("#search input");
let production = document.querySelector("#production");


search.addEventListener("input" , (e)=>{
    Array.from(production.children).forEach(element=>{
    if (element.innerText.includes(e.target.value)) {
            element.style.display = "block"
        } else {
            element.style.display = "none";
        }
    })
})

//show functions
document.getElementById("tile").style.display = "none";
function show1(){
    let tile = document.getElementById("tile");
    let btn = document.getElementById("btn1");
    let close = document.getElementById("close");
    if(tile.style.display == "none"){
        tile.style.display= "block";
        btn.innerText = "بستن";
    }else{
        tile.style.display = "none"
        btn.innerText = "جزئیات محصول"
    }
}
document.getElementById("glass-gold").style.display = "none";
function show2(){
    let glassGold = document.getElementById("glass-gold");
    let btn = document.getElementById("btn2");
    if(glassGold.style.display == "none"){
        glassGold.style.display = "block";
        btn.innerText = "بستن";
    }else{
        glassGold.style.display = "none"
        btn.innerText = "جزئیات محصول";
    }
}
document.getElementById("cat-case").style.display = "none";
function show3(){
    let catCase = document.getElementById("cat-case");
    let btn = document.getElementById("btn3");
    if(catCase.style.display == "none"){
        catCase.style.display = "block";
        btn.innerText = "بستن";
    }else{
        catCase.style.display = "none"
        btn.innerText = "جزئیات محصول";
    }
}
document.getElementById("tight").style.display = "none";
function show4(){
    let tight = document.getElementById("tight");
    let btn = document.getElementById("btn4");
    if(tight.style.display == "none"){
        tight.style.display = "block";
        btn.innerText = "بستن";
    }else{
        tight.style.display = "none"
        btn.innerText = "جزئیات محصول";
    }
}
document.getElementById("cup").style.display = "none";
function show5(){
    let cup = document.getElementById("cup");
    let btn = document.getElementById("btn5");
    if(cup.style.display == "none"){
        cup.style.display = "block";
        btn.innerText = "بستن";
    }else{
        cup.style.display = "none"
        btn.innerText = "جزئیات محصول";
    }
}
document.getElementById("tray").style.display = "none";
function show6(){
    let tray = document.getElementById("tray");
    let btn = document.getElementById("btn6");
    if(tray.style.display == "none"){
        tray.style.display = "block";
        btn.innerText = "بستن";
    }else{
        tray.style.display = "none"
        btn.innerText = "جزئیات محصول";
    }
}

//scroll
window.addEventListener("scroll" , (e)=>{
    if(window.scrollY > 400){
    document.getElementById("move-up").style.display = "block";
    console.log(window.scrollY)
    }
    else{
        document.getElementById("move-up").style.display = "none";
    }
});
//remaining time
let remainTime = 270000;

function setTime(){
    if(remainTime == 0){
       let img =  document.querySelector("#new");
       img.src = "../vitray/images/products21.jfif";
       return
    }else{
        let hours = Math.floor(remainTime/3600);
        let minuts = Math.floor(remainTime % 3600/60);
        let seconds = Math.floor((remainTime%3600)%60);
        document.querySelector("#hours").innerHTML = hours;
        document.querySelector("#minuts").innerHTML = minuts;
        document.querySelector("#seconds").innerHTML = seconds;

    };
};
setInterval(() => {
    remainTime -= 1;
    setTime();  
}, 1000);

//popover
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))