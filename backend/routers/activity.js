const router = require('express').Router();
let Activity = require('../models/activity.model');

router.route('/').get((req, res) => {
  Activity.find()
    .then(Activitys => res.json(Activitys))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const activityname = req.body.activityname;

  const Activit = new Activity({activityname});

  Activit.save()
    .then(() => res.json('Activity added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;