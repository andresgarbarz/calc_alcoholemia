/* const form = document.getElementById("form");
form.addEventListener(onsubmit, (event) => { event.preventDefault(); calc(event) }) */

const calc = (event) => {
    event.preventDefault();
    const data = event.target.elements;
    ml = 50;
    ga = 40;
    masaEtanol = data.ml.value * (data.ga.value/100) * 0.789;
    nums = {hombre: {astenico: 0.85, atletico: 0.76, picnico: 0.64}, mujer: {astenico: 0.76, atletico: 0.67, picnico: 0.58}};
    const alcoholemia = masaEtanol / (data.peso.value * nums[data.sexo.value][data.cuerpo.value]);
    console.log(alcoholemia)
}