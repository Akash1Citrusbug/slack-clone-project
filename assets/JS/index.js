// StackOverflow - code reference (not working) - method 1
// var element = document.getElementById("main-nav-div");
// element.classList.add("sticky-top");


// StackOverflow - code reference (not working) - method 2
// window.onscroll(function(){
//     var element = document.getElementById("main-nav-div");
//      element.classList.add("sticky-top");
// });


// StackOverflow - code reference (not working) - method 3
// window.onscroll = function() {
//     allSections.forEach(section => {
//         if(section.getBoundingClientRect().top >= -400 && section.getBoundingClientRect().top <= 150)
//             section.classList.add("sticky-top");
//         else
//             section.classList.remove("sticky-top");  
//     })}



// StackOverflow - code reference (not working) - method 4
var element = document.getElementById("main-nav-div");
// element.classList.add("sticky-top");
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(document).scrollTop() > 100) {
            $(element).addClass("sticky-top", { duration: 500 });
            $(element).addClass("animation-for-navbar", { duration: 500 });
            // $(element).addClass("shadow-effect", { duration: 500 });
        } else {
            $(element).removeClass("sticky-top", { duration: 500 });
            $(element).removeClass("animation-for-navbar", { duration: 500 });
            // $(element).removeClass("shadow-effect", { duration: 500 });
        }
    });
});
