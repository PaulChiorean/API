var request = new XMLHttpRequest();
request.open('GET', 'https://games-world.herokuapp.com/games/');
function deleteitem(id) {
	console.log("delete functiom");
	var requestDelete = new XMLHttpRequest();
	requestDelete.open('DELETE', 'https://games-world.herokuapp.com/games/' + id);
	requestDelete.send();
}
function regenerateDb(){
	var requestDb = new XMLHttpRequest();
    requestDb.open('GET', 'https://games-world.herokuapp.com/regenerate-games');
    requestDb.send();
}
function createGame(){
	var requestcreateGame = new XMLHttpRequest();
	requestcreateGame.open('POST', 'https://games-world.herokuapp.com/games');
	requestcreateGame.send();
}
request.onreadystatechange = function() {
	if ((request.readyState === 4) && (request.status===200)) {
		var items = JSON.parse(request.responseText);
		var output = '<ul>';
		for (var key in items) {
			output += '<li>';
			output += '<h2>' + items[key].title + '</h2>';
			output += '<img src = ' + items[key].imageUrl + '>';
			output += '</li>';
			output += '<button onclick="deleteitem(\'' + items[key]._id +'\')">Delete</button>'
			output += '<a href=details.html?gameID=' + items[key]._id +'>More information</a>'
		}
			
		output += '</ul>';
		document.getElementById('update').innerHTML = output;
		var output1 = '<button onclick = "regenerateDb()">Regenerate DB</button>'
		document.getElementById('foot').innerHTML = output1;
		
	}
}

request.send();




/*$.getJSON('https://games-world.herokuapp.com/games', function(data) {
	var output = '<ul id="update">';
	$.each(data, function(key, val){
		output += '<li>';
		output += '<h2>' + val.title + '</h2>';
        output += '<img src = ' + val.imageUrl + '>';
        output += '<p>' + val.description + '</p>'
		output += '</li>';

	});
	output += '</ul>';
	$('.update').html(output);
});
*/
