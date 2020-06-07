const numberOfFilms = prompt('Сколько фильмов Вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const lastFilm = prompt('Один из последних просмотренных фильмов?', '');
const rating = prompt('На сколько оцените его?', '');

personalMovieDB.movies[lastFilm] = rating;

console.log(personalMovieDB);

