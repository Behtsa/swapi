let endpoint = "https://swapi.co/api/films/";
let $container = $('#movie-container');
const showMovies = response => {
	let films = response.results;
	console.log(films);
	let movie = " ";
	films.forEach(function(film){
		let title = film.title;
		let episode = film.episode_id;
		let characters = film.characters;
		characters.forEach(function(character){
			let url = character;
			console.log(url);
		})
		movie += `<ul>
		<h6>Titulo: ${title}</h6>
		<p>Episodio: ${episode}<p>
		</ul>`
		$container.html(movie);
	})
}

const handleError = () => {
	console.log("eror");
}

// fetch("https://swapi.co/api/films/")
// .then(showMovies)
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