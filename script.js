//remove button ids

function eva(){
    document.getElementById("input").value = eval(document.getElementById("input").value)
}

function input(value){
    document.getElementById("input").value+=value
}

function reset(){
    document.getElementById("input").value=""
}