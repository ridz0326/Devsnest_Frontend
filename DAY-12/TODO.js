if (localStorage.getItem("item") == null) {
    var t = "";
}else {
    t = localStorage.getItem("item");
}

window.onload = function(){
    if (localStorage.getItem("item") == null){

    }else {
        u.innerHTML = localStorage.getItem("item");
    }
}

var inp = document.querySelector("#add_items");

inp.addEventListener('keypress', function(e){
    console.log(e.code);
    if (e.code === "Enter") {
        addItem();
    }
})

var u = document.querySelector("ul.app_cont");

function addItem() {
    var str = document.getElementById("add_items").value;
    console.log(str)
    if (str) {
        var list_item = `<li onclick = "delete_item(this)">${str}<span><i class="fad fa-trash" aria-hidden="true"></i></span></li>`;
        t += list_item;
        localStorage.setItem("item", t);
        document.getElementById("app_container").innerHTML+=list_item;
        document.getElementById("add_items").value = "";
    }else {
        alert("Enter a to-do");
    }
}

function delete_item(e) {
   e.remove();
   localStorage.removeItem("item");
   t = document.querySelector("ul.app_cont").innerHTML;
   localStorage.setItem("item", t);
}

var pl = document.querySelector("#plus");
pl.addEventListener('click', function(){
    document.getElementById("add_items").classList.toggle('visible');
});
