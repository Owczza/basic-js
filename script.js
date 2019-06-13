/****************************************************************************************************
 Część 0:
 Dodaj poprawnie plik 'script.js' do pliku index.html.
 Wyświetl w konsoli: 'Poprawnie dodany skrypt';
 */

// Kod dla części 0 poniżej:

console.log("Poprawnie dodany skrypt")

/****************************************************************************************************
 Część 1 Tablice:
 Input: [11, -10, 50, 5, -8, 9, 20, 21, -4, 11, -5, -12, 100, 20, 14, 8, 19, 44, -21, -53, 17, -21]

 1.1 Policz sumę wszytskich elementów tablicy
 Output: '1.1 Suma elementów w tablicy: 215'

 1.2 Policz sumę wartości bezwględnych w tablicy
 Output: '1.2 Suma wartości bezwględnych z elementów w tablicy: 483'

 1.3 Wyświetl tylko elementy większe lub równe od 20:
 Output: '1.3 Elementy większe lub równe od 20: 50,20,21,100,20,44'

 1.4 Wyświetl sumę elementów tylko ujemnych:
 Output: '1.4 Sume elementów ujemnych: -134'

 1.5* (+0,25pkt) Wyświetl sumę elemnetów na pozycjach parzystych:
 Output: '1.5 Suma elementów parzystych: 193'

 */

// Kod dla części 1 poniżej:

var input = [11, -10, 50, 5, -8, 9, 20, 21, -4, 11, -5, -12, 100, 20, 14, 8, 19, 44, -21, -53, 17, -21];

//1.1

var addInput = 0;

for (var i = 0; i < input.length; i++) {
    var totalInput = addInput += input[i];
    //TODO tutaj nie jest pptrzbena dodatkowa zmienna
};

console.log("1.1 Suma elementów w tablicy: " + totalInput);

//1.2
var addAbsInput = 0;

for (var i = 0; i < input.length; i++) {
    var totalAbsInput = addAbsInput += Math.abs(input[i]);
    //TODO tutaj nie jest pptrzbena dodatkowa zmienna
};

console.log("1.2 Suma wartości bezwzględnych z elementów w tablicy: " + totalAbsInput);

//1.3

var moreThanTwenty = [];

for (var i = 0; i < input.length; i++) {
    if (input[i] >= 20) {
        moreThanTwenty.push(input[i]);
    };
};

console.log("1.3 Elementy większe lub równe od 20: " + moreThanTwenty);

//1.4

var lessThanZero = 0;

for (var i = 0; i < input.length; i++) {
    if (input[i] < 0){
        var totalLessThanZero = lessThanZero += input[i];
        //TODO tutaj nie jest pptrzbena dodatkowa zmienna
    };
};

console.log("1.4 Sume elementów ujemnych: " + totalLessThanZero);

/****************************************************************************************************
 Część 2 Pętle + funkcje:

 2.1 Napisz funkcję, która przyjmuje 2 argumenty (2 obiekty z kluczami name oraz age)
 i zwraca ten obiekt, która ma większą wartość age. Następnie ze zwróconego obiektu wyświetl jego imię.
 Input: {name: 'Jasio', age: 8} , {name: 'Kazio', age: 11}
 Output: '2.1 Starszy jest: Kazio'

 2.2 Napisz pętle, która iteruje od 1 do 50 i na każdej wielokrotności 3 wyświetl Fizz, na każdej wielokrotności 5 Buzz,
 a na wielokrotności 3 i 5 FizzBuzz;
 Output: '2.2: Fizz Buzz Fizz Fizz Buzz Fizz FizzBuzz Fizz Buzz Fizz Fizz Buzz Fizz FizzBuzz Fizz Buzz Fizz Fizz Buzz Fizz FizzBuzz Fizz Buzz'

 2.3 Napisz funkcję, która przyjmuje 3 parametry (2x number, 1x string jako operator (dostępne +,-,/,*) i zwraca wartość wyniku:
 Input: 1, '+', 2    Output: '2.3.1: 3'
 Input: 20, '-', 3   Output: '2.3.2: 17'
 Input: -1, '*', 8   Output: '2.3.3: -8'
 Input: 4, '/', 2    Output: '2.3.4: 2'
 Input: 5, '!', 5    Output: '2.3.5: Nie znany operator'
 Input: 4, '/', 0    Output: '2.3.6: Nie można dzielić przez zero'

 2.4 Napisz funkcję, która przyjmuje 2 parametry (znak, liczbę), która wyświetli ciąg znaków połączony '-' ale nie więcej niż 10 znaków.
 Input: $, 5         Output: $-$-$-$-$
 Input: $, 17        Output: $-$-$-$-$-$-$-$-$-$

 2.5* (+0,25pkt) Napisz pętle, która zwróci dany ciąg znaków w konsoli (dokładnie w takiej strukturze).
 Output: '2.5:
 *
 * *
 * * *
 * * * *
 * * * * *

 */

// Kod dla części 2 poniżej:

//2.1

var Jasio = {name: 'Jasio', age: 8};
var Kazio = {name: 'Kazio', age: 11};

function checkAge (boy1, boy2) {
    if (boy1.age > boy2.age) {
        return boy1.name;
    } else {
        return boy2.name;
    };
    //TODO gdy będą mieć tyle samo to zawsze dostanę drugiego chłopca
};

console.log("2.1: " + checkAge(Jasio, Kazio));

//2.2

var divisible = "";
var finalNumber = "";
var number = 1;

while (number <= 50) {
    if (number / 15 == 0) {
        var finalNumber = divisible += "FizzBuzz ";
        //TODO co każde wywoałanie deklarujesz nową zmienną
    } else if (number / 5 == 0) {
        var finalNumber = divisible += "Buzz ";
    } else if (number / 3 == 0){
        var finalNumber = divisible += "Fizz ";
    };
    number++;
};

console.log("2.2: " + finalNumber);
//TODO nic się nie wyświetla

//2.3

function operators (number1, string, number2) {
    if (string == "!") {
        return "Nie znany operator";
        //TODO a jak to nie będzie !  tylko ^
    } else if (number2 == 0) {
        return "Nie można dzielić przez zero";
        //TODO ale mnożyć mogę przez zero, a ten kod mi nie pozwoli
    } else {
        return eval(number1 + string + number2);
    }
};

console.log("2.3.1: " + operators(1, '+', 2));
console.log("2.3.2: " + operators(20, '-', 3));
console.log("2.3.3: " + operators(-1, '*', 8));
console.log("2.3.4: " + operators(4, '/', 2));
console.log("2.3.5: " + operators(5, '!', 5));
console.log("2.3.6: " + operators(4, '/', 0));

//2.4

function repeatSymbol (symbol, number) {
    var modifiedSymbol = symbol + "-";
    if (number < 10) {
        var repeatedSymbol = modifiedSymbol.repeat(number);
        return repeatedSymbol.slice(0, repeatedSymbol.length-1);
    } else {
        var repeatedSymbol = modifiedSymbol.repeat(10);
        return repeatedSymbol.slice(0, repeatedSymbol.length-1);
    };
};

console.log("2.4.1: " + repeatSymbol("$", 5));
console.log("2.4.2: " + repeatSymbol("$", 17));

//2.5

/*var asterisk = "*"

function */

/****************************************************************************************************
 Część 3 Obiekty:

 3.1 Napisz obiekt 'pacient' z kluczami: name, surname, status oraz changeStatus. Pierwsze trzy mają przyjmować zmienną
 typu string a ostatnia ma być metodą (funkcją), która zmienia status danego pacjenta.
 Input: pacient.status = 'chory' pacient.changeStatus
 Output: '3.1 pacient.status: zdrowy'
 Input: pacient.status = 'zdrowy' pacient.changeStatus
 Output: '3.1 pacient.status: chory'

 3.2 Napisz pętle, która stworzy tablicę obiektów z kluczami name oraz price. Wartość name powinna być
 taka sama jak wartość tablicy natomiast price ma wstawiać losową liczbę (maksymalnie 3 cyfrowa).
 Input: ['IPhone 4S', 'Samsung S5', 'Huawei 5', 'LG 7']
 Output: '3.2: [
 {name: 'IPhone 4S', price: losowa liczba <= 999},
 {name: 'Samsung S5', price: losowa liczba <= 999},
 {name: 'Huawei 5', price: losowa liczba <= 999},
 {name: 'LG 7', price: losowa liczba <= 999}
 ]'

 3.3 Napisz pętle wyświetlającą nazwę pizzy i jej składniki w nawiasie oraz po myślniku cenę.
 Input: [
 {name: 'Margarita', price: 15, ingredients: ['ser', 'sos', 'oregano']},
 {name: 'Roma', price: 18, ingredients: ['ser', 'sos', 'szynka', 'pieczarki']},
 {name: 'Salami', price: 18, ingredients: ['ser', 'sos', 'salami']}
 ]
 Output: '3.3:
 Margarita (ser, sos, oregano) - 15
 Roma (ser, sos, szynka, pieczarki) - 18
 Salami (ser, sos, salami) - 18'

 3.4 Wyświetl wartość w konsoli z obiektu labyrinth:
 a) 'Garfield'
 b) 'elephant'
 c) 'flying'
 Input: labirynth = {
        animals: [
            { name: 'Pluto', species: 'dog' },
            { name: 'Garfield', species: 'cat' },
            { name: 'Simba', species: 'lion' },
            { name: 'Maniek', species: 'elephant' }
        ],
        nonAnimals: [
            { name: 'R2D2', species: 'robot', skills: ['fixing', 'flying'] },
            { name: 'C3PO', species: 'robot', skills: ['talking'] }
        ],
        showAnimals: function() { console.log(this.animals) },
        showNonAnimals: function() { console.log(this.nonAnimals) }
    }
 Output: '3.4: a) Garfield b) elephant c) flying'

 3.5* (+0,25pkt) Utwórz obiekt o nazwie SoftwareUsers z kluczami users i addUser. W users ma być tablicą użytkowników (obiektów z kluczami
 name, surname, id) - pusta na początku. W addUser ma być funkcją przyjmująca dwa argumenty name i surname,
 która dodaje nowego użytkownika do tablicy w users z *unikatowym* id.
 Input: SoftwareUsers.add('Jan', 'Kowalski') SoftwareUsers.add('Janina', 'Kowalska')
 Output: '3.5:
 [{ name: 'Jan', surname: 'Kowalski', id: 1},
 { name: 'Janina', surname: 'Kowalska', id: 2}]

 */

// Kod dla części 3 poniżej:

//3.1

var pacient = {
    name: "Jack",
    surname: "Smith",
    status: "zdrowy",
    changeStatus: function(status){
        this.status = status;
        if (this.status == "zdrowy") {
            return this.status = "chory";
        } else if (this.status == "chory") {
            return this.status = "zdrowy";
        }
    },
}

    pacient.status = "chory";
    pacient.changeStatus;
    console.log("3.1.1 pacient.status ", pacient.status);

    pacient.status = "zdrowy";
    pacient.changeStatus;
    console.log("3.1.2 pacient.status ", pacient.status);


//3.2

/*var phonesArray = ['IPhone 4S', 'Samsung S5', 'Huawei 5', 'LG 7'];

function phonePrice (phones) {
    for (var i = 0; i < phones.length; i) {
        var randomNumber = Math.random() * (999-1) + 1;
        var phonesWithPrice = {
            name: phones[i],
            price: randomNumber,
        }
        phones.push(phonesWithPrice);
    }   
}

console.log("3.2: " + phonePrice(phonesArray));*/

//3.3

pizzaTime = [
    {name: 'Margarita', price: 15, ingredients: ['ser', 'sos', 'oregano']},
    {name: 'Roma', price: 18, ingredients: ['ser', 'sos', 'szynka', 'pieczarki']},
    {name: 'Salami', price: 18, ingredients: ['ser', 'sos', 'salami']},
    ];

for (var i = 0; i < pizzaTime.length; i++) {
    var pizzaString = pizzaTime[i].name + " (" + pizzaTime[i].ingredients + ") - " + pizzaTime[i].price;
    pizzaTime[i] = pizzaString;
    //TODO tutaj zamieniasz wejściową tablice
}

console.log("3.3:", pizzaTime);

//3.4

var labirynth = {
    animals: [
        { name: 'Pluto', species: 'dog' },
        { name: 'Garfield', species: 'cat' },
        { name: 'Simba', species: 'lion' },
        { name: 'Maniek', species: 'elephant' }
    ],
    nonAnimals: [
        { name: 'R2D2', species: 'robot', skills: ['fixing', 'flying'] },
        { name: 'C3PO', species: 'robot', skills: ['talking'] }
    ],
    showAnimals: function() { console.log(this.animals) },
    showNonAnimals: function() { console.log(this.nonAnimals) }
};

console.log("3.4 a) " + labirynth.animals[1].name + " b) " + labirynth.animals[3].species + " c) " + labirynth.nonAnimals[0].skills[1]);

//3.5


/****************************************************************************************************
 Część 4 String:

 4.1 Napisz funkcję, która zwraca stringa z dużą pierwszą literę.
 Input: uppercaseFirstLetter('kamil') Output: '4.1.1: Kamil'
 Input: uppercaseFirstLetter(12) Output: '4.1.2: to nie jest string'

 4.2 Wyczyść podane stringi z znaków '$' (użyj pętli, zwróć tablicę).
 Input: ['K$$ami$$l', '$$Jan$ek', 'Kr$$z$ych$u', 'M$$ich$$ał$']
 Output: '4.2: ['Kamil', 'Janek', 'Krzychu', Michał']'

 4.3 Rozdziel podane stringi na dwa odrębne (zwróć tablicę):
 Input: ['Jan Kowalski', 'Janina Kowalska', 'Kamil Stoch']
 Output: '4.3: ['Jan', 'Kowalski', 'Janina', 'Kowalska', 'Kamil', 'Stoch']'

 4.4 Dodaj dodatkowy klucz do obiektu 'fullName', który będzie zawierał połączenie dwóch stringów.
 Input: [{name: 'Jan', surname: 'Kowalski'}, {name: 'Janina', surname: 'Kowalska'}]
 Output: '4.4: [{name: 'Jan', surname: 'Kowalski', fullName: 'Jan Kowalski'},
 {name: 'Janina', surname: 'Kowalska', fullName: 'Janina Kowalska'}]'

 4.5* (+0,25pkt) Stwórz metodą createInitials, która przyjmuje obiekt z dwoma kluczami name i surname
 oraz zwraca inicjały:
 Input: createInitials({name: 'Jan', surname: 'Kowalski'})   Output: '4.5.1: JK'
 Input: createInitials({name: 'Jan', surname: null})         Output: '4.5.2: J'
 Input: createInitials({name: null, surname: 'Kowalski'})    Output: '4.5.3: K'
 Input: createInitials({name: null, surname: null})          Output: '4.5.4: XX'

 */

// Kod dla części 4 poniżej:

//4.1

function toUpperCase (string) {
    return string.charAt(0).toUpperCase() + string.substr(1).toLowerCase()
}

function uppercaseFirstLetter (text) {
    if (typeof text === "string" || text instanceof String){
        return toUpperCase(text);
    }  else if (typeof text === "number" || typeof text === "boolean" || typeof text === "object" || typeof text === undefined){
        //TODO po co to całe sprawdzenie? wystarczy tylko dać else
        return "to nie jest string"
    };
}

console.log("4.1.1: " + uppercaseFirstLetter("kamil"));
console.log("4.1.2: " + uppercaseFirstLetter("12"));

//4.2

var badNames = ['K$$ami$$l', '$$Jan$ek', 'Kr$$z$ych$u', 'M$$ich$$ał$'];

var goodNames = [];

for (var i = 0; i < badNames.length; i++) {
    var initName = badNames[i];
    var splitName =  initName.split("$");
    var gluedName = "";
        for (var j = 0; j < splitName.length; j++) {
            var finalName = gluedName += splitName[j];
        };
    goodNames.push(finalName);
};

console.log("4.2: ");
console.log(goodNames);

//4.3

var firstNameLastName = ['Jan Kowalski', 'Janina Kowalska', 'Kamil Stoch'];

var firstOrLastName = [];

for (var i = 0; i < firstNameLastName.length; i++) {
    var initFullName = firstNameLastName[i];
    var splitFullName = initFullName.split(" ");
        for (var j = 0; j < splitFullName.length; j++){
            firstOrLastName.push(splitFullName[j]);
        };
};

console.log("4.3: ");
console.log(firstOrLastName);

//4.4

var nameBase = [{name: 'Jan', surname: 'Kowalski'}, {name: 'Janina', surname: 'Kowalska'}];

for (var i = 0; i < nameBase.length; i++) {
    var fullNameBase = nameBase[i];
    var wholeName = fullNameBase.name + " " + fullNameBase.surname;
    //TODO nie potrzebna zmienna, wystarczy dodać nameBase[i].fullName = ...
};


console.log("4.4: " + nameBase);
//TODO nic się nie wyświetla

//4.5

