const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, '../frontend/dist')));

app.get('/api/hello', (_, res) => {
  res.json({ message: 'Olá do backend Node.js!' });
});

app.get('*', (_, res) => {
  res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});