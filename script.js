 function calculateArea() {
	 let radius = Number(prompt("Enter the radius of the circle:"));
	 let p=Math.PI;
	 let x=(p*radius*radius).toFixed(2);
	 alert(`the area of the circle with radius ${radius} is ${x}`);
}

// calculateArea();
