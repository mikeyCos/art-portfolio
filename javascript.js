// Article helped me figure out current scoll location
    // https://dev.to/ljcdev/scroll-to-top-button-in-vanilla-js-beginners-2nc
let topButton = document.getElementById('top-btn');
topButton.addEventListener('click', goTop);
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.documentElement.scrollTop > document.documentElement.clientHeight) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
}

function goTop()  {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}