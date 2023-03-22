/**
 * This file will contain the routes logic for the Category resource
 * and will export it.
 */
 const { authjwt, requestValidator } = require("../middlewares");

const categoryController = require("../controllers/category.controller")


module.exports = function(app){
    
    //Route for the POST request to create the category
    app.post("/ecomm/api/v1/categories", categoryController.create);

    //Route for the GET request to fetch all the categories
    app.get("/ecomm/api/v1/categories", categoryController.findAll);

    //Route for the GET request to fetch a category based on the id
    app.get("/ecomm/api/v1/categories/:id", categoryController.findOne);

    //Route for the PUT request to update a category based on the id
    app.put("/ecomm/api/v1/categories/:id",[requestValidator.validateCategoryRequest, authjwt.verifyToken,authjwt.isAdmin] ,categoryController.update);

    //Route for the DELETE request to delete a category based on the id
    app.delete("/ecomm/api/v1/categories/:id",[authjwt.verifyToken,authjwt.isAdmin], categoryController.delete);
}