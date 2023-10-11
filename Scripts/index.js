/**
 * 
 *  Autor: Ignacio Carmona González
 *  Github:
 * 
 *  Area rectangulo = L * a
 * P rectangulo = 2 * (L * a)
 * d retangulo = d2 = l2 + a2
 * d = sqr(l2 + a2) pow
 */

/*Con el DOMContentLoaded carga de forma más optima el JS, es buena praxis hacerlo aunque no es necesario */
document.addEventListener("DOMContentLoaded", () => {
    const calcular = document.getElementById("btn-calculate");
    const resultado = document.getElementById("resultado");
    const resultado2 = document.getElementById("resultado2");
    const resultado3 = document.getElementById("resultado3");

/**
 * Creamos boton que al hacer click haga las operaciones del rectangulo
 */
    calcular.addEventListener("click",  () => {
        const longitud = parseFloat(document.getElementById("longitud").value);
        const ancho = parseFloat(document.getElementById("ancho").value);
        /*Comprobamos que los datos son válidos y en caso contrario lo decimos al usuario */
        if (!isNaN(longitud) && !isNaN(ancho)) {
            const area = longitud * ancho;
            const peri = 2 * (longitud + ancho);
            const diag = Math.sqrt(Math.pow(longitud,2) + Math.pow(ancho,2),2)
            /*Manera pocha de mostrar el resultado, no sé/no recuerdo como juntar los resultados */
            resultado.innerText = `El área del rectángulo es: ${area}`
            resultado2.innerText = `El perímetro del rectángulo es: ${peri}`
            resultado3.innerText = `La diagonal del rectángulo es: ${diag}`
        } else {
            resultado.innerHTML = "Por favor, ingrese valores válidos.";
        }
    });
});