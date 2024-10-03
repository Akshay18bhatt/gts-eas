const express = require("express");
const agreementRouter = express.Router();

/*                  File Imports                */
const { create_Agreement_Controller,
        get_allAgreements_Controller, 
        delete_Agreement_Controller,
        update_Agreement_Controller} = require("../Controllers/agreementController");


agreementRouter
            .post("/create-agreement",create_Agreement_Controller)
            .get("/all-agreements",get_allAgreements_Controller)
            .delete("/delete-agreement",delete_Agreement_Controller)
            .put("/update-agreement/:id",update_Agreement_Controller)


            
module.exports = agreementRouter;