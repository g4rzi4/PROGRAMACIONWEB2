const express = require('express');
const path = require('path');
const app = express();

app.get('/', (req, res) => {
  //res.sendFile("/Users/garzia/PROGRAMACIONWEB2/express/app.js");
  res.sendFile(path.join(__dirname, 'index.html'));
});


//puerto
const port = 2000;
app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});