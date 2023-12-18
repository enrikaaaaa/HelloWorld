/* ------------------------------ TASK 4 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri gebės sukurti objektus 3 savybėm ir 1 metodu.

Savybės:
title: string
director: string
budget: number

Metodas: 
wasExpensive() - jeigu filmo "budget" yra daugiau nei 100 000 000 mln USD, tada grąžins true, kitu atveju false. 
------------------------------------------------------------------------------------------------------ */
class Movie {
    constructor (title, director, budget) {
    this.title = title;
    this.director = director;
    this.budget = budget;     
   }   
 wasExpensive() {
     if (this.budget > 10) { //Jei biudžetas didesnis nei 10
         return true; //Gražinam true jei tenkina salyga
     } else {
         return false; //Jei mazesnis gražinam false
     }
 }
}
const movie = new Movie('Titanikas', 'Kazkas', 200); //Sukuriam naują objekta
console.log(movie.wasExpensive()); //Isvedam i console apskaiciavimus tenkina salyga ar ne
const movie2 = new Movie('Haris Poteris', 'Vel kazkas', 5); //Sukuriam naują objekta
console.log(movie2.wasExpensive()); //Isvedam i console apskaiciavimus tenkina salyga ar ne
 