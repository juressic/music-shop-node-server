const express = require('express');
const path = require('path');

const app = express();

const PORT = 5556;

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

app.use(express.static(path.join(__dirname, 'build')));

app.use('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
