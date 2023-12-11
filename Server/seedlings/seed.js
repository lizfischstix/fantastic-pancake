const fs = require('fs');
const csv = require('csv-parser');

const csvFilePath = ('./Restaurant.csv');
const jsonFilePath = ('./Restaurant.json');

const data = [];

fs.createReadStream(csvFilePath)
    .pipe(csv())
    .on('data', (row) => {
        data.push(row);
    })
    .on('end', () => {
        fs.writeFileSync(jsonFilePath, JSON.stringify(data, null, 2));
    });
