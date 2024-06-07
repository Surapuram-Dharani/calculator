let box = document.getElementById("box");
function display(num){
    box.value += num;
}
function calculate(){
    try{
        box.value = eval(box.value);
    }
    catch(err){
        alert("invalid");
    }
}
function Clear(){
    box.value = "";
}
function del(){
    box.value = box.value.slice(0,-1);
}