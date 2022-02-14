"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
console.log(numberOfFilms);


let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false,
};


const lastViewdFilm = prompt("Один из последних просмотренных фильмов?", "");
const rate = prompt("На сколько оцените его?", "");

personalMovieDB.movies[lastViewdFilm] = rate
console.log(personalMovieDB)
