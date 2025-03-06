const fs = require('fs');

// Baca file JSON
const rawData = fs.readFileSync('stocks.json', 'utf8');
const jsonData = JSON.parse(rawData);

// Filter dan format data
const allowedBrands = ['toyota', 'adidas', 'puma'];
const formattedData = jsonData
    .filter(item => allowedBrands.includes(item.Brand_Name.toLowerCase()))
    .map(item => ({
        date: new Date(item.Date).toLocaleDateString('en-US'),
        open: parseFloat(item.Open),
        high: parseFloat(item.High),
        low: parseFloat(item.Low),
        close: parseFloat(item.Close),
        volume: parseFloat(item.Volume),
        brand_name: item.Brand_Name.toLowerCase()
    }));

// Buat file JavaScript
const jsContent = `export const dummyData = ${JSON.stringify(formattedData, null, 4)};`;

fs.writeFileSync('saham.ts', jsContent, 'utf8');

console.log('Konversi selesai! Lihat file saham.js');
