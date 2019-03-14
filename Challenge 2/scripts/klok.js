function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
 
    
    if(h == 0){
        h = 24;
    }
    
    if(h > 24){
        h = h - 24;
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;
    
    setTimeout(showTime, 1000);
    
}

showTime();



function achtergrond(){
    var n = new Date().getHours();
    if (n > 20 || n < 6){
            //Tussen 19.00 en 6.00 uur wordt het nacht thema weergegeven
      document.body.className = "nacht";}
    else if (n > 12 && n < 19){
        //Tussen 12.00 en 19.00 uur wordt het middag thema weergegeven
      document.body.className = "middag";}
    else if(n>6 || n<12){
           //De rest van de tijd wordt het dag thema weergegeven
      document.body.className = "dag";}
};

achtergrond();



function melding(){
    var welkom='';
    var uur= new Date().getHours();

    if(uur <12){
        welkom="Goedemorgen!";
    }
        else if(uur<18){
            welkom="Goedemiddag!";
        }
        else {
            welkom="Goedenavond!";
        }

    document.getElementById('melding').innerHTML=welkom;
}

melding();