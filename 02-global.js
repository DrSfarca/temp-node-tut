// **  Globals - NO WINDOW !!!

// ** __dirname  - path to current directory
// ** __filename - file name
// ** require    - function to use modules (CommonJs)
// ** module     - info about current module (file)
// ** process    - info about env where the program is beign executed

console.log(__dirname);
console.log(__filename);

setInterval(() => {
  console.log("Hello World");
}, 1000);
