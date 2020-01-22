let calc=0;
let string="0";
let prev=null,equal=null;                                                       //operators set to null

const screen= document.querySelector(".user-operands");                         

function show(){
    screen.innerText=string;                                                    //shows output on calculator
}

function itsNumber(value){

    if(equal===null){                                                           //takes first two numbers
        if (string==="0"){
            string=value;
        }
        else{
            string+=value;
        }
    }
    else if(equal!==null&&prev===null){                                         //previous result act as first operand
        itsSym("C");
        string=value;
    }
    else{
        // calc=0;                                                             
        equal=null;
        string=value;
    }
}

function operation(value){
 
    if(prev==="+"){
        calc+=value;
    }
    else if(prev==="-"){
        calc-=value;
    }
    else if(prev==="×"){
        calc*=value;
    }
    else {
        calc/=value;
    }
}

function itsMath(value){
    if(string==="0")
    return;
    const number=parseInt(string);
    if(calc===0){
        calc=number;                                                         //if it is a first number
    }
    else{
        operation(number);                                                  //it's a second number
    }
    prev=value;                                                             //stores recent operator
    string="0";
}

function itsSym(value){
    switch(value){                                                          
        case "C":                                                          // clearing buffer and output screen.
            string="0";
            calc=0;
            equal=null;
            prev=null;
            break;

        case "=":
            if(prev===null){                                               //if there is only one number
                return;
            }
           
            else{
                operation(parseInt(string));                              //does calculation & prints on screen.
                prev=null;
                string= calc;
                calc=0;
                equal=value;
                break;
            }

        case "←":
            if(string.length===1){                                        
                string="0";
            }        
            else{
                string=string.toString();                                   /*type conversion of Number to String 
                                                                                so that we can apply substring().*/
                string=string.substring(0,string.length-1);
                // trimming buffer from backwards if user backspaces
                console.log(typeof(string));
                
            }
            break;

         default: itsMath(value);
                   break;   
    }
}

function buttonClick(value){

    if(isNaN(parseInt(value))){
        itsSym(value);                                         //directing if it is a other than symbol
    }
    else{
        itsNumber(value);                                     //directing if it is a number(0-9)
    }
    show();
}

// btn=document.querySelectorAll(".b");
// for(var eve of btn){
//     eve.addEventListener("click", function(event){

//         buttonClick(event.target.innerText);
//     });
// }
document.querySelectorAll(".b").
forEach(vari => vari.addEventListener("click", function(event){
        buttonClick(event.target.innerText);                          //catching values what user has clicked on.
    })
)


