const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))
app.use(express.static('build'));

morgan.token('body', function (req, res) { 
    return [
        JSON.stringify(req.body)
    ] 
});

let persons = [
    {
        "id": 1,
        "name": "Arto Hellas",
        "number": "040-123456"
    },
    {
        "id": 2,
        "name": "Ada Lovelace",
        "number": "39-44-5323523"
    },
    {
        "id": 3,
        "name": "Dan Abramov",
        "number": "12-43-234345"
    },
    {
        "id": 4,
        "name": "Mary Poppendieck",
        "number": "39-23-6423122"
    }
];

app.get('/api/persons', (req, res) => {
    res.json(persons);
});

app.get('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id)
    const contact = persons.find(x => x.id === id)

    if (contact) {
        res.json(contact);
    }
    else {
        res.status(404).end();
    }
});

app.delete('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id)
    persons = persons.filter(x => x.id !== id);

    res.status(204).end();
})

const generateId = () => {
    const min = 6;
    const max = 6000;
    const id = Math.floor(Math.random() * (max - min) + min);
    if (persons.find(x => x.id === id)) {
        return generateId();
    }
    return id;
}

app.post('/api/persons', (req, res) => {
    const body = req.body;

    if (body.name === '' || body.number==='') {
        return res.status(400).json({
            error: 'content missing'
        })
    }
    if(persons.find(x => x.name === body.name)){
        return res.status(400).json({
            error: 'name must be unique'
        })
    }

    const contact = {
        id: generateId(),
        name: body.name,
        number: body.number
    }

    persons = persons.concat(contact);

    res.json(contact);
})

app.get('/info', (req, res) => {
    res.send(`
        <p>Phonebook has info for ${persons.length} people</p>
        <p>${new Date()}</p>
    `);
});


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log('server is running on port ' + PORT);
})