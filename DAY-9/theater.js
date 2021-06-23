const container = document.getElementById('container');
for(let i=0; i<252; i++){
    const div = document.createElement('div');
    div.classList.add('Box');
    div.classList.add('R_Seats');
    container.appendChild(div)
}
const boxes = document.querySelectorAll('div.Box')
var selected=document.querySelector("p.select").innerHTML;
var remaining=document.querySelector("p.remain").innerHTML;
parseInt(selected)
parseInt(remaining)

boxes.forEach(box => {
    box.addEventListener('click', ()=>{
       if (box.classList.contains('R_Seats')){
           box.classList.add('B_Seats');
           box.classList.remove('R_Seats');
           selected++;
           remaining--;
           document.querySelector("p.select").innerHTML=selected;
           document.querySelector("p.remain").innerHTML=remaining;
       }else{
        box.classList.remove('B_Seats');
        box.classList.add('R_Seats');
        remaining++;
        selected--;
        document.querySelector("p.select").innerHTML=selected;
        document.querySelector("p.remain").innerHTML=remaining;
       }
    })
});
