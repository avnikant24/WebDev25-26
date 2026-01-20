/* Challenge 2: Complete the area and perimeter functions below for the rectangle.  Guidelines,
      1) Create variables and retrieve the information from the text inputs you created in Challenge 1.
      2) Perform the necessary calculations
      3) Display the results in the appropriate element
*/
function recArea(){
      let n1 = parseFloat(document.getElementById("l").value);
      let n2 = parseFloat(document.getElementById("w").value);
      let area = n1 * n2;
      let op = document.getElementById("output").innerHTML = "The area of the rectangle is " + area;
}

function recPerimeter(){
      let n1 = parseFloat(document.getElementById("l").value);
      let n2 = parseFloat(document.getElementById("w").value);
      let perimeter = 2 * (n1 + n2);
      let op = document.getElementById("output").innerHTML = "The perimeter of the rectangle is " + perimeter;

}
/* Challenge 4: Complete the area and circumference functions below for the circle.  Guidelines,
      1) Create variables and retrieve the information from the text inputs you created in Challenge 3.
      2) Perform the necessary calculations
      3) Display the results in the appropriate element
*/
let pi = 3.1415926;

function cirArea(){
      let r = parseFloat(document.getElementById("rad").value);
      let op = parseFloat(document.getElementById("output").value);
      let A = pi * (r**2);
      let op = document.getElementById("output").innerHTML = "The area of the circle is " + A;
}
 
function cirPerimeter(){
      let r = parseFloat(document.getElementById("rad").value);
      let circumference = 2 * pi * r;
      let op = document.getElementById("output").innerHTML = "The perimeter of the circle is " + circumference;
}

/* Challenge Bonus: Complete the area and perimeter functions below for the triangle.  Guidelines,
      1) Create variables and retrieve the information from the text inputs you.
      2) Perform the necessary calculations
      3) Display the results in the appropriate element
*/
function triArea(){


function triPerimeter(){

}