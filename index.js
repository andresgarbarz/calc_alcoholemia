/* const form = document.getElementById("form");
form.addEventListener(onsubmit, (event) => { event.preventDefault(); calc(event) }) */

const calc = (event) => {
    event.preventDefault();
    console.log(document.querySelector('input[name="cuerpo"]:checked').id);
    const myFormData = new FormData(event.target);
    const formDataObj = Object.fromEntries(myFormData.entries());
    console.log(formDataObj);
    ml = 50;
    ga = 40;
    masaEtanol = ml * (ga/100) *0.789;
    console.log(masaEtanol);
}