function calculateArea() {
    const width = parseFloat(document.getElementById('width').value);
    const height = parseFloat(document.getElementById('height').value);

    if (isNaN(width) || width <= 0) {
        alert("Por favor, ingrese un valor válido para el ancho.");
        return;
    }
    if (isNaN(height) || height <= 0) {
        alert("Por favor, ingrese un valor válido para el alto.");
        return;
    }

    
    const area = width * height;
    document.getElementById('result').innerText = `El área del rectángulo es: ${area} m²`; // Corrección aquí
}

// Función para limpiar todos los campos del formulario
function clearFields() {
    document.getElementById('width').value = "";
    document.getElementById('height').value = "";
    document.getElementById('result').innerText = "";
}