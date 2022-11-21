// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result = []
  result = array.map(x => x.director)
  //console.log("EXERCICE 1 ->", result);//
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  let result = []
  result = array.filter(x => x.director === director)
  //console.log("EXERCICE 2 ->", result);//
  return result;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {

  const directorFilms = array.filter(x => x.director === director);
  const scores = directorFilms.map(film => film.score);
  const scoresMovies = scores.length

  const scoreTotal = scores.reduce((a, b) => (a + b))
  let result = Number((scoreTotal / scoresMovies).toFixed(2));
  return result

}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {

  titles = array.map(x => x.title)
  orderedTitles = titles.sort()
  firstTwentyTitles = orderedTitles.slice(0, 20)
  return firstTwentyTitles

}

// Exercise 5: Order by year, ascending // he afegit jo l'array.
function orderByYear(array) {
  
 let movies = array.map(x => x);
  let orderedMovies = movies.sort((a, b) => {
    if (a.year === b.year){
      if (a.title > b.title){
        return 1;
      } else {
      return -1;
      }
    } else {
      return a.year - b.year;
    }
  });
  return orderedMovies;
  
}


// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory() {

}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {

}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
