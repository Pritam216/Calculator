let display = document.getElementById("display");
let fullbody = document.getElementById("fullbody");
let mode=0;

function innertext(a){
    display.value += a;
}

function calculation(){
    try{
        display.value=eval(display.value);        
    }catch(error){
        display.value="Error";
    }
}

function del(){
    display.value=display.value.toString().slice('',-1);
}

function displayclear(){
    display.value= "" ;
}

function theme(){
    if(mode%2!=0){
        fullbody.style.backgroundColor= "rgb(252, 247, 247)";
        display.style.backgroundColor="white";
        display.style.border="2px solid black";
        display.style.color="black";
        mode=0;
    }
    else{
        fullbody.style.backgroundColor= "rgb(6, 68, 80)";
        display.style.backgroundColor="rgb(6, 68, 80)";
        display.style.border="none";
        display.style.color="white";
        mode=1;
    }
}