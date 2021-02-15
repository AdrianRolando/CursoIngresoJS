/*una agencia de viajes debe sacar las tarifas de los viajes , se cobra $15.000 por cada estadia como base, se pide el ingreso de una estacion del año y localidad para vacacionar para poder calcular el precio final

en Invierno: bariloche tiene un aumento del 20% cataratas y Cordoba tiene un descuento del 10% Mar del plata tiene un descuento del 20%

en Verano: bariloche tiene un descuento del 20% cataratas y Cordoba tiene un aumento del 10% Mar del plata tiene un aumento del 20%

en Otoño y Primavera: bariloche tiene un aumento del 10% cataratas tiene un aumento del 10% Mar del plata tiene un aumento del 10% y Cordoba tiene el precio sin descuento*/

function mostrar()
{
	var estadia;
	var estacionDelAño;
	var localidad;
	var precioConDescuento;
	var precioConAumento;
	var descuento;
	var aumento;

	estadia = 15000;
	estacionDelAño = txtIdEstacion.value;
	localidad = txtIdDestino.value;
	
	switch (estacionDelAño) {
		case "Invierno":
			if(localidad == "Bariloche"){
				aumento = 0.20;
				precioConAumento = estadia + (estadia * aumento);
				alert("El precio de estadia es de " + precioConAumento);
			}
			else if(localidad == "Mar del plata"){
				descuento = 0.20;
				precioConDescuento = estadia - (estadia * descuento);
				alert("El precio de estadia es de " + precioConDescuento);
			}
			else{
				descuento = 0.10;
				precioConDescuento = estadia - (estadia * descuento);
				alert("El precio de estadia es de " + precioConDescuento);
			}
		break;
		case "Verano":
			if(localidad == "Bariloche"){
				descuento = 0.20;
				precioConDescuento = estadia - (estadia * descuento);
				alert("El precio de estadia es de " + precioConDescuento);
			}
			else if(localidad == "Mar del plata"){
				aumento = 0.20;
				precioConAumento = estadia + (estadia * aumento);
				alert("El precio de estadia es de " + precioConAumento);
			}
			else{
				aumento = 0.10;
				precioConAumento = estadia + (estadia * aumento);
				alert("El precio de estadia es de " + precioConAumento);
			}
		break;
		default:
			if(localidad == "Bariloche" || localidad == "Cataratas" || localidad == "Mar del plata"){
				aumento = 0.10;
				precioConAumento = estadia + (estadia * aumento);
				alert("El precio de estadia es de " + precioConAumento);
			}
			else{
				alert("El precio de estadia es de "+ estadia); 
			}
		break;
	}
}//FIN DE LA FUNCIÓN