// declaring variables
let myTextbox = <HTMLInputElement>document.getElementById("box");
let userInput = myTextbox.value;
let someVar = "joe";
// calling function
test();
test("1", "2");

function test(firstName:string, lastName:string){
    alert(someVar);
}