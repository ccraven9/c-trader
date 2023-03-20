const http = require('node:http');
const cardService = require('./card-service');

const hostName = '127.0.0.1';
const port = 3000;
const appJson = "application/json";

const server = http.createServer(async (req, res) => {
    
    if (req.url === "/get-cards" && req.method === "GET") {
        const cardData = await new cardService().getCards();
        res.writeHead(200, {"Content-Type": appJson});
        res.write(JSON.stringify(cardData));
        res.end();
        // res.end(JSON.stringify(cardData));
    } else {
        res.writeHead(404, {"Content-Type": appJson})
            .end(JSON.stringify({message: 'Invalid URL'}));
    }
});

server.listen(port, hostName, () => {
    console.log(`Server running at http://${hostName}:${port}/`);
});
