/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{   
	//Declaración
	var dividendo;
	var divisor;
	var resultado;

	//Asignación
	dividendo = txtIdNumeroDividendo.value;
	divisor = txtIdNumeroDivisor.value;
	
	resultado = (parseInt(dividendo) % parseInt(divisor));

	//Mostrar
	alert("El resto de esta división es " + resultado);
}
