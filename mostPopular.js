var fs = require("fs"); 

var findMostPopular = function ( fileName) {
    var productsMap = {};
    var quantitySold = [];
         // body...

    var fileContent = fs.readFileSync(fileName, "utf8");
    var products = fileContent.split("\r");
         
         // remove the first line from the list
        products = products.splice(1);

        products.forEach( function (product) {
          
             var productColumns = product.split(";");
             var productName = productColumns[2];
             var quantity = Number(productColumns[3]);

             if (productsMap[productName] === undefined ) {
                 quantitySold.push(productName);
                 productsMap[productName] = 0;   
             }

             productsMap[productName] += quantity;

            var max = 0;
            for(var prod in productsMap){
                var value = productsMap[prod];
                    if(productsMap[prod] > max){
                        max = productsMap[prod];
                        mostPopularProdct = {
                            prodName: prod,
                            amount: max

                        };
                    };
            };
        
        });
      
         
          console.log(mostPopularProdct);
          return mostPopularProdct;

};
           
  exports.mostPopular = function(fileName){
        var mostPopularProdct = findMostPopular(fileName);
        return mostPopularProdct;
    };