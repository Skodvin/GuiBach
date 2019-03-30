
function readTextFile(file) {
		var rawFile = new XMLHttpRequest();
		rawFile.open("GET", file, false);
		rawFile.onreadystatechange = function (results) {
			if(rawFile.readyState === 4)
			{
				if(rawFile.status === 200 || rawFile.status === 0)
				{
					var allText = rawFile.responseText;
					results = allText.split("|");
					
					updateJQUERY(results);	
				}
			}

		} 
		rawFile.send(null);
}

setInterval(function(){
readTextFile("/js/test.txt");

},5000);


function updateJQUERY(results) {
    
    $(document).ready(function(){

	console.log(results);
	document.getElementById("transfer").innerHTML = results[0] + "kB";
	document.getElementById("bandwidth").innerHTML = results[1] + "kb/sec";
	document.getElementById("jitter").innerHTML = results[2]+ "ms";
	document.getElementById("packetLoss").innerHTML = results[3];
	document.getElementById("packetLossPerc").innerHTML = results[4]+ "%";
    
    /*
        if (x < 2.5) {
            document.getElementById("eks").innerHTML = x + ' <i class="fas fa-times-circle" style="color:red;"></i>';
            document.getElementById("status").innerHTML = 'IKKE OK';
            document.getElementById("statusBakgrunn").style.backgroundColor = "red";
        } else {
            document.getElementById("eks").innerHTML = x + ' <i class="fas fa-check-circle" style="color:green;"></i>';
            document.getElementById("status").innerHTML = 'OK';
            document.getElementById("statusBakgrunn").style.backgroundColor = "green";
        }
    */
    });
}


