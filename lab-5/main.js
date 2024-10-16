const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/submit_form', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    res.send(`Form submitted successfully! Name: ${name}, Email: ${email}`);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
