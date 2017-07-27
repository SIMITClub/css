window.addEventListener("load", function () {
    var articles = document.querySelectorAll("main > article");
    var amount = 30, html = "", top = 0; var height = 100 / amount;

    for (var i = 0; i < amount; i++) {
        html += "<span class='openTransition' style='height:" + height + "%; top:" + top + "%'></span>";
        top += height;
    }
    for (var i = 0; i < articles.length; i++) {
        articles[i].innerHTML += html;
    }
});