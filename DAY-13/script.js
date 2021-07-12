var btn=document.querySelector("button");
var cont=document.querySelector(".container");

let i = 0;

btn.addEventListener('click', () => {
    fetch("https://type.fit/api/quotes")
    .then(res => res.json())
    .then(data => content(data[i]));
    function content(data){
        i++;
        var div=document.createElement('div')
        div.classList.add('quote')

        div.innerHTML=`${data.text}`;
        cont.appendChild(div)
    }
    
})

var reset=document.querySelector(".res")

reset.addEventListener('click', () => {
    window.location.reload();
})


