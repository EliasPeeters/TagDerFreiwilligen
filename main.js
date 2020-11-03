window.onscroll = showNavigatorBar;

function showNavigatorBar() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("Navigation").style.backgroundColor = "rgba(34,34, 34, 0.95)";
    }
    else {
        document.getElementById("Navigation").style.backgroundColor ="";
    }
}
