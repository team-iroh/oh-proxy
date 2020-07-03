const express = require('express')
const app = express()
const port = 3000
const path = require('path');
const { createProxyMiddleware } = require('http-proxy-middleware');



app.use(express.static(__dirname + '/../public/lib'));
app.use(express.static(path.join(__dirname, '../dist')));

app.use('/api/story/',
  createProxyMiddleware({ target: 'http://localhost:3003/', changeOrigin: true }));
app.use('/api/RisksAndChallenges/',
  createProxyMiddleware({ target: 'http://localhost:3003/', changeOrigin: true }));
app.use('/api/EnvironmentalCommitments/',
  createProxyMiddleware({ target: 'http://localhost:3003/', changeOrigin: true }));


app.get('/:id', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/lib/', 'index.html'));
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))