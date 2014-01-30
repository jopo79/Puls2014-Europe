var base_url="http://query.yahooapis.com/v1/public/yql?";

function obtenerGeoInformacion(lat,lon){
	var  query = "select * from geo.placefinder WHERE text='"+lat+", "+lon+"'";
	query += " AND gflags='R'";
	/*Sirve para transformarlo en uri */
	query = encodeURIComponent(query);
	/* podemos recibir dataype html, json, jsonp=json preparado para procesar*/
	var opciones = {
		url : base_url + "q=" + query,
		datatype : 'jsonp',
		jsonpCallback: 'geocallback',
		data: {
			format : 'json'
		}
	}
	$.ajax(opciones);

}
function geocallback(datos){
	console.log(datos);
}