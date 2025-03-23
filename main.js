let field1 = "Hello";
let field2 = "World";
if (field1 !== "" && field2 !== "") {
    console.log("Обидва поля заповнені");
} else {
    console.log("Не всі поля заповнені");
}
let num1 = 7;
let num2 = 5;
let sum = num1 + num2;
if (sum > 10) {
    console.log("Сума більша за 10");
} else {
    console.log("Сума менша або дорівнює 10");
}
let text = "Я вивчаю JavaScript!";
if (text.includes("JavaScript")) {
    console.log("Текст містить слово JavaScript");
} else {
    console.log("Текст не містить слово JavaScript");
}
let number = 15;
if (number > 10 && number < 20) {
    console.log("Число входить в діапазон від 10 до 20");
} else {
    console.log("Число не входить в діапазон від 10 до 20");
}
let userName = "Alex";
let email = "alex@example.com";
let password = "securePass";
if (userName.length >= 3 && email.includes("@") && email.includes(".") && password.length >= 6) {
    console.log("Перенаправлення на іншу сторінку");
} else {
    console.log("Помилка: неправильне заповнення");
}