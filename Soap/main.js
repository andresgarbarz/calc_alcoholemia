var units = ["miligramos", "gramos", "kilogramos", "toneladas"]

function calc() {
    var ml = document.getElementById("ml").value;
    var ga = 0.916*ml;
    var ma = ga/886;

    var mj = ma*3;
    var gj = 304*mj;

    var cont = 0;
    var res = gj*1000;
    while (res >= 1000) {
        if (cont >= units.length-1) {
            break;
        }
        else {
            res/=1000;
            cont++;
        }
    }
    
    document.getElementById("g").innerHTML = "Con esa cantidad de aceite obtendrás "+res.toFixed(2)+" " + units[cont] + " de jabón";
}