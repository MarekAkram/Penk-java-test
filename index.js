// 1. Palyginti du skaičius a ir b. Išvesti į konsolę, kuris didesnis arba jie lygūs. (4 taškai)
// 2. Naudojant for ciklą, išvesti į konsolę skaičius nuo 1 iki 10. (5 taškai)
// 3. Naudojant for ciklą, išvesti į konsolę skaičius nuo 0, 2, 4, 6, 8, 10. (5 taškai)
// 4. Naudojant for ciklą, sugeneruoti penkis atsitiktinius skaičius nuo 1 iki 10. Išvesti juos konsolėje. (5 taškai)
// 5. Naudojant while ciklą, spausdinti atsitiktinius skaičius nuo 1 iki 10. Paskutinis atspausdintas skaičius turi būti 5. (7 taškai)
// 6. Sukurti masyvą, kurio ilgis būtų nuo 20 iki 30, o reikšmės būtų skaičiai nuo 10 iki 30. Surasti didžiausią masyvo reikšmę, NENAUDOJANT sort() bei Math.max() funkcijų. (7 taškai)
// 7. Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 100. Suskaičiuokite kiek yra kiekvienos raidės. (7 taškai)
// 8. Parašyti funkciją - lygineSuma. Funkcijos parametrai - du kintamieji. Testų reikalavimai - abu kitamieji turi būti arba skaičiai arba masyvai(negali būti vienas skaičius, kitas masyvas).
// Jei kintamieji skaičiai, grąžinti skaičių sumą, jei kintamieji masyvai - grąžinti masyvų ilgių sumą. Jei abu kintamieji skaičiai arba masyvai, bet suma nelyginė - grąžinti tekstą, kad suma nelyginė. (10 taškų)
// 9. Parašyti funkciją pirminisSkaicius. Funkcija turi vieną kintamąjį. Turi būti patikrinimas, kad kintamasis yra skaičius. Funkcija turi grąžinti ar pateiktas skaičius yra pirminis( pirminis
// skaičius yra tas, kuris dalinasi tik iš savęs ir tik iš vieneto be liekanos.) (10 taškų)
// 10. Parašyti funkciją telefonoNumeris. Funkcija turi priimti vieną kintamąjį - masyvą. Masyvo elementai - skaičiai, ilgis - 10. Funkcija turi grąžinti telefono numerį tokiu formatu -
// "(XXX) XXX-XXXX". (10 taškų)

console.clear();
// 1. Palyginti du skaičius a ir b. Išvesti į konsolę, kuris didesnis arba jie lygūs. (4 taškai)

let a = 9;
let b = 4;

if (a > b) {
  console.log("a daugiau uz b", a);
}
if (a < b) {
  console.log("b daugiau uz a", b);
}
if (a === b) {
  console.log("abu skaiciai yra lygus", a, "=", b);
}

// 2. Naudojant for ciklą, išvesti į konsolę skaičius nuo 1 iki 10. (5 taškai)

for (let i = 1; i <= 10; ++i) {
  console.log(i);
}

//3. Naudojant for ciklą, išvesti į konsolę skaičius nuo 0, 2, 4, 6, 8, 10. (5 taškai)

for (let i = 0; i <= 10; i = i + 2) {
  console.log(i);
}

//4. Naudojant for ciklą, sugeneruoti penkis atsitiktinius skaičius nuo 1 iki 10. Išvesti juos konsolėje. (5 taškai)

function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(rand(1, 10));

// 5. Naudojant while ciklą, spausdinti atsitiktinius skaičius nuo 1 iki 10. Paskutinis atspausdintas skaičius turi būti 5. (7 taškai)
console.clear();
function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}
let last = 0;
while (last != 5) {
  last = rand(1, 10);
  if (last == 5) break;
  console.log(last);
}
console.log(last);

// 6. Sukurti masyvą, kurio ilgis būtų nuo 20 iki 30, o reikšmės būtų skaičiai nuo 10 iki 30. Surasti didžiausią masyvo reikšmę, NENAUDOJANT sort() bei Math.max() funkcijų. (7 taškai)
console.clear();
function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let array = [];
let newArray = [];

for (let i = 0; i < rand(20, 30); ++i) {
  array[i] = rand(10, 30);
  newArray.push(array[i]);
}
console.log("Naujas masyvas", newArray);

// 7. Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 100. Suskaičiuokite kiek yra kiekvienos raidės. (7 taškai)

const letters = ["A", "B", "C", "D"];
const arrayLength = 100;
const arr = [];

for (let i = 0; i < arrayLength; i++) {
  const randomIndex = Math.floor(Math.random() * letters.length);
  arr.push(letters[randomIndex]);
}

const count = {
  A: 0,
  B: 0,
  C: 0,
  D: 0,
};

for (let i = 0; i < arr.length; i++) {
  count[arr[i]]++;
}

console.log("Count of each letter:", count);

// 8. Parašyti funkciją - lygineSuma. Funkcijos parametrai - du kintamieji. Testų reikalavimai - abu kitamieji turi būti arba skaičiai arba masyvai(negali būti vienas skaičius, kitas masyvas).
// Jei kintamieji skaičiai, grąžinti skaičių sumą, jei kintamieji masyvai - grąžinti masyvų ilgių sumą. Jei abu kintamieji skaičiai arba masyvai, bet suma nelyginė - grąžinti tekstą, kad suma nelyginė. (10 taškų)
function evenSum(a, b) {
  if ((typeof a === 'number' && Array.isArray(b)) || (Array.isArray(a) && typeof b === 'number')) {
    return "Error. Vienas kintamasis turi būti skaičius, o kitas masyvas.";
  }

  if (typeof a === 'number' && typeof b === 'number') {
    const sum = a + b;
    if (sum % 2 === 0) {
      return sum;
    } else {
      return "Suma nelyginė.";
    }
  }

  if (Array.isArray(a) && Array.isArray(b)) {
    const sum = a.length + b.length;
    if (sum % 2 === 0) {
      return sum;
    } else {
      return "Suma nelyginė.";
    }
  }

  return "Error. Abu kintamieji turi būti skaičiai arba masyvai.";
}

// Pvz:
console.log(evenSum(2, 4)); //6 (suma yra lygi)
console.log(evenSum([1, 2, 3], [4, 5])); //5 (suma yra nelyginė)
console.log(evenSum([1, 2], 4)); // Suma nelyginė
console.log(evenSum(2, [1, 2, 3])); //Suma nelyginė
console.log(evenSum(7, [1, 2, 3])); // Err. Vienas kintamasis turi būti skaičius, o kitas – masyvas.
console.log(evenSum([1, 2], [3, 4])); //4 (suma yra lygi)
console.log(evenSum("hello", [1, 2])); //Err. Abu kintamieji turi būti skaičiai arba masyvai.

// 9. Parašyti funkciją pirminisSkaicius. Funkcija turi vieną kintamąjį. Turi būti patikrinimas, kad kintamasis yra skaičius. Funkcija turi grąžinti ar pateiktas skaičius yra pirminis( pirminis
// skaičius yra tas, kuris dalinasi tik iš savęs ir tik iš vieneto be liekanos.) (10 taškų)

function pirminisSkaicius(number) {
  if (typeof number !== "number" || !Number.isInteger(number) || number <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}
console.log(pirminisSkaicius(7)); 
console.log(pirminisSkaicius(12));
console.log(pirminisSkaicius(-5));

// 10. Parašyti funkciją telefonoNumeris. Funkcija turi priimti vieną kintamąjį - masyvą. Masyvo elementai - skaičiai, ilgis - 10. Funkcija turi grąžinti telefono numerį tokiu formatu -
// "(XXX) XXX-XXXX". (10 taškų)

function phoneNumber(numbers) {
  if (!Array.isArray(numbers)) {
    return "Error. Pateikite masyvą.";
  }

  if (numbers.length !== 10) {
    return "Error. Masyvo ilgis turi būti 10.";
  }

  const formattedNumber = numbers.join('');
  return `(${formattedNumber.slice(0, 3)}) ${formattedNumber.slice(3, 6)}-${formattedNumber.slice(6)}`;
}

// Pvz:
const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const formattedPhoneNumber = phoneNumber(numberArray);
console.log(formattedPhoneNumber);




