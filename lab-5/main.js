const express = require('express');
const app = express();
const path = require('path');
const port = 3001;
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/submit_form', (req, res) => {
    console.log(req.params);
    console.log(req.body);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
