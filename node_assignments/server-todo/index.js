const http = require('http');
const fs = require('fs').promises;
const path = require('path');

const requestListener = async (req, res) => {
    let filePath = path.join(__dirname, req.url === "/" ? "index.html" : req.url);

    try {
        const ext = path.extname(filePath);
        const contentType = ext === ".js" ? "application/javascript" : "text/html";

        const data = await fs.readFile(filePath, "utf8");
        res.writeHead(200, { "Content-Type": contentType });
        res.end(data);
    } catch (error) {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("404 Not Found");
    }
};

const hostname = '127.0.0.1';
const port = 8080;
const server = http.createServer(requestListener);



server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

// (req,res)=>{
//     res.statusCode = 200;
//     res.setHeader('Content-Type','text/html');
//     res.end('Hello, World \n');
// }