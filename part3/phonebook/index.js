const express = require("express");
const morgan = require("morgan");

const app = express();

app.use(express.json());
app.use(
  morgan(
    ":method :url :status :res[content-length] - :response-time ms - :content"
  )
);

morgan.token("content", (req, res) => {
  const body = req.body;

  if (!body.content) {
    return;
  }

  return JSON.stringify(body.content);
});

let phonebook = [
  {
    id: 1,
    name: "Arto Hellas",
    number: "040-123456",
  },
  {
    id: 2,
    name: "Ada Lovelace",
    number: "39-44-5323523",
  },
  {
    id: 3,
    name: "Dan Abramov",
    number: "12-43-234345",
  },
  {
    id: 4,
    name: "Mary Poppendieck",
    number: "39-23-6423122",
  },
];

app.get("/info", (request, response) => {
  const date = new Date().toUTCString();
  const length = phonebook.length;
  const answer = `
  <p>Phonebook has info for ${length} people.</p>
  <p>${date}</p>
  `;

  response.send(answer);
});

app.get("/api/persons", (request, response) => {
  response.json(phonebook);
});

app.get("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id);
  const contact = phonebook.find((contact) => contact.id === id);

  if (!contact) {
    response.status(404).end();
  }

  response.json(contact);
});

app.delete("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id);
  phonebook = phonebook.filter((contact) => contact.id !== id);

  response.status(204).end();
});

function generateId() {
  return Math.floor(Math.random() * 10000);
}

app.post("/api/persons", (request, response) => {
  const body = request.body;

  if (!body.content) {
    return response.status(400).json({
      error: "Content missing",
    });
  }

  if (!body.content.name) {
    return response.status(400).json({
      error: "name is missing",
    });
  }

  if (!body.content.number) {
    return response.status(400).json({
      error: "number is missing",
    });
  }

  const sameContact = phonebook.find(
    (contact) => contact.name === body.content.name
  );

  if (sameContact) {
    return response.status(400).json({
      error: "name must be unique",
    });
  }

  const contact = {
    name: body.content.name,
    number: body.content.number,
    id: generateId(),
  };

  phonebook = phonebook.concat(contact);

  response.json(contact);
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
