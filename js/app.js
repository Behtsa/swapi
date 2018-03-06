let endpoint = "https://swapi.co/api/films/";
let $container = $('#movie-container');

const showPerformers = characters => {
	let character = " ";
	characters.forEach(function (performer){
		let urlName = performer;
		character += `<li>
		<p>Personaje: ${urlName}<p>
		</li>`
	})
	$performers.html(character);
}

const showMovies = response => {
	let films = response.results;
	//console.log(films);
	let movieTemplate = ` `;
	let charactersTemplate = ` `;
	films.forEach(function(film){
		let title = film.title;
		let episode = film.episode_id;
		let characters = film.characters;
		characters.forEach(character => {
			charactersTemplate += `<a href="#modal1"><li class="character-list" data-url=${character} data-toggle="modal" data-target="#modal1">${character}</li></a>`
		});
		movieTemplate += `<div class = "wrapper">
		<h6>Titulo: ${title}</h6>
		<p>Episodio: ${episode}<p>
		<ul>${charactersTemplate}</ul>
		</div>`
	});
	$container.html(movieTemplate);
}

const handleError = () => {
	console.log("eror");
}

// fetch("https://swapi.co/api/films/")
// .then()
// .catch(function(err){
// 	console.log("There is an error")
// })


loadPage = () => {
    $.ajax({
    url : endpoint,
  }).done(showMovies)
  .fail(handleError);
}


$(document).ready(loadPage);