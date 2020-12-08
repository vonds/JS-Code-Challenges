// https://www.codewars.com/kata/52e1476c8147a7547a000811
function validate(password) {
    let regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])[A-Za-z0-9]{6,}$/;
    return regex.test(password);
}