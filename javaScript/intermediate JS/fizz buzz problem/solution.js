var i = 1;
var output = []; 
function fizzBuzz(){
if(i%3 === 0 && i%5 === 0){
output.push("fizzBuzz");
}
else if(i%5===0)
{
output.push("buzz")
}
else if(i%3===0)
{
output.push("fizz");
}else{
output.push(i);
}
i++;
console.log(output);
}