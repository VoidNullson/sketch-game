const body = document.querySelector('body');
const sketchArea = document.querySelector('.container');
const resetButton = document.createElement('button');
    resetButton.classList.add('resetButton');
    resetButton.textContent='reset';
    resetButton.addEventListener('click', clearArea);

body.insertBefore(resetButton, sketchArea);


for(i=0;i<16;i++){
    let newRow = document.createElement('div');
    newRow.classList.add('row');
    for(j=0;j<16;j++){
        let newSquare = document.createElement('div');
        newSquare.classList.add('square');
        newRow.appendChild(newSquare);
    };
    sketchArea.appendChild(newRow);
};

function clearArea(){
    sketchArea.innerHTML='';

    let rows = prompt('How many rows would you like?', 10);
        while (rows>50){
            rows = prompt('Sorry, we could do more rows but lets keep it simple, keep it under 50, ok?', 10);
        };

    let columns = prompt('How Many Columns?', 10);
    while (columns>50){
            columns = prompt('Sorry, we could do more columns but lets keep it simple, keep it under 50, ok?', 10);
        }

    for(i=0;i<rows;i++){
    let newRow = document.createElement('div');
    newRow.classList.add('row');
    for(j=0;j<columns;j++){
        let newSquare = document.createElement('div');
        newSquare.classList.add('square');
        newRow.appendChild(newSquare);
    };
    sketchArea.appendChild(newRow);
};
}
