const cssPromise = {};

function loadResource(src) {
  if (src.endsWith('.js')) {
    return import(src);
  }
  if (src.endsWith('.css')) {
    if (!cssPromise[src]) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = src;
      cssPromise[src] = new Promise(resolve => {
        link.addEventListener('load', () => resolve());
      })
      document.head.append(link);
    }
    return cssPromise[src]
  }
  return fetch(src).then(res => res.json());
}

const appContainer = document.getElementById('app');
// const searchParams = new URLSearchParams(location.search);
// const filmId = searchParams.get('filmId');

function resources(array, listTitle) {
  array.forEach(el => fetch(el).then(function(responce) {
    return responce.json();
    })
    .then(function(json) {
      let name = json.result.properties.name;
      const listEl = document.createElement('li');
      listTitle.append(listEl);
      listEl.textContent = name;
    })
  )
};

export function renderPage(modulName, apiUrl, css) {
  Promise.all([modulName, apiUrl, css].map(src => loadResource(src)))
  .then(([pageModule, data]) => {
    appContainer.innerHTML = '';
    appContainer.append(pageModule.render(data));
    let searchParams = new URLSearchParams(location.search);
    let filmId = searchParams.get('filmId');

    if (filmId) {
      let arrPlanets = data.result.properties.planets.map(i => i);
      let arrSpecies = data.result.properties.species.map(i => i);
      let arrStarships = data.result.properties.starships.map(i => i);
      const planetsListTitle = document.getElementById('planets-list');
      const speciesListTitle = document.getElementById('species-list');
      const starshipsListTitle = document.getElementById('starships-list');

    return Promise.all([
      fetch(arrPlanets),
      fetch(arrSpecies),
      fetch(arrStarships),
      ]).then(([planetsData, speciesData, starshipsData]) => {
        resources(arrPlanets, planetsListTitle);
        resources(arrSpecies, speciesListTitle);
        resources(arrStarships, starshipsListTitle);
      return {planetsData, speciesData, starshipsData}
    })}

  });
}

renderPage(
  './films-list.js',
  `https://swapi.tech/api/films`,
  'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css',
);

window.addEventListener('popstate', (event) => {
  if (window.history.state !== null) {
    renderPage(
      './film-details.js',
      `https://swapi.tech/api/films/${event.state}`,
      'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css',
      );
    } else {
    renderPage(
      './films-list.js',
      `https://swapi.tech/api/films`,
      'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css',
      );
  }
});

