let btn = document.querySelector(".btn_1w");
let num = 5;
let form = document.querySelector(".icon_1w");
// let 2_w = document.querySelector("first_2w")
let w_2 = document.querySelector('.first_2w')


btn.onclick = function() {
    if (form.value == num) {
        alert(form.value + " Правильно");
        alert(form.value + " очень");
        w_2.style.display = "block";
        form.style.background = "black";

    } else if (form.value != num) {
        alert("Вы ввели " + form.value + ", а надо ввести " + num);
    }
};
