"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false,
};

const questions = [
    "Один из последних просмотренных фильмов?",
    "На сколько оцените его?",
]

for (let i = 1; i <= numberOfFilms; i++) {
    let lastViewdFilm = prompt("Один из последних просмотренных фильмов?", "");
    let rate = prompt("На сколько оцените его?", "");

    personalMovieDB.movies[lastViewdFilm] = rate;
}

console.log(personalMovieDB);