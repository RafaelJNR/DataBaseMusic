const db = require("../models");
const Group = db.musica;
const Op = db.Sequelize.Op;

//create and save new Group
exports.create =(req, res)=>{
//validate request
    if(!req.body.name){
    res.status(400).send({
        message: "Content can no be empty"
    });
    return;
}

//create a group
const group ={
    name: req.body.name,
    nationality: req.body.nationality
};

//save group in db
Group.create(group)
    .then(data=>{
        res.send(data)
    })
    .catch(err=>{
        res.status(500).send({
            message:
            err.message ||"Some error ocurred while creating the group."
        });
    });
};

//Retrieve all Groups from the database
exports.findAll =(req, res)=>{
    Group.findAll()
        .then(data =>{
          console.log("llegó al back getall");
            res.send(data);
        })
        .catch(err=>{
            res.status(500).send({
                message:
                err.message || "Some error ocurred while retrieving groups."
            });
        });

};

//Find a single Group
exports.findOne = (req, res)=>{
    const id = req.params.id;

    Group.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: 'Cannot find Group with id=${id}.'
        });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).send({
        message: "Error retrieving Group with id=" + id
      });
    });
    
};

//Update a Group by the id in the request
exports.update = (req, res)=>{

    const id = req.params.id;

    Group.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Group was updated successfully."
          });
        } else {
          res.send({
            message: 'Cannot update Group with id=${id}. Maybe Group was not found or req.body is empty!'
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Group with id=" + id
        });
      });
  };

//Delete a Group wit the specified id in the request
exports.delete = (req, res)=>{

    const id = req.params.id;
    console.log("llegó al back delete");

  Group.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Group was deleted successfully!"
        });
      } else {
        res.send({
          message: 'Cannot delete Group with id=${id}. Maybe Group was not found!'
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Group with id=" + id
      });
    });

};