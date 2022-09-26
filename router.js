const fs = require("fs");
const path = require("path");
const querystring = require("querystring");

const data = JSON.parse(fs.readFileSync("./public/words.json"));

const router = (request, response) => {
  const arr = request.url.split("?");
  const endpoint = arr[0];
  const query = arr[1];
  console.log("%c 🌶 endpoint", "color:#ea7e5c", endpoint);
  if (endpoint === "/") {
    const filePath = path.join(__dirname, "public", "index.html");
    fs.readFile(filePath, (error, file) => {
      if (error) {
        console.log(error);
        return;
      } else {
        response.writeHead(200, { "Content-Type": "text/html" });
        response.end(file);
      }
    });
  } else if (endpoint === "/style.css") {
    const filePath = path.join(__dirname, "public", "style.css");
    fs.readFile(filePath, (error, file) => {
      if (error) {
        console.log(error);
        return;
      } else {
        response.writeHead(200, { "Content-Type": "text/css" });
        response.end(file);
      }
    });
  } else if (endpoint === "/app.js") {
    const filePath = path.join(__dirname, "public", "app.js");
    fs.readFile(filePath, (error, file) => {
      if (error) {
        console.log(error);
        return;
      } else {
        response.writeHead(200, { "Content-Type": "text/js" });
        response.end(file);
      }
    });
  } else if (endpoint === "/search") {
    let result = [];
    const toSearch = query.split("=")[1].trim();
    console.log(query);
    if (toSearch.length) {
        result = data.filter((e) => e.first_name.includes(toSearch));

    }

    response.writeHead(200, { "Content-Type": "application/json" });
    response.end(JSON.stringify(result));
  } else {
    response.writeHead(404, { "Content-Type": "text/html" });
    response.end("<h1>Page Not Found :(");
  }
};

module.exports = router;
