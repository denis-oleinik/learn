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

    if(lastFilm != null && rating != null && lastFilm != '' && rating != '' && lastFilm.length < 50){
        personalMovieDB.movies[lastFilm] = rating;
    }else{
        alert('Чтобы продолжить необходимо заполнить данные');
        i--;
    }
    
}
let viewer = '';
if(personalMovieDB.count < 10) {
    viewer = 'Просмотрено довольно мало фильмов';
}else if(personalMovieDB.count < 30) {
    viewer = 'Вы классический зритель';
}else{
    viewer = 'Вы киноман';
}

alert(viewer);


