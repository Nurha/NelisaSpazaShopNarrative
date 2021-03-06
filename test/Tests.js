var assert = require('assert');


describe('Find data in file', function(){

        it('should return a unique list of products in an array', function(){
 	        var uniqueList = require('../uniqueList');
		var productList = uniqueList.linesInFiles('./files/Nelisa Sales History.csv')
                var expectedProducts = ['Milk 1l','Imasi',"Bread","Chakalaka Can","Gold Dish Vegetable Curry Can","Fanta 500ml","Coke 500ml","Cream Soda 500ml","Iwisa Pap 5kg","Top Class Soy Mince","Shampoo 1 litre","Soap Bar","Bananas - loose","Apples - loose","Mixed Sweets 5s","Heart Chocolates","Rose (plastic)","Valentine Cards"];
                assert.deepEqual(expectedProducts, productList);
        
        });
	
	it('it should return the number of items sold', function(){
		var itemsSold = require('../itemsSold');
                var productNames = itemsSold.productsSold('./files/Nelisa Sales History.csv');
                var expectedMap =  {'Milk 1l':142, 'Imasi':125, 'Bread':130, 'Chakalaka Can':94, 'Gold Dish Vegetable Curry Can':86, 'Fanta 500ml':94, 'Coke 500ml':159, 'Cream Soda 500ml':75, 'Iwisa Pap 5kg':47, 'Top Class Soy Mince':98, 'Shampoo 1 litre':26, 'Soap Bar':50, 'Bananas - loose': 114, 'Apples - loose':114, 'Mixed Sweets 5s':172, 'Heart Chocolates':20, 'Rose (plastic)': 14, 'Valentine Cards':14};
                assert.deepEqual(expectedMap,productNames);    
            
        
        }); 
	

	it('should return the product that has sold the most items', function(){
                var mostPopProd = require('../mostPopular');
                var mostPopularProduct = mostPopProd.mostPopular('./files/Nelisa Sales History.csv');
                var expectedPopular = { prodName:'Mixed Sweets 5s', amount: 172 };
                assert.deepEqual(expectedPopular, mostPopularProduct);
            
        });
        it('it should show the categories and quantity', function(){
                var categoryCalculations = require('../categoryCalculations');
                var salesPerCategory = categoryCalculations.getSalesPerCategory('./files/Nelisa Sales History.csv');
                var expectedSalesPerCategory = {'Fruits' : 228, 'Candies' : 192, 'Softdrinks' : 328, 'Dairy' : 267, 'Starch' : 275, 'Toiletries' : 76, 'Canned Goods' : 180, 'Gifts' : 28};
                assert.deepEqual(salesPerCategory,expectedSalesPerCategory);
        });
        it('it should show the most popular category', function(){
                var mostProfitibleCategory = require('../findMostPopularCategory');
                var profitableCategories = mostProfitibleCategory.findMostProfitableCategory('./files/Nelisa Sales History.csv');
                var expectedCategory = {categoryName : 'Softdrinks', qty : 328};
                assert.deepEqual(expectedCategory,profitableCategories);
                
        });
        it('should return the product that has sold the least items', function(){
                var leastPopProd = require('../leastPopular');
                var leastPopularProduct = leastPopProd.leastPopular('./files/Nelisa Sales History.csv');
                var expectedLeastPopular = { prodName: 'Rose (plastic)', amount: 14 };
                assert.deepEqual(expectedLeastPopular, leastPopularProduct);
        });

        it('it should show the least popular category', function(){
                var leastPopCategory = require('../findLeastPopularCategory');
                var leastPopularCategory = leastPopCategory.findLeastPopularCategory('./files/Nelisa Sales History.csv');
                var expectedCategory = {categoryName : 'Gifts', qty : 28};
                assert.deepEqual(expectedCategory,leastPopularCategory);
                
        });

 });							

