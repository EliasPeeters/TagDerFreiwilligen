window.onscroll = showNavigatorBar;

function showNavigatorBar() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("Navigation").style.backgroundColor = "rgba(34,34, 34, 0.95)";
    }
    else {
        document.getElementById("Navigation").style.backgroundColor ="";
    }
}

let fsjGemacht = {
    "ja": 3,
    "nein": 5,
    "zukunft": 10
}

function fillGraph(graph, data) {
    let dataNames = Object.keys(fsjGemacht);

    let innerHTML = '';
    let amount = 0;

    for (let i=0; i< dataNames.length; i++) {
        amount += data[dataNames[i]];
    }

    for (let i=0; i< dataNames.length; i++) {
        let amountRelative = data[dataNames[i]]/amount;
        innerHTML += amountRelative.toString();
    }

    document.getElementById(graph).innerHTML = innerHTML;

}

window.onload = function() {
    fillGraph('diagramm', fsjGemacht);
}
