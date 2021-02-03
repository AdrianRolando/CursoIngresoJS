/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	//Declaración
	var importe;
	var importePars;
	var importeConAumento;
	
    //Asignación mediante ID
	importe = txtIdSueldo.value;

	//Cambiamos el valor string al tipo de dato int con parseInt()
	importePars = parseInt(importe);

	//Calcular aumento del 10%
	importeConAumento = (importePars * 1.10);

	//Mostrar aumento en el ID
	txtIdResultado.value = importeConAumento;

	



	
}
