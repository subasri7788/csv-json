let csvToJson = require('convert-csv-to-json');
 
let fileInputName = 'CodingTask.csv'; 
let fileOutputName = 'myOutputFile.json';
 
csvToJson.generateJsonFileFromCsv(fileInputName,fileOutputName);