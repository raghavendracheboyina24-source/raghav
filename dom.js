document.getElementById("heading").innerHTML = "dom";
let p = document.getElementById("zoro");
p.innerHTML = "rama";

function addRow() {
    let tables = document.getElementById("tables");
    if (!tables) {
        tables = document.createElement('table');
        tables.id = 'tables';
        tables.border = '1';
        document.body.appendChild(tables);
    }

    let newrow = tables.insertRow();
    let cell1 = newrow.insertCell(0);
    let cell2 = newrow.insertCell(1);
    let cell3 = newrow.insertCell(2);

    cell1.innerHTML = "02";
    cell2.innerHTML = "RAHAV";
    cell3.innerHTML = "21";
}

addRow();
console.log(document);

