const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json())

app.get('/', (req, res)=>{
    res.send("Hello World")
})

const users = [{id: 1, name: 'John Doe'},{id: 2, name: 'Jane Smith'}];
app.get('/users', (req, res) => {
    res.json(users)
})

app.get('/', (req, res)=>{
    res.send(`Current date and time : ${new Date()}`)
})

app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser);
    res.status(201).json(newUser)
})

app.listen(port, () => {
    console.log(Server is running on port ${port})
})