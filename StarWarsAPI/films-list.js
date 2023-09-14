let { renderPage } = await import ("./main.js");

export function render(data) {
  const container = document.createElement('ul');
  container.classList.add('container-md', 'py-5', 'list-group');

  for (const film of data.result) {
    const filmListLink = document.createElement('a');
    const filmCard = document.createElement('div');
    const filmTitle = document.createElement('h4');
    const filmDate = document.createElement('p');
    const episode = document.createElement('span');

    filmListLink.classList.add('list-group-item', 'btn', 'btn-outline-dark', 'border-0');
    filmCard.classList.add('me-auto');
    filmTitle.classList.add('fw-bold');
    episode.classList.add('badge', 'bg-warning', 'text-dark', 'rounded-pill');

    filmListLink.append(filmCard);
    filmListLink.append(episode);
    filmCard.append(filmTitle);
    filmCard.append(filmDate);

    filmTitle.textContent = film.properties.title;
    filmDate.textContent = film.properties.release_date;
    episode.textContent = `Episode ${film.properties.episode_id}`;
    filmListLink.href = `?filmId=${film.uid}`;

    container.append(filmListLink);

    filmListLink.addEventListener('click', (e) => {
      e.preventDefault();
      history.pushState('null', 'null', filmListLink.href);
      const filmId = new URLSearchParams(location.search).get('filmId');
      renderPage(
        './film-details.js',
        `https://swapi.tech/api/films/${filmId}`,
        'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css',
      );
    })

  }
  return container
}
