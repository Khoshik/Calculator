function clearScreen(){
    document.getElementById("show").value="";
}
function display(temp){
    document.getElementById("show").value+=temp;
}
function equate(){
    let equation=document.getElementById("show").value;
    let result=eval(equation);
    document.getElementById("show").value=result;
}