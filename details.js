const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('gameID');
var requestDetails = new XMLHttpRequest();
requestDetails.open('GET', 'https://games-world.herokuapp.com/games/'+ myParam );

requestDetails.onreadystatechange = function() {
	if ((requestDetails.readyState === 4) && (requestDetails.status===200)) {
		var items = JSON.parse(requestDetails.responseText);
		var output = '<ul>';
		output += '<li>';
		output += '<h2>' + items.title+ '</h2>';
		output += '<p>' + '<b>Genre: </b>' + items.genre + '</p>';
		output += '<img src = ' + items.imageUrl + '>';
		output += '<p>' + '<b>Description: </b><br>' + items.description + '</p>';
		output += '<p>' + '<b>Puplisher: </b>' + items.publisher + '</p>';
		output += '<p>' + items.releaseDate + '</p>';
		output += '</li>';
		output += '</ul>';
		document.getElementById('populate').innerHTML = output;
	}
}
requestDetails.send();



/*var requestUpdate = new XMLHttpRequest();
requestUpdate.open('PUT', 'https://games-world.herokuapp.com/games/'+ myParam );
requestUpdate.onreadystatechange = function(){
	if ((requestUpdate.readyState === 4) && (requestUpdate.status === 200)) {
		var items = JSON.parse(requestUpdate.responseText);
		
	}
}
requestUpdate.send();*/