
function calcularIMC(event) {
    event.preventDefault(); 

    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);

    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        alert('Por favor, ingresa valores válidos para peso y altura.');
        return;
    }

    const imc = peso / (altura * altura);

    const resultado = document.getElementById('resultado');
    const imcResultado = document.getElementById('imcResultado');
    const clasificacion = document.getElementById('clasificacion');

    imcResultado.textContent = `Tu IMC es: ${imc.toFixed(2)}`;

    if (imc < 18.5) {
        clasificacion.textContent = 'Estás bajo peso.';
    } else if (imc >= 18.5 && imc < 24.9) {
        clasificacion.textContent = 'Tienes un peso normal.';
    } else if (imc >= 25 && imc < 29.9) {
        clasificacion.textContent = 'Tienes sobrepeso.';
    } else {
        clasificacion.textContent = 'Tienes obesidad.';
    }

    resultado.style.display = 'block'; 
}

document.getElementById('imcForm').addEventListener('submit', calcularIMC);
