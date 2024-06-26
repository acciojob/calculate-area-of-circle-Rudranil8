 function calculateArea() {
	 let radius = prompt("Enter the radius of the circle:");
	 let p=3.14;
	 let x=(p*radius*radius).toFixed(2);
	 alert(`the area of the circle with radius ${radius} is ${x}`);
}
calculateArea();
