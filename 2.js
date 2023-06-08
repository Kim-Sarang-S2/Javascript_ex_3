
let number = document.querySelector('h1');

// console.log(number);


function plus(event){
    let plus_value = parseInt(number.innerText, 10) + 1;
    // parseInt -> 문자열을 숫자로 변환. 쉼표 뒤 숫자는 n진수를 표현
    number.innerText = plus_value;
}

function minus(event){
    let minus_value = parseInt(number.innerText, 10) - 1;
    number.innerText = minus_value;
}

function reset(event){
    let defalut = 0;
    number.innerText = defalut;
}

