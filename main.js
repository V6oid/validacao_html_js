// Function to handle form submission
document.getElementById('valueForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Get input values
    const valueA = parseFloat(document.getElementById('valueA').value);
    const valueB = parseFloat(document.getElementById('valueB').value);

    // Limpe o formulário
    
    // Check values and display message
    if (valueB > valueA) {
        displayMessage('Validação', 'Valor B é maior que Valor A.');
        clearForm();
    } else if (valueA >= valueB) {
        displayMessage('Erro', 'Valor A é maior ou igual que Valor B.');
    }
});

// Function to display result message
function displayMessage(title, message) {
    const resultMessage = document.getElementById('resultMessage');
    resultMessage.innerHTML = `<h2>${title}</h2><p>${message}</p>`;
}

// Função para limpar o formulário
function clearForm() {
    document.getElementById('valueA').value = '';
    document.getElementById('valueB').value = '';
}