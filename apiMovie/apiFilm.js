function fetchFilm()
    {
    return fetch('https://api.themoviedb.org/3/movie/1895?language=fr-FR') /*Ajouter votre clé API ici*/
    .then((response) => response.json())
}


async function displayMovie() {
    const data  = await fetchFilm();
    document.getElementById('star-wars-3').innerHTML = `
        <h1>${data.title}</h1>
        <img src="https://image.tmdb.org/t/p/w500${data.poster_path}" alt="${data.title}"/>
    `;
    }
