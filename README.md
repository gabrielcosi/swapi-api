# SWAPI API

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js v16.x or later
- npm v8.x or later
- [Serverless Framework](https://www.serverless.com/)

## Setup

1. **Install dependencies** :

   `npm install`

2. **Install the Serverless Framework globally** (if not already installed):
   `npm install -g serverless`
3. **Set up DynamoDB Local** :
   `serverless dynamodb start`

## Running Locally

1. **Start the local server** :

   `sls offline`

   This will start the local server, and you should see output indicating that your Lambda functions are available at specific localhost URLs.

2. **Use the application** :
   With the local server running, you can now send requests to your endpoints using tools like [Postman](https://www.postman.com/).

## Testing

Simply run `npm test`

## Sample Endpoints

### Personajes

GET: http://localhost:3000/dev/personajes/1

---

POST: http://localhost:3000/dev/personajes/
BODY:

```
{"nombre": "Juan Galaxia","altura": "180","peso": "80","color_cabello": "negro","color_piel": "oliva","color_ojos": "marrón","año_nacimiento": "25BBY","genero": "masculino","planeta_origen": "https://swapi.py4e.com/api/planets/5/","peliculas": ["https://swapi.py4e.com/api/films/1/","https://swapi.py4e.com/api/films/2/"],"especies": ["https://swapi.py4e.com/api/species/1/"],"vehiculos": ["https://swapi.py4e.com/api/vehicles/10/","https://swapi.py4e.com/api/vehicles/20/"],"naves_espaciales": ["https://swapi.py4e.com/api/starships/5/","https://swapi.py4e.com/api/starships/10/"],"creado": "2023-08-07T20:50:51.644000Z","editado": "2023-08-07T21:17:56.891000Z","url": "https://swapi.py4e.com/api/people/100/"}
```

### Planetas

GET: http://localhost:3000/dev/planetas/1

---

POST: http://localhost:3000/dev/planetas/
BODY:

```
{  "nombre": "Tierra 2.0",  "periodo_rotacion": "24",  "periodo_orbital": "365",  "diametro": "12742",  "clima": "templado",  "gravedad": "1 estándar",  "terreno": "montañas, océanos",  "agua_superficial": "71",  "poblacion": "7000000000",  "residentes": [    "https://swapi.py4e.com/api/people/100/",    "https://swapi.py4e.com/api/people/101/"  ],  "peliculas": [    "https://swapi.py4e.com/api/films/10/",    "https://swapi.py4e.com/api/films/11/"  ],  "creado": "2023-08-07T20:52:51.644000Z",  "editado": "2023-08-07T21:18:56.891000Z",  "url": "https://swapi.py4e.com/api/planets/50/"}
```
