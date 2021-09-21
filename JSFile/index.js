function click1(){
    document.calculator.display.value+=1;

}
function click2(){
    document.calculator.display.value+=2;
    
}
function click3(){
    document.calculator.display.value+=3;
    
}
function click4(){
    document.calculator.display.value+=4;
    
}
function click5(){
    document.calculator.display.value+=5;
    
}
function click6(){
    document.calculator.display.value+=6;
    
}
function click7(){
    document.calculator.display.value+=7;
    
}
function click8(){
    document.calculator.display.value+=8;
    
}
function click9(){
    document.calculator.display.value+=9;
    
}
function click0(){
    document.calculator.display.value+=0;
    
}
function dot(){
    document.calculator.display.value+=".";
    
}
function plus(){
    document.calculator.display.value+="+";
    
}
function substrction(){
    document.calculator.display.value+="-";
    
}
function div(){
    document.calculator.display.value+="/";
    
}
function into(){
    document.calculator.display.value+="*";
    
}

function clr(){
    document.calculator.display.value=" ";
    
}
function square(){
    document.calculator.display.value=Math.pow(document.calculator.display.value,2)
    
}
function resto3(){
    document.calculator.display.value=Math.pow(document.calculator.display.value,3)
    
}

function BACKSPC(){
    var a= document.calculator.display.value;
    document.calculator.display.value= a.substr(0, a.length-1);

}


let history=document.getElementById('phistory');
function calculation(v){
    para = document.createElement('p');

    data = v+ "=" +eval(v);
    para.innerText=data;
    history.appendChild(para);
    return eval(v);


}