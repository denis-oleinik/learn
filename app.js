const numberOfFilms = prompt('Сколько фильмов Вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
for(let i = 0; i < 2; i++){
    const lastFilm = prompt('Один из последних просмотренных фильмов?', ''),
        rating = prompt('На сколько оцените его?', '');
    personalMovieDB.movies[lastFilm] = rating;
}

console.log(personalMovieDB);

