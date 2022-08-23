function time() {
    let hrs = document.getElementById("three2s");
    let mins = document.getElementById("three3s");
    let secs = document.getElementById("three4s");
    let ampm = document.getElementById("am");

    let times = new Date();

    let hour = times.getHours();
    let minut = times.getMinutes();
    let second = times.getSeconds();
    let ampm1 = "AM";

    if (hour > 12) {
        hour = hour - 12;
        ampm1 = "PM";
    }
    if (hour < 10) {
        hour = "0" + hour;
    }
    if (minut < 10) {
        minut = "0" + minut;
    }
    if (second < 10) {
        second = "0" + second;
    }

    hrs.innerText = hour;
    mins.innerText = minut;
    secs.innerText = second;
    ampm.innerText = ampm1;
}
let milisecond = 1000;
setInterval(time, milisecond);

function Change(){
    
    var a =document.getElementById("one").value;
    var b =document.getElementById("two").value;
    var c =document.getElementById("three").value;
    var d =document.getElementById("four").value;
    
    
    let e = new Date().getHours();
    
    if(a == e){
        let img =  document.getElementById("component");
        img.src = "./images/Component 30 – 1.svg";
        document.getElementById("gudmorning").innerHTML = ("Good Morning!! Wakeup!!!");
        document.getElementById("greet").innerHTML = ("GRAB SOME HEALTHY BREAKFAST!!!");
    }
    if(b == e){
        let img =  document.getElementById("component");
        img.src = "./images/Group 5183.svg";
        document.getElementById("gudmorning").innerText = ("Good AFternoon !! Take some lunch");
        document.getElementById("greet").innerHTML = ("LET'S HAVE SOME LUNCH !!");
    }
    if(c == e){
        let img =  document.getElementById("component");
        img.src = "./images/lunch_image.png";
        document.getElementById("gudmorning").innerHTML = ("Good Evening !!");
        document.getElementById("greet").innerText = ("STOP YAWNING, GET SOME TEA !! IT'S JUST EVENING!");
    }
    if(d == e){
        let img =  document.getElementById("component");
        img.src = "./images/Group 5194.svg";
        document.getElementById("gudmorning").innerHTML = ("Good Night !!");
        document.getElementById("greet").innerHTML = ("CLOSE YOUR EYE'S AND GO TO SLEEP !!");
    }
    
    
    let ones =document.getElementById("WakeT");
    ones.innerText = one.options[one.selectedIndex].text;

    let twos =document.getElementById("LunchT");
    twos.innerText = two.options[two.selectedIndex].text;
    
    let threes = document.getElementById('NapT');
    threes.innerText = three.options[three.selectedIndex].text;

    let fours = document.getElementById("NightT");
    fours.innerText = four.options[four.selectedIndex].text;

}