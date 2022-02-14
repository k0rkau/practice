"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false,
};

if (numberOfFilms < 10) {
    alert('Просмотрено довольно мало фильмов.');
} else if (numberOfFilms >= 10 && numberOfFilms <=30) {
    alert('Вы классический зритель.');
} else if (numberOfFilms > 30) {
    alert('Вы киноман.');
} else {
    alert('Произошла ошибка!');
}

// for (let i = 1; i <= numberOfFilms; i++) {
//     let lastViewdFilm = prompt("Один из последних просмотренных фильмов?", "");
//     let rate = +prompt("На сколько оцените его?", "");

//     if (lastViewdFilm == '' || rate == '') {
//         alert('Нельзя вводить пустую строку.');
//         i = 1;
//     } else if (lastViewdFilm === null || rate === null) {
//         alert('Нельзя отменять ввод.');
//         i = 1;
//     } else if (lastViewdFilm.length > 50) {
//         alert('Название фильма не должно превышать 50 символов.');
//         i = 1;
//     } 

//     personalMovieDB.movies[lastViewdFilm] = rate;
// }

// console.log(personalMovieDB);