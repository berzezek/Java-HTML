let btn = document.querySelector(".btn__first");
let num = 5;
let form = document.querySelector(".icon__first");

let w_1 = document.querySelector(".first");
let w_2 = document.querySelector(".second");
let w_3 = document.querySelector(".third");
let w_4 = document.querySelector(".fourth");
let w_5 = document.querySelector(".complete");

btn.onclick = function() {
    if (form.value == num) {
        alert("Правильно, переходим ко второму заданию");
        w_2.style.display = "block";
        form.style.background = "#858585";
        btn.style.background = "#858585"
        w_1.style.display = "none";


    } else if (form.value != num) {
        alert("Вы ввели " + form.value + ", а надо ввести " + num + "!");
    }
};

let btn_2 = document.querySelector(".btn__second");
let form_2 = document.querySelector(".icon__second");

btn_2.onclick = function () {
    form_2.innerHTML = "Размер окна в px: " + window.innerWidth + " " + window.innerHeight;
    btn_2.innerHTML = "Далее";
    btn_2.onclick = function () {
    w_2.style.display = "none";
    w_3.style.display = "block";
    }
};

let font_bold = document.querySelectorAll(".third b");
let btn_3w = document.querySelector(".btn__third");

font_bold.forEach((item) => {
    item.onmouseover = function() {
        item.style.color = "blue";
    };
    item.onmouseout = function () {
        item.style.color = "black";
    };
});

let inputPar = document.querySelector(".primer");
let form_3 = document.querySelector(".icon__third");

inputPar.onmouseover = function () {
    form_3.style.display = "block";
    }

inputPar.onmouseleave = function () {
    form_3.style.display = "none";
}

inputPar.onmousemove = function (e) {
    form_3.style.left = e.pageX + "px";
    form_3.style.top = e.pageY + "px";

}

btn_3w.onclick = function () {
    w_3.style.display = "none";
    w_4.style.display = "block";
}

let btn_4w = document.querySelector(".btn_fourth");
form_4 = document.querySelector(".icon__fourth");

btn_4w.onclick = function () {
    form_4.innerHTML = "Аттрибут 'type': " + w_4.getAttribute('type') + "<br>" + "Аттрибут 'hreflang': " + w_4.getAttribute('hreflang') + "<br>" +  "Аттрибут 'rel': " + w_4.getAttribute('rel') + "<br>" + "Аттрибут 'target': " + w_4.getAttribute('target') + "<br>" + "Аттрибут 'href': " + w_4.getAttribute('href');
    btn_4w.innerHTML = "Дело сделано";
    btn_4w.onclick = function () {
        w_4.style.display = "none";
        w_5.style.display = "block";
    }
}
