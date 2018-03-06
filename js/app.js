let endpoint = "https://swapi.co/api/films/";
let $container = $('#movie-container');
const modal = result => {
	console.log(result);
	$('#myModal').modal('show');
	$('.modal-title').text(result.name);
	$('#height').text('Height: '+ result.height);
	$('#mass').text('Mass: '+ result.mass);
	$('#hair').text('Hair color: '+ result.hair_color);
	$('#skin').text('Skin color: '+ result.skin_color);
}

const getCharactersDetails = e => {
	e.preventDefault();
	let charEndpoint = e.target.innerText;
	fetch(charEndpoint)
		.then(response => {
			response.json().then(result => {
				modal(result);
			})
		})
}

const addEvent = classList => {
	let arrayClassList = Array.from(classList);
	arrayClassList.forEach(element => {
		element.addEventListener('click', getCharactersDetails);
	})
}

const showMovies = response => {
	console.log(response);
	let films = response.results;
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
	let classList = document.getElementsByClassName('character-list');
	addEvent(classList);
}

const handleError = () => {
	console.log("eror");
}

loadPage = () => {
    $.ajax({
    url : endpoint,
  }).done(showMovies)
  .fail(handleError);
}


$(document).ready(loadPage);