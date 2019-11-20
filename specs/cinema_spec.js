const assert = require('assert');
const Cinema = require('../models/cinema.js');
const Film = require('../models/film.js');

describe('Cinema', function () {

  let moonlight;
  let bladeRunner;
  let dunkirk;
  let blackPanther;
  let trainspotting;
  let films;
  let cinema;

  beforeEach(function () {
    moonlight = new Film('Moonlight', 'drama', 2016, 111);
    bladeRunner = new Film('Blade Runner 2049', 'sci-fi', 2017, 164);
    dunkirk = new Film('Dunkirk', 'history', 2017, 96);
    blackPanther = new Film('Black Panther', 'action', 2018, 134);
    trainspotting = new Film('T2 Trainspotting', 'drama', 2017, 117);

    films = [moonlight, bladeRunner, dunkirk, blackPanther, trainspotting];
    cinema = new Cinema(films);
  });

  it('should have a collection of films', function () {
    const actual = cinema.films;
    assert.deepStrictEqual(actual, films);
  });

  it('should be able to get a list of film titles', function (){
    const actual = ['Moonlight', 'Blade Runner 2049', 'Dunkirk', 'Black Panther', 'T2 Trainspotting']
    assert.deepStrictEqual(actual, cinema.filmTitles());
  });

  it('should be able to find a film by title', function (){
    const actual = dunkirk
    assert.deepStrictEqual(actual, cinema.findByTitle('Dunkirk'));
  });

  it('should be able to filter films by genre', function (){
    const actual = [moonlight, trainspotting]
    assert.deepStrictEqual(actual, cinema.findByGenre('drama'));
  });



  it('should be able to check whether there are some films from a particular year', function (){
    const actual = [blackPanther]
    assert.deepStrictEqual(actual, cinema.findByYear(2018))
  });



  it('should be able to check whether there are no films from a particular year', function (){
    const actual = false
    assert.strictEqual(actual, cinema.filmForAYear(2015))
  });



  it('should be able to check whether all films are over a particular length', function (){
    const actual = false
    assert.strictEqual(actual, cinema.lengthOver(160))
  });


  it('should be able to calculate total running time of all films', function (){
    const actual = 622;
    assert.strictEqual(actual, cinema.totalRuntime())
  });

});
