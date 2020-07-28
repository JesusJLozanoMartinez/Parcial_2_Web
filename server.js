const express = require('express');
const app = express();
app.use(express.urlencoded({extended: false}));



app.use(express.json());

const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send("You are on the homepage");
})

app.post('/post', (req, res) => {
    console.log(req.body);
    const {username, password} = req.body;
    res.send("Welcome " + username);

})

app.delete('/delete', (req, res) => {
    res.json({delete: true});
})

app.put('/put/:id', (req, res) => {
    res.send("Task " + req.params.id + " has been updated");
})

  app.listen(port, () => console.log(`Example app listening on port ${port}!`))