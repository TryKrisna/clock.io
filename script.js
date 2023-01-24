function displayTime(){
    var dateTime = new Date();
    var hrs = dateTime.getHours();
    var min = dateTime.getMinutes();
    var sec = dateTime.getSeconds();
    var session = document.getElementById('session');
    // var statuss = document.getElementById('status');
    var check ="";
    // var bgimg = document.getElementById('bgimg');

   
    if(hrs >= 12){
        session.innerHTML = 'PM';
        check="PM";

        
    }else{
        session.innerHTML = 'AM';
        check=="PM";
       
    }



    if(hrs > 12){
        hrs = hrs - 12;
    }
 
 
    if(hrs<10){
        document.getElementById('hours').innerHTML = "0"+hrs;
    }else{
        document.getElementById('hours').innerHTML = hrs;
    }
    if(min<10)
    {
        document.getElementById('minutes').innerHTML = "0"+min;
    }else{
        document.getElementById('minutes').innerHTML = min;
    }
   
    document.getElementById('seconds').innerHTML = sec;
}
setInterval(displayTime, 10);



var dateTime = new Date(); 
var bgimg = document.getElementById('bgimg');
    let isMorning   = dateTime.getHours() > 5  && dateTime.getHours() <= 12;
    let isAfternoon = dateTime.getHours() > 12 && dateTime.getHours() <= 18;
    let isEvening   = dateTime.getHours() > 18 && dateTime.getHours() <= 22;
    let isNight     = dateTime.getHours() > 22 || dateTime.getHours() <= 5;
    let profile = document.getElementById('profile');
    let chatbox= document.getElementById('chatbox');

    var images=["images/morning.jpg","images/afternoon.jpg","images/evening.jpg","images/night.jpg"]
    var statuss = document.getElementById('status');
    var chat = document.getElementById('chat');
    if(isMorning){
        statuss.innerHTML="Good morning 🌄";
        chat.innerHTML="Good Luck enjoy your work."
        bgimg.setAttribute("src",images[0]);
    }
     if (isAfternoon){
        statuss.innerHTML="Good afternoon🕛";
        bgimg.setAttribute("src",images[1]);
        if(dateTime.getHours() > 12 && dateTime.getHours() <= 13)
        {
            chat.innerHTML="Please go to eat rice !"
        }
    }
    if(isEvening){
        statuss.innerHTML="Good Evening🌇";
        chat.innerHTML="Relax if you fell tired."
        bgimg.setAttribute("src",images[2]);
    }
    if(isNight)
    {
        statuss.innerHTML="Good Night🌃";
        chat.innerHTML="Sweet dream!"
        bgimg.setAttribute("src",images[3]);
        
    
    }
  
let porClick= false;    
    profile.addEventListener("click",function(){
        if(porClick)
        {
            chatbox.setAttribute("style","visibility:hidden");
            porClick=false;
        }else{
            chatbox.setAttribute("style","visibility:visible");
            porClick=true;
        }
      
    })

    profile.addEventListener("mouseover",function(){
        chatbox.setAttribute("style","visibility:visible");
      
    })
    profile.addEventListener("mouseleave",function(){
        if(porClick===false)
        {
        chatbox.setAttribute("style","visibility:hidden");
    }
    })