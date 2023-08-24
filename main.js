document.getElementById('valueForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const valueA = parseFloat(document.getElementById('valueA').value);
    const valueB = parseFloat(document.getElementById('valueB').value);

    if (valueB > valueA) {
        displayMessage('Validado', 'Valor B é maior que Valor A.');
        clearForm();
    } else if (valueA >= valueB) {
        displayMessage('Erro', 'Valor A é maior ou igual que Valor B.');
    }
});

function displayMessage(title, message) {
    const resultMessage = document.getElementById('resultMessage');
    resultMessage.innerHTML = `<h2>${title}</h2><p>${message}</p>`;
}

function clearForm() {
    document.getElementById('valueA').value = '';
    document.getElementById('valueB').value = '';
}