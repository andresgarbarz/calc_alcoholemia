/* const form = document.getElementById("form");
form.addEventListener(onsubmit, (event) => { event.preventDefault(); calc(event) }) */

const calc = async(event) => {
    event.preventDefault();
    const data = event.target.elements;
    ml = 50;
    ga = 40;
    masaEtanol = data.ml.value * (data.ga.value/100) * 0.789;
    nums = {hombre: {astenico: 0.85, atletico: 0.76, picnico: 0.64}, mujer: {astenico: 0.76, atletico: 0.67, picnico: 0.58}};
    const alcoholemia = masaEtanol / (data.peso.value * nums[data.sexo.value][data.cuerpo.value]);
    var className;
    var msg;
    if (alcoholemia <= 0.2) {
        className = "alert alert-success";
        msg = `Tienes ${alcoholemia.toFixed(2)} g/L de alcohol en sangre. <br> Estás en condiciones de salir a manejar 👍🏻`
    }
    else if (alcoholemia <= 0.5) {
        className = "alert alert-warning";
        msg = `Tienes ${alcoholemia.toFixed(2)} g/L de alcohol en sangre. <br> Estás en condiciones de manejar un auto, pero no una moto ⚠️`
    }
    else if (alcoholemia <= 2) {
        className = "alert alert-danger";
        msg = `Tienes ${alcoholemia.toFixed(2)} g/L de alcohol en sangre. <br> No estás en condiciones de manejar ningún tipo de vehículo automotor, quedate en tu casa ⛔`
    }
    else {
        className = "alert alert-dark";
        msg = `Tienes ${alcoholemia.toFixed(2)} g/L de alcohol en sangre. <br> Es bastante sorprendente que puedas hacer este test sin dificultades. ¡Dejá de tomar! ❌🥃`
    }
    const existingAlert = document.getElementById("alert");
    if (existingAlert) { existingAlert.remove() }
    const alert = document.createElement("div");
    alert.id = "alert";
    alert.className = className;
    alert.innerHTML = msg;
    document.getElementById("cont").appendChild(alert);
}