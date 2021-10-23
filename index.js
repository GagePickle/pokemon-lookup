$(function() 
	{
	$('#getJoke').bind({
		click: function() {
			$.ajax({
				url: "http://api.icndb.com/jokes/random",
				type: "GET",
			success: function (data) {
				$("#jokeData").empty();
				$.each(data, function (id, value) {
				$("#jokeData").append(value.joke);});
			},
			error: function (data) {
				alert("An error occurred while loading.");
			}
			,})	
		}
	});
	
	$('#getPokemon').bind({
		click: function() {
			let userInput = $("input").val();
			$.ajax({
				url: "https://pokeapi.co/api/v2/pokemon/" + userInput,
				type: "GET",
			success: function (data) {	
					
				if (data.types[1]) {
					$("#pokemonData").empty();
					let pokemonData = 
					`Pokedex Number: ${data.id} <br> 
					Pokemon's Name: ${data.name} <br>
					Pokemon's type(s): ${data.types[0].type.name} and ${data.types[1].type.name}`;
					
					let pokemonImg = document.createElement("img");
						pokemonImg.src = `${data.sprites.front_default}`;
						pokemonImg.height = 300;
						pokemonImg.width = 300;
					
					$("#pokemonData").append(pokemonData);
					$("#pokemonData").append(pokemonImg);
					
				} else {
					$("#pokemonData").empty();
					let pokemonData =					
					`Pokedex Number: ${data.id} <br> 
					Pokemon's Name: ${data.name} <br>
					Pokemon's type(s): ${data.types[0].type.name}`;
					
					let pokemonImg = document.createElement("img");
						pokemonImg.src = `${data.sprites.front_default}`;
						pokemonImg.height = 300;
						pokemonImg.width = 300;
					
					$("#pokemonData").append(pokemonData);
					$("#pokemonData").append(pokemonImg);
			}				
			},
			error: function (data) {
				alert("An error occurred while loading.");
			}
			,})	
		}
	});
});
