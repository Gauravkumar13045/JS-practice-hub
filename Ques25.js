// 25. Create a simple calculator using if...else that supports add, subtract, multiply, divide.

function calculator(a,b, operator){

    

    function add(a,b){
     let add = a + b;
     console.log(add);
     return add;

    }

    function sub(a,b){
     let sub = a - b;
     console.log(sub);
     return sub;
    }

    function multi(a,b){
     let multi = a * b;
     console.log(multi);
     return multi;

    }

    function div(a,b){
     let div = a / b;
     console.log(div);

     return div;
    }



    if(operator === "add"){
        return add(a,b);
    }else if(operator === "sub"){
        return sub(a, b);
    }else if(operator === "multi"){
        return multi(a,b);
    }else if (operator === "div"){
        return div(a,b);
    }else {
        return "Invalid operator";
    }


    
}

calculator (5,4, "add");
 