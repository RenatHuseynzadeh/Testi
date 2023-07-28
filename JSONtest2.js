// 1
// обычна функция

// 2
// функция сохранённая в переменной

// 3
// стрелочное

// 4
function fun1() {
    console.log('Запуск');
}

fun1()

// 5

function fun2(a, b) {
    console.log(a+b);
}

fun2(4, 5)

// 6
// function sum(text='text', age=24) {
    // return `${text} ${age}`;
// }

const xxx = function (text='text', age=24) {return `${text} ${age}`}


// 7
const fun4 = new Function("a", "b", "return a + b")
let x = fun4(6, 5)

// 8
// да можно,думаю не стоит
// это подьём функции
// 9
//  (function () {
    //  console.log('Запуск');
//  }())


// 10
// я бы описал их так:своего рода переменные слуги,помогают при работе.Могут иметь постоянное значение или качдый раз менять его


// 11
function sum(text, age) {
    console.log(`{${text} и ${age}}`);
}

sum('text', 24);

// 12
function sum2(text = "some text", age) {
    console.log(text);
}

sum2()

// 13

function sum3(text, age, job) {
    console.log(`${text}, ${age} и ${job}`);
    
}    

sum3("Renat", 11, "skola")

// 14
const person22 = {
    firstFunc: function() {
        console.log(`${this.firstName} ${this.lastName}`);
    }
}

const person1 = {
    firstName: 'Samuil',
    lastName: 'Farzaliyev'
}


person22.firstFunc.call(person1)


// 15
const person33 = {
    firstFunc: function() {
        console.log(`${this.firstName} ${this.lastName}`);
    }
}

const person11 = {
    firstName: 'Samuil',
    lastName: 'Farzaliyev'
}

person33.firstFunc.apply(person11)




// 16
// applay

// 17
// Math.max()

// 18
// пример:
console.log(Math.max.apply(null, [1, 2, 3]));   

// 19
// Math.max()

// 20
console.log(Math.min.apply(null, [1, 2, 3]));   
