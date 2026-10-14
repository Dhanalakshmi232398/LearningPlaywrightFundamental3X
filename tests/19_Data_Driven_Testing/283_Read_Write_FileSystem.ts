import * as fs from 'node:fs';
import * as path from 'node:path';

// Always build paths from __dirname. A bare './280_Users.json' resolves
// against the working directory, so it breaks when run from elsewhere.
const filePath = path.join(__dirname, '280_Users.json');
console.log('File path:', filePath);

const fileData = fs.readFileSync(filePath,'utf-8');
const userDataJSObject = JSON.parse(fileData);
console.log(userDataJSObject);

console.log(userDataJSObject.username);
console.log(userDataJSObject.password);

// Writing Data to a JSON File

const user = {
  name: "Dhana",
  role: "QA(Student to learn Playwright Automation)"
};

const jsonData = JSON.stringify(user);

fs.writeFileSync("output.json", jsonData);
console.log("JSON file created successfully");


//run command: npm install --save-dev tsx
// npx tsx .\tests\19_Data_Driven_Testing\283_Read_Write_FileSystem.ts 

/* 
output:
File path: C:\Users\Dell\OneDrive\Documents\LearningPlaywrightFundamental3X\tests\19_Data_Driven_Testing\280_Users.json
{ username: 'admin', password: 'admin123' }
admin
admin123
JSON file created successfully */