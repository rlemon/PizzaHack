(function(){ 

	var pizzas = document.getElementById("pizzas");
	var res = db.exec("SELECT * FROM piizas LIMIT 5");
	var table = "<table class='bordered striped hoverable centered'>"
	for(var i = 0; i < res.values.length; i++){
		var value = res.values[i];
		table += "<tr><td><img src='http://lorempizza.com/100/100?breaker="+(new Date())+ "' /></td><td>" + value[0] + "</td><td>" + value[1] + "</td><td>" + value[2] + "</td></tr>"
	}
	table += "</table>";
	pizzas.innerHTML = table;
})();
