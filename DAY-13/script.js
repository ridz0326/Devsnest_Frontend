var btn=document.querySelector("button");
var cont=document.querySelector(".container");

btn.addEventListener('click', async() => {
    var q = await fetch("https://api.quotable.io/random")
    .then(res => res.json())
    .then(data => data.content);

    var div=document.createElement('div')
    div.classList.add('quote')

    div.innerHTML=q;
    cont.appendChild(div)
})

var reset=document.querySelector(".res")

reset.addEventListener('click', () => {
    window.location.reload();
})


