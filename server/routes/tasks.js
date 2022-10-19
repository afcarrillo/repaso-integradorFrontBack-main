const express = require("express");
const router = express.Router();
const { Task } = require("../models");

router.get("/", (req, res, next) => {
  Task.findAll({ order: [["createdAt", "ASC"]] }).then((tasks) =>
    res.send(tasks)
  );
});

router.get("/:id", (req, res, next) => {
  Task.findByPk(req.params.id).then((task) => res.send(task));
});

router.post("/", (req, res, next) => {
  Task.create(req.body).then((newTask) => res.status(201).send(newTask));
});

router.put("/:id", (req, res, next) => {
  Task.update(req.body, {
    where: { id: req.params.id },
    returning: true,
  }).then(([affectedRows, updatedTask]) =>
    res.status(202).send(updatedTask[0])
  );
});

router.delete("/:id", (req, res, next) => {
  Task.destroy({ where: { id: req.params.id } }).then(() =>
    res.sendStatus(204)
  );
});

module.exports = router;
