    //para dados ausentes substituir por um traço -; espaco null e undefined
    //prestar atenção nos limites do for, para render linha e coluna;

import dataTables from "./data.js";

(function main ()
{
    renderTables(dataTables);
})();

function renderTable(dataTable)
{
    var div = document.querySelector(".containerTabela");
    div.innerHTML += `
    <table class="tabela">
        ${renderTHead(dataTable.columns)}
        ${renderTbody(dataTable.rows)}
    </table>`
};

function renderTables(dataTables)
{
    for (var i = 0; i < dataTables.length; i++) {
        renderTable(dataTables[i])
    }
};

function renderTHead(columns) 
{
    let headHtml = "";
    headHtml += `<thead class="head">`;
    headHtml += `<tr class="row-head">`;
    for (var i = 0; i < columns.length; i++) {
        headHtml += `
            <th> ${columns[i]} </th>
        `;
    }
    headHtml += `</tr>`;
    headHtml += `</thead>`;
    return headHtml;
};

function renderTbody(rows) 
{
    let bodyHtml = "";
    bodyHtml += `<tbody class="body">`;
    for (var i = 0; i < rows.length; i++) {
        bodyHtml += `<tr class="row-body">`;
        for (var j = 0; j < rows[i].length; j++) {
            if (rows[i][j] != null && rows[i][j] != undefined && rows[i][j] != " "){
                bodyHtml += `
                <td> ${rows[i][j]} </td>
            `;
            }
            else{
                bodyHtml += `
                <td> - </td>
            `;
            }

        }
        bodyHtml += `</tr>`;
    }
    bodyHtml += `</tbody>`;
    return bodyHtml;
};

//renderTable(dataTables[0]);
//renderTables(dataTables);