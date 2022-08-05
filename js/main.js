//Light switch

$("#container1").load("/pages/home/home_en.html");
var lightswitch = document.getElementById('lightSwitch');
var switchStatus = false;


if (darkmode.inDarkMode && lightswitch == true) {
    darkmode.inDarkMode = false;
}


$("#lightSwitch").on('change', function () {
    if ($(this).is(':checked')) {
        switchStatus = $(this).is(':checked');
        darkmode.inDarkMode = false;
    }
    else {
        switchStatus = $(this).is(':checked');
        darkmode.inDarkMode = true;
    }
});

//Load pages



function replaceClass(id, oldClass, newClass) {
    var elem = $(`#${id}`);

    elem.removeClass(oldClass);
    elem.addClass(newClass);
}

function loadHome() {
    var lng = document.getElementById("langselector").value;
    replaceClass("nav_home", "nav-link", "nav-link active");
    replaceClass("nav_aboutme", "nav-link active", "nav-link");
    replaceClass("nav_contactme", "nav-link active", "nav-link");
    switch (lng) {
        case "en":
            $("#container1").load("/pages/home/home_en.html");
            break;

        case "es":
            $("#container1").load("/pages/home/home_es.html");
            break;
    }

}

function loadAboutme() {
    var lng = document.getElementById("langselector").value;
    replaceClass("nav_home", "nav-link active", "nav-link");
    replaceClass("nav_aboutme", "nav-link", "nav-link active");
    replaceClass("nav_contactme", "nav-link active", "nav-link");

    switch (lng) {
        case "en":
            $("#container1").load("/pages/about-me/about-me-en.html");
            break;

        case "es":
            $("#container1").load("/pages/about-me/about-me-es.html");
            break;
    }
}

function loadContactMe() {
    replaceClass("nav_home", "nav-link active", "nav-link");
    replaceClass("nav_aboutme", "nav-link active", "nav-link");
    replaceClass("nav_contactme", "nav-link", "nav-link active");
    $("#container1").empty();
}

//Change language

function isPillActive(id) {
    var elem = $(`#${id}`);
    if (elem.hasClass("nav-link active")) return true;

    return false;
}

function loadlang() {
    var lng = document.getElementById("langselector").value;
    // var frase = document.getElementById("frase");
    switch (lng) {
        case "en":
            $("#phrase").html("Enjoys the art of code, hard work is my thing.");
            $("#contact_tag").html("Contact Me");
            // frase.innerHTML = "Enjoys the art of code, hard work is my thing.";
            if (isPillActive("nav_home")) {
                $("#container1").load("/pages/home/home_en.html");
            } else if (isPillActive("nav_aboutme")) {
                $("#container1").load("/pages/about-me/about-me-en.html");
            }
            break;
        case "es":
            $("#phrase").html("Disfruto el arte del codigo, el trabajo duro es lo mío.");
            $("#contact_tag").html("Contáctame");
            // frase.innerHTML = "Disfruto el arte del codigo, el trabajo duro es lo mío.";
            if (isPillActive("nav_home")) {
                $("#container1").load("/pages/home/home_es.html");
            } else if (isPillActive("nav_aboutme")) {
                $("#container1").load("/pages/about-me/about-me-es.html");
            }
            break;
    }
}

