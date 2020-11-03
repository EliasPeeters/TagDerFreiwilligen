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
    "Ich habe es in Zukunft vor": 10
}

function fillGraph(graph, data) {
    let dataNames = Object.keys(fsjGemacht);

    let innerHTML = '';
    let amount = 0;



    let height = document.getElementById(graph).offsetHeight;
    let width = document.getElementById(graph).offsetWidth;

    let balkenDicke = 40;
    let space = (width)/(dataNames.length+2);

    for (let i=0; i< dataNames.length; i++) {
        amount += data[dataNames[i]];
    }

    for (let i=0; i< dataNames.length; i++) {
        let amountRelative = data[dataNames[i]]/amount;
        let heightOfBalken = (height/amount)*data[dataNames[i]];

        innerHTML += '<div class="Balken"style="height:' + heightOfBalken + 'px; left:' + (i*space+space+(i*balkenDicke)) + 'px"><p>' + Math.round(data[dataNames[i]]/amount*100) + '%</p></div>'
    }
    let helper = '<div>';
    for (let i=0; i< dataNames.length; i++) {
        helper += '<p style="position: absolute; text-align: center; bottom: -70px; left:' + (i*space+space+(i*balkenDicke)-balkenDicke) + '">' + dataNames[i] + '</p>';
    }

    helper += '</div>'

    innerHTML += helper;

    document.getElementById(graph).innerHTML = innerHTML;

}

window.onload = function() {
    //fillGraph('diagramm', fsjGemacht);
}
