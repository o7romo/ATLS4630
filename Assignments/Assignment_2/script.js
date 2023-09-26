
function manipulate(form){
    document.getElementById("theName").innerHTML = form.name.value;
    document.getElementById("theDescription").innerHTML = form.message.value;
    document.getElementById("theSeason").innerHTML = form.season.value;
    var name = form.color.value;
    document.body.style.background = name;
    alert(name);
}