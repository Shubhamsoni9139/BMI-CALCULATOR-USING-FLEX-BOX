var weight , height,measure,error;
function show(){
    weight=document.getElementById("name").value;
    const name=document.getElementById("name").value;
    height=document.getElementById("height").value;
    age=document.getElementById("age").value;

    error="plese enter some values";
    height /= 100;
	height *= height;
    bmi = weight/height;
	bmi = bmi.toFixed(1);

    if(bmi<=18.4){
        measure="hello " +name+" your bmi is "+bmi+"which means you are under weigth";
    }
    else if (bmi >= 18.5 && bmi <= 24.9){
        measure="hello " +name+" your bmi is "+bmi+"which means you are normal";
    }
    else if (bmi >= 25 && bmi <= 29.9){
        measure="hello " +name+" your bmi is "+bmi+"which means you are  overweigth";
    }
    else if (bmi >= 30){
        measure="hello " +name+" your bmi is "+bmi+"which means you are obese";
    }
    
    if(weight==0){
        document.getElementById("show").innerHTML = error;
    }
    else if(height==0){
        document.getElementById("show").innerHTML = error;
    }
    else{
        document.getElementById("show").innerHTML = measure;
    }
    if (weight < 0) {
		document.getElementById("show").innerHTML = "Negative Values not Allowed";
	}
}