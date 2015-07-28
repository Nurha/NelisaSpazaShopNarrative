var fs  = require("fs"); 

var findFiles = function (fileName) {
   
    var productList = []; 
    var productMap = {};
        var fileContent = fs.readFileSync(fileName, 'utf8'); 
        var products = fileContent.split("\r"); 
     
    products.forEach(function (product) { 
      var hold = product.split(";");
      var prodName = hold[2];
      if(productMap[prodName] === undefined && prodName !== "stock item"){ // will ignore the heading
        productList.push(prodName);
        productMap[prodName] = 0;  
      };
       
    }); 
  console.log(productList)  
  return productList;

}

exports.linesInFiles = function(fileName){
  var productList = findFiles(fileName);
  return productList;
};

/*
module.exports = function(){
  this.funcName = function(){
  constructor function
  }
}
*/