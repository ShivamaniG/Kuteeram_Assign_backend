const Service = require('../models/Service');

exports.createService = async (req, res) => {
  try {
    const service = await Service.create({ ...req.body, createdBy: req.user.id });
    res.status(201).json(service);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getServices = async (req, res) => {
  try {
    const services = await Service.find().populate('createdBy', 'name email');
    res.json(services);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
