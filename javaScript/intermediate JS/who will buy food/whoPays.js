var names=[];

function whosPaying(names) {
    
    /******Don't change the code above*******/
        
        //Write your code here.
    var namesLength = names.length;
        
    var person = Math.floor(Math.random()*namesLength)    ;
    alert(person);
        
    var output= names[person]+" is going to buy lunch today!";
        
        
    return     output; 
    
    
    /******Don't change the code below*******/    
    }