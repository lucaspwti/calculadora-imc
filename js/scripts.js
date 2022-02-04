/* função que calcula o imc */
function calculaIMC() {

    /* declaração de variáveis */
    let genero = document.getElementById("genero").value;
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;
    altura = parseFloat(altura.replace(',', '.'));
    let total = 0;
    let imc = 0;
    
    /* cálculo de imc */
    total = peso / (altura * altura); 
    imc = parseFloat(total.toFixed(1))
    
    /* desvio condicional caso o gênero seja masculino */
    if ( genero == "masculino" && imc < 20 ) {

        document.getElementById("resultado").value = imc + " kg/m²" + " - Abaixo do peso ideal!";
        document.getElementById("resultado").style.color = 'rgb(255, 0, 0)';

    } if ( genero == "masculino" && imc >= 20 && imc <= 24.9 ) {

        document.getElementById("resultado").value = imc + " kg/m²" + " - Peso ideal!";
        document.getElementById("resultado").style.color = 'rgb(33, 167, 7)';

    } if ( genero == "masculino" && imc >= 25 && imc <= 29.9 ) {
        document.getElementById("resultado").value = imc + " kg/m²" + " - Obesidade leve!";
        document.getElementById("resultado").style.color = 'rgb(228, 176, 7)';
    } if ( genero == "masculino" && imc >= 30 && imc <= 42.9 ) {
        document.getElementById("resultado").value = imc + " kg/m²" + " - Obesidade moderada!";
        document.getElementById("resultado").style.color = 'rgb(228, 125, 7)';
    } if ( genero == "masculino" && imc >= 43 ) {
        document.getElementById("resultado").value = imc + " kg/m²" + " - Obesidade mórbida!";
        document.getElementById("resultado").style.color = 'rgb(255, 0, 0)';
    } 

    /* desvio condicional caso o gênero seja feminino */
    if ( genero == "feminino" && imc < 19 ) {
        document.getElementById("resultado").value = imc + " kg/m²" + " - Abaixo do peso ideal!";
        document.getElementById("resultado").style.color = 'rgb(255, 0, 0)';
    } if ( genero == "feminino" && imc >= 19 && imc <= 23.9 ) {
        document.getElementById("resultado").value = imc + " kg/m²" + " - Peso ideal!";
        document.getElementById("resultado").style.color = 'rgb(33, 167, 7)';
    } if ( genero == "feminino" && imc >= 24 && imc <= 28.9 ) {
        document.getElementById("resultado").value = imc + " kg/m²" + " - Obesidade leve!";
        document.getElementById("resultado").style.color = 'rgb(228, 176, 7)';
    } if ( genero == "feminino" && imc >= 29 && imc <= 38.9 ) {
        document.getElementById("resultado").value = imc + " kg/m²" + " - Obesidade moderada!";
        document.getElementById("resultado").style.color = 'rgb(228, 125, 7)';
    } if ( genero == "feminino" && imc >= 39 ) {
        document.getElementById("resultado").value = imc + " kg/m²" + " - Obesidade mórbida!";
        document.getElementById("resultado").style.color = 'rgb(255, 0, 0)';
    } 

    /* desvio condicional caso o campo não seja preenchido */
    if ( genero == "selecione") {
        document.getElementById("resultado").value = "Preencha todos os campos!";
        document.getElementById("resultado").style.color = 'rgb(255, 0, 0)';
    }

    /* operação a ser realizada caso nenhum dos desvios anteriores sejam satisfeitos */
    else {
        
    }
}
