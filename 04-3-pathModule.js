const path=require('path');

// get the path seperator 
console.log(path.sep); // returns "\""

// get the complete path with join path
const filePath=path.join('Content','subfolder','test.txt'); // we not require to put \ slash, if we added it will removed
console.log(filePath);

const basePath=path.basename(filePath);
console.log(basePath); // return --> test.txt

//abosolute path
const abosolute=path.resolve(__dirname,'content','subfolder','test.txt'); // return full path -> D:\node_projects\study\tutorial\content\subfolder\test.txt
console.log(abosolute)

