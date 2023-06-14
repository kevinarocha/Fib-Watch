// get the values from the Page
//starts or controller function
function getValues(){
    //get values from the page
    let endValue = document.getElementById("endValue").value;
    let numbers = [];

    //We need to validate our input
    //parse into Integers
    endValue = parseInt(endValue);


    if(Number.isInteger(endValue)){
        //we call generateNumbers
        numbers = generateNumbers(endValue);
        //we call displayNumbers
        displayNumbers(numbers);

    }else{
        alert("You must enter integers");
    }

    
}

// generates the fibonacci sequence in order when called upon
var fibGenerator = function*() {
    let n1=0,n2=1,i=0;
    while(true){
        if(i==0){
            i++;
            yield 0;
        }
        if(i==1){
            i++;
            yield 1;
        }
        let ans = n1 + n2;
        n1 = n2;
        n2 = ans;
        yield ans;
    }
 };



// generate numbers from startvalue to the endValue
//logic functions(s)
function generateNumbers(eValue){
    let numbers = [];
    const gen = fibGenerator();
    // we want to get all numbers from start to end
    
    for(let index = 0; index <= eValue; index++){
        // this will execute in a loop until index = eValue
        
        //numbers.push(index);
        numbers.push(gen.next().value);
    }
    
    return numbers;
}



//display or view functions
function displayNumbers(numbers){

    let templateRows = "";

    for (let index = 0; index < numbers.length; index++) {
        
        // sets the font 
        let className = "set";
         let number = numbers[index];

        templateRows += `<tr><td class="${className}" >${number}</td></tr>`;
    }

    document.getElementById("results").innerHTML = templateRows;

}