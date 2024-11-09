// Find all products priced above $500 

db.products.find({price:{$gt:500}})

// Retrieve all customers who live in "New York."

db.customers.find({"location":"New York"})


// Retrieve only the name and price fields for all products

db.products.find({},{name:1,price:1,_id:0})


// Get all products sorted by price in descending order.


db.products.find().sort({price:-1})


//Retrieve the first three customers

db.customers.find({}).limit(3)


//Find all products that are in the "Electronics" category and cost less than $1000.

db.products.find({$and:[{category:"Electronics"},{price:{$lt:1000}}]})


//Retrieve customers located in either "New York" or "Chicago."


db.customers.find({$or:[{location:"New York"},{location:"Chicago"}]})


//Find products in either the "Electronics" or "Home Appliances" category.

db.products.find({category:{$in:["Electronics","Home Appliances"]}})


// Retrieve customers who are not located in "San Francisco."


db.customers.find({location:{$nin:["San Francisco"]}})


//Calculate the total number of products in each category

db.products.aggregate([{$group:{_id:"$category","totalProducts":{"$sum":1}}}])
