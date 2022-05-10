// import the data from data.js
const tableData = data;
// Reference the HTML table using d3
var tbody = d3.select("tbody");


function buidTable(data) {
    //clear existing data
    tbody.html("");
    //loop through each object in the data and append a row and ces for each value in the row
    data.forEach((dataRow) => {
        //append row to the table body
        let row = tbody.append("tr");
        // loop through each field in the database and add each vaue as a tabe cell (td)
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
            }
        );
    });
}

