const fs = require('fs');
const path = require('path');

const FILE_PATH = path.join(__dirname , '..' , 'public' , 'words.json');
// const getProducts= (success, failure)=>{

//     fs.readFile(FILE_PATH ,(error , data) =>{
//         console.log(error , data);
//         if(error){
//             // console.log(error);
//             failure(error);
//         }
//         console.log(data);
//         success(JSON.parse(data));

//     });
// }


const getProducts= ()=>{
    const promise = new Promise((resolve , rejects) =>{
        fs.readFile(FILE_PATH ,(error , data) =>{
            if(error){
                // console.log(error);
                rejects(error);
            };
            resolve(JSON.parse(data));
    
        });
    });
    return promise;
};


// const createProduct = (product)=>{
//     const promise = new Promise((resolve , reject) =>{
//         getProducts()
//         .then((data) =>{
//             const products = data;
//             products.push(product);
//            fs.writeFile(FILE_PATH , JSON.stringify(products),(error)=>{
//                 if(error){
//                     reject(error);
//                 }
//                 resolve({"message":"Product created successfully" });
//             });
//         }).catch((error) =>{
//             reject(error);

//         })
//     });
//     return promise;
// }

const productRepo= {
    getProducts: getProducts,
    // createProduct : createProduct
}

module.exports = productRepo;