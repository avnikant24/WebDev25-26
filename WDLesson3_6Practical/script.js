// Challenge 2:  Create the function for the Average program.  Refer to the resource link in the HTML for assistance.
function calculateAverage(){
    let g1 = parseFloat(document.getElementById("g1").value);
    let g2 = parseFloat(document.getElementById("g2").value);
    let g3 = parseFloat(document.getElementById("g3").value);
    let output = document.getElementById("output");
    let avg = (g1 + g2 + g3)/3;
    output.innerHTML = `The average of all 3 grades is ${avg}`;
}
// Challenge 4:  Create the function for the Slope program.  Refer to the resource link in the HTML for assistance.
function slope(){
    let x1 = parseFloat(document.getElementById("x1").value);
    let y1 = parseFloat(document.getElementById("y1").value);
    let x2 = parseFloat(document.getElementById("x2").value);
    let y2 = parseFloat(document.getElementById("y2").value);
    let output2 = document.getElementById("output2");
    let m = (y2-y1)/(x2-x1);
    output2.innerHTML = `Slope between points (${x1}, ${y1}) and (${x2}, ${y2}) is ${m}`;
}

// Challenge 6:  Create the function for the BMI program.  Refer to the resource link in the HTML for assistance.
function bmi(){
    let height = parseFloat(document.getElementById("height").value);
    let weight = parseFloat(document.getElementById("weight").value);
    let output3 = document.getElementById("output3");
    let bmi = 703 * weight / (height ** 2)
    output3.innerHTML = `The BMI is ${bmi}`;
}