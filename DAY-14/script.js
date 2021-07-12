function play_video() {
    alert('video is playing');
}

function clicked() {
    var cont = document.querySelector(".container");
    console.log(cont);
    cont.classList.toggle("cl");
}

function pause_video() {
    alert('video is paused');
}

function hover_here() {
    var hov = document.querySelector(".hoverme");
    console.log(hov);
    hov.classList.toggle("cl2");
}

function m_over() {
    document.getElementById("demo").innerHTML = "Moused over!<br>";
  }
  
  function m_out() {
    document.getElementById("demo").innerHTML = "Moused out!<br>";
  }