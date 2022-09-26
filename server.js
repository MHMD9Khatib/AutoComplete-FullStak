const http = require('http');
const router = require('./router');
const productRepo = require('./repos/productRepo.js');

const server = http.createServer(router);
const port = 5000;

server.listen(port , () =>{
    console.log(`Server is listening on port ${port}.  Ready to accept requests!`);
})



const success = (data) =>{
    
    // console.log(data);
};
const failure = (error) =>{
    console.log(error);
};

productRepo.getProducts()
    .then(success)
    .catch(failure)