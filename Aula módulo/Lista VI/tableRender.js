let dataTables =
    [
        {
            title: "tabela",
            columns: ["Tipo", "Empresas ativas", "Empresas abertas","Variação 3º", "Variação 1º"],
            rows: [
                    ["Geral","21.020","1331","21,8%", "-1,6%"],
                    ["MEI","21.020","1331","21,8%", "-1,6%"],
                    ["LTDA","14.519","1070","25,4%", "-3,1%"],
                    ["Soc. Anonima", "6.201","255","10,5%","6,6%"],
                    ["Cooperativa","187","3,5","-18,9%", "-17,3%"],
                    ["Demais","74","1,6","51,6%", "52,6%"]
            ]
        },
    ];

function renderTable(dataTables) 
{
    var div = document.querySelector(".containerTabela");
    for (var i = 0; i < dataTables.length; i++) {
        div.innerHTML += `
            <table class="tabela"> 

            </table>
        `;
        renderTHead(dataTables);
    }
    div.innerHTML += `</div>`;
};

renderTable(dataTables);

function renderTHead(dataTables) 
{
    var div = document.querySelector(".tabela");
    for (var i = 0; i < dataTables.length; i++) {
        div.innerHTML += `
            <thead class="head">
                <tr class="row-head"> 
                    <th> ${dataTables[i].columns[0]} </th>
                    <th> ${dataTables[i].columns[1]} </th>
                    <th> ${dataTables[i].columns[2]} </th>
                    <th> ${dataTables[i].columns[3]} </th>
                    <th> ${dataTables[i].columns[4]} </th>
                </tr>
            </thead>
        `;
        renderTbody(dataTables);
    }
    div.innerHTML += `</div>`;
};

function renderTbody(dataTables) 
{
    var div = document.querySelector(".tabela");
    for (var i = 0; i < dataTables.length; i++) {
        div.innerHTML += `
            <tbody class="body">
                <tr class="row-body"> 
                    <td> ${dataTables[i].rows[i][i]} </td>
                    <td> ${dataTables[i].rows[i][1]} </td>
                    <td> ${dataTables[i].rows[i][2]} </td>
                    <td> ${dataTables[i].rows[i][3]} </td>
                    <td> ${dataTables[i].rows[i][4]} </td>
                </tr>
                <tr class="row-body"> 
                    <td> ${dataTables[i].rows[1][0]} </td>
                    <td> ${dataTables[i].rows[1][1]} </td>
                    <td> ${dataTables[i].rows[1][2]} </td>
                    <td> ${dataTables[i].rows[1][3]} </td>
                    <td> ${dataTables[i].rows[1][4]} </td>
                </tr>
                <tr class="row-body"> 
                    <td> ${dataTables[i].rows[2][0]} </td>
                    <td> ${dataTables[i].rows[2][1]} </td>
                    <td> ${dataTables[i].rows[2][2]} </td>
                    <td> ${dataTables[i].rows[2][3]} </td>
                    <td> ${dataTables[i].rows[2][4]} </td>
                </tr>
                <tr class="row-body"> 
                    <td> ${dataTables[i].rows[3][0]} </td>
                    <td> ${dataTables[i].rows[3][1]} </td>
                    <td> ${dataTables[i].rows[3][2]} </td>
                    <td> ${dataTables[i].rows[3][3]} </td>
                    <td> ${dataTables[i].rows[3][4]} </td>
                </tr>
                <tr class="row-body"> 
                    <td> ${dataTables[i].rows[4][0]} </td>
                    <td> ${dataTables[i].rows[4][1]} </td>
                    <td> ${dataTables[i].rows[4][2]} </td>
                    <td> ${dataTables[i].rows[4][3]} </td>
                    <td> ${dataTables[i].rows[4][4]} </td>
                </tr>
                <tr class="row-body"> 
                    <td> ${dataTables[i].rows[5][0]} </td>
                    <td> ${dataTables[i].rows[5][1]} </td>
                    <td> ${dataTables[i].rows[5][2]} </td>
                    <td> ${dataTables[i].rows[5][3]} </td>
                    <td> ${dataTables[i].rows[5][4]} </td>
                </tr>
            </tbody>
        `;
    }
    div.innerHTML += `</div>`;
};
