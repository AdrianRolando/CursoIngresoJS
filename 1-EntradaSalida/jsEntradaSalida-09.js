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
	
    //Asignación
	importe = txtIdSueldo.value;
	importePars = parseInt(importe);

	//Calcular aumento del 10%
	importeConAumento = (importePars * 1.10);

	//Mostrar aumento en el ID
	txtIdResultado.value = importeConAumento;

	



	
}
