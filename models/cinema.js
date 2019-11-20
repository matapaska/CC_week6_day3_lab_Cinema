const Film = require('./film.js');

const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.filmTitles = function (){
  const titles = this.films.map(film => film.title)
  return titles;
};

Cinema.prototype.findByTitle = function (title){
  const found_film = this.films.filter(film => film.title == title);
  return found_film[0];
};

Cinema.prototype.findByGenre = function(genre){
  const found_films = this.films.filter(film => film.genre == genre);
  return found_films;
};

Cinema.prototype.findByYear = function(year){
  const found_films = this.films.filter(film => film.year == year);
  return found_films;
};

Cinema.prototype.filmForAYear = function(year){
  if (this.findByYear(year).length === 0){
    return false;
  }
  else{
    return true;
  }
}

Cinema.prototype.lengthOver = function(runtime){
  const filtered_out = this.films.filter(film => film.length < runtime)
  if (filtered_out.length === 0){
    return true
  }
  else {
    return false}
}

Cinema.prototype.totalRuntime = function(){
  // const times = this.films.map(film => film.length);

  const runtime = this.films.reduce((total, film) => {
    return total + film.length;
  }, 0);
  return runtime;
}


moonlight = new Film('Moonlight', 'drama', 2016, 111);
bladeRunner = new Film('Blade Runner 2049', 'sci-fi', 2017, 164);
dunkirk = new Film('Dunkirk', 'history', 2017, 96);
blackPanther = new Film('Black Panther', 'action', 2018, 134);
trainspotting = new Film('T2 Trainspotting', 'drama', 2017, 117);

films = [moonlight, bladeRunner, dunkirk, blackPanther, trainspotting];
cinema = new Cinema(films);

console.log(cinema.totalRuntime);


module.exports = Cinema;
