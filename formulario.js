var expr =  /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;

$(document).ready(function(){
	$("#enviar").click(function(){
		var nom = $("#nombre").val();
		var ema = $("#email").val();
		var sel = $("#selector").val();
		var tex = $("#textarea").val();

		if(nombre == ""){
			$("#mensaje_1").fadeIn();
			return false;
		}
	})
});