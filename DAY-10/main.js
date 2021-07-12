let word=["Omnism", "Dolent", "Dern", "Enigmatic", "Shoshin", "Kalopsia", "Nepenthe","Ridhima"];
var words=[...word, ...word];
let moves=30;
let matches=0;
let gameBegin=true;
let Data;

for(let i=0; i<16; i++){
    let card=document.createElement("div");
    card.classList.add("flip-card");

    let inner=document.createElement("div");
    inner.classList.add("flip-inner");

    let front=document.createElement("div");
    front.classList.add("front");

    let back=document.createElement("div");
    back.classList.add("back");

    let rand=Math.floor(Math.random()*(16-i));

    back.innerHTML="<h2>"+words[rand]+"</h2>";
    words.splice(rand, 1);

    inner.appendChild(front);
    inner.appendChild(back);
    
    card.appendChild(inner);
    document.getElementById("grid").appendChild(card);
    
}

var turn = document.querySelectorAll(".flip-card");

turn.forEach(c => {
    c.addEventListener('click', () => {
        moves--;
        document.getElementById('moves').innerHTML=moves;

        if(!Data){
            Data=c;
            c.firstChild.classList.add('flipped');

        }
        else{

            c.firstChild.classList.add('flipped')

            setTimeout(() => {

                if(c.firstChild.lastChild.innerHTML!==Data.firstChild.lastChild.innerHTML)
                {
                    c.firstChild.classList.remove('flipped');
                    Data.firstChild.classList.remove('flipped');

                }
                else{
                    matches++;
                    c.style.visibility="hidden";
                    Data.style.visibility="hidden";
                    document.getElementById("matches").innerHTML=matches;

                }
                Data=undefined;

            }, 500);
        }
    })
});

var popup=document.querySelector(".popup")
var btn=document.querySelector(".shadow")
var result=document.querySelector(".res")
var cont=document.querySelector(".container")
setInterval(() => {
    if(matches == 8){
        cont.style.display="none";
        popup.style.display="flex";
        result.innerHTML="You Won!" 
        btn.addEventListener('click',() => {
            location.reload();
        })
    }
    if(moves == 0){
        cont.style.display="none";
        popup.style.display="flex";
        result.innerHTML="You Lost!"
        btn.addEventListener('click',() => {
            location.reload();
        })
    }
} ,500)
