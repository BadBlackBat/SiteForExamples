export function render(data) {

  const container = document.createElement('div');
  const filmDetails = data.result.properties;
  container.classList.add('container-md', 'py-5');
  const mainTitle = document.createElement('h1');
  const filmTitle = document.createElement('h2');
  const episodeNum = document.createElement('p');
  const releaseDate = document.createElement('span');
  const episodeDescr = document.createElement('p');
  const filmDetailContainer = document.createElement('div');
  const titlePlanets = document.createElement('h2');
  const titleSpecies = document.createElement('h2');
  const titleStarships = document.createElement('h2');
  const planetsListTitle = document.createElement('ul');
  const speciesListTitle = document.createElement('ul');
  const starshipsListTitle = document.createElement('ul');
  const backBtn = document.createElement('a');

  planetsListTitle.id = 'planets-list';
  speciesListTitle.id = 'species-list';
  starshipsListTitle.id = 'starships-list';

  backBtn.href = './index.html';
  backBtn.textContent = 'Back to episodes...'
  mainTitle.textContent = 'STAR WARS';
  filmTitle.textContent = filmDetails.title;
  episodeNum.textContent = `Episode - ${filmDetails.episode_id}`;
  releaseDate.textContent = `Release date: ${filmDetails.release_date}`;
  episodeDescr.textContent = filmDetails.opening_crawl;
  titlePlanets.textContent = 'Planets';
  titleSpecies.textContent = 'Species';
  titleStarships.textContent = 'Starships';

  container.append(backBtn);
  container.append(mainTitle);
  container.append(filmTitle);
  container.append(episodeNum);
  container.append(releaseDate);
  container.append(episodeDescr);
  container.append(filmDetailContainer);
  filmDetailContainer.append(titlePlanets);
  filmDetailContainer.append(planetsListTitle);
  filmDetailContainer.append(titleSpecies);
  filmDetailContainer.append(speciesListTitle);
  filmDetailContainer.append(titleStarships);
  filmDetailContainer.append(starshipsListTitle);

  return container;
};
