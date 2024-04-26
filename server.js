const express = require('express');
const cors = require('cors');
const ExcelJS = require('exceljs');

const app = express();
app.use(cors());

const PORT = 5001;

async function readExcelData(filePath) {
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.readFile(filePath);
    const sheet = workbook.getWorksheet(1);
    const data = {};

    let months = [];
    const firstRow = sheet.getRow(1);
    firstRow.eachCell({ includeEmpty: true }, function (cell, colNumber) {

        if (colNumber > 1 && cell.value) {
            months.push(cell.value.getMonth());
        }
    });
    sheet.eachRow((row, rowNumber) => {
        if (rowNumber > 1) {
            const utilityType = row.getCell(1).text;
            if (!data[utilityType]) {
                data[utilityType] = {};
            }
            months.forEach((month, index) => {
                data[utilityType][month] = row.getCell(index + 2).value;
            });
        }
    });
    return data;
}

app.get('/api/data', async (req, res) => {
    const data = await readExcelData('./data.xlsx');
    res.json(data);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
