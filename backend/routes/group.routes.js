module.exports = app => {
    const groups = require("../controllers/group.controller.js");

    var router = require("express").Router();

    //create a new group
    router.post("/", groups.create);

    //retrieve all groups
    router.get("/", groups.findAll);

    //retrieve a single group
    router.get("/:id", groups.findOne);

    //update a group with id
    router.put("/:id", groups.update);

    //Delete a group with id
    router.delete("/:id", groups.delete);

    app.use('/api/groups', router);
};