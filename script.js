const matrixForm = document.getElementById('matrix-form');
const errorMessage = document.getElementById('error-message');
const result = document.getElementById('result');

matrixForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const matrixARows = parseInt(document.getElementById('matrixA-rows').value);
    const matrixACols = parseInt(document.getElementById('matrixA-cols').value);
    const matrixBRows = parseInt(document.getElementById('matrixB-rows').value);
    const matrixBCols = parseInt(document.getElementById('matrixB-cols').value);

    if (matrixACols !== matrixBRows) {
        errorMessage.innerText = 'Error: Number of columns in Matrix A must be equal to the number of rows in Matrix B.';
        errorMessage.style.display = 'block';
        return;
    }

    const matrixA = [];
    for (let i = 0; i < matrixARows; i++) {
        const row = [];
        for (let j = 0; j < matrixACols; j++) {
            const input = document.createElement('input');
            input.type = 'number';
            input.value = 0;
            row.push(input);
            matrixInputsContainer.appendChild(input);
        }
        matrixA.push(row);
        matrixInputsContainer.appendChild(document.createElement('br'));
    }

    const matrixB = [];
    for (let i = 0; i < matrixBRows; i++) {
        const row = [];
        for (let j = 0; j < matrixBCols; j++) {
            const input = document.createElement('input');
            input.type = 'number';
            input.value = 0;
            row.push(input);
            matrixInputsContainer.appendChild(input);
        }
        matrixB.push(row);
        matrixInputsContainer.appendChild(document.createElement('br'));
    }

    const calculateMultiplicationButton = document.getElementById('calculate-multiplication');
    calculateMultiplicationButton.addEventListener('click', () => {
        const matrixAValues = [];
        for (let i = 0; i < matrixARows; i++) {
            const row = [];
            for (let j = 0; j < matrixACols; j++) {
                row.push(parseFloat(matrixA[i][j].value));
            }
            matrixAValues.push(row);
        }

        const matrixBValues = [];
        for (let i = 0; i < matrixBRows; i++) {
            const row = [];
            for (let j = 0; j < matrixBCols; j++) {
                row.push(parseFloat(matrixB[i][j].value));
            }
            matrixBValues.push(row);
        }

        const multiplicationResult = multiplyMatrices(matrixAValues, matrixBValues);

        result.innerHTML = '';
        for (let i = 0; i < multiplicationResult.length; i++) {
            const row = document.createElement('div');
            row.innerHTML = multiplicationResult[i].join(' ');
            result.appendChild(row);
        }
    });
});

function multiplyMatrices(matrixA, matrixB) {
    const result = [];
    for (let i = 0; i < matrixA.length; i++) {
        const row = [];
        for (let j = 0; j < matrixB[0].length; j++) {
            let sum = 0;
            for (let k = 0; k < matrixA[0].length; k++) {
                sum += matrixA[i][k] * matrixB[k][j];
            }
            row.push(sum);
        }
        result.push(row);
    }
    return result;
}