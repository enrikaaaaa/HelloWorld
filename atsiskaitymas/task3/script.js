/* ------------------------------ TASK 3 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */
function Calculator(a,b) {
    this.a = a;
    this.b = b;
    this.sum = function () { //Funkcija sumos skaiciavimui
      return a + b;
    };
    this.subtraction = function () { //Funkcija skirtumo skaiciavimui
      return a - b;  
    };
    this.multiplication = function () { //Funkcija daugybos skaiciavimui
        return a * b;
   };
    this.division = function () { //Funkcija dalybos skaiciavimui
         return a/b;
    };
  }
  
  const create = new Calculator(10, 20); //Sukuriam naują objekta, jei reikia nors ir 20
  console.log(`Suma yra ${create.sum()}`);  //Isvedam i console sumą
  console.log(`Skirtumas yra ${create.subtraction()}`);   //Isvedam i console skirtumą
  console.log(`Daugyba : ${create.multiplication()}`);  //Isvedam i console daugybą
  console.log(`Dalyba : ${create.division().toFixed(2)}`);  //Isvedam i console dalybą su 2 skaičiais po kablelio