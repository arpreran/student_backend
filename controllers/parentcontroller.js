const Parent = require('../models/Parent');

const createParent = async (req, res) => {
  try {
    const parent = await Parent.create(req.body);
    res.status(201).json(parent);
  } catch (error) {
    res.status(500).json({ message: 'Error creating parent', error: error.message });
  }
};

const getAllParents = async (req, res) => {
  try {
    const parents = await Parent.findAll();
    res.status(200).json(parents);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching parents', error: error.message });
  }
};

const getParentById = async (req, res) => {
  try {
    const parent = await Parent.findByPk(req.params.id);
    if (!parent) return res.status(404).json({ message: 'Parent not found' });
    res.status(200).json(parent);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching parent', error: error.message });
  }
};

const updateParent = async (req, res) => {
  try {
    const parent = await Parent.findByPk(req.params.id);
    if (!parent) return res.status(404).json({ message: 'Parent not found' });
    await parent.update(req.body);
    res.status(200).json(parent);
  } catch (error) {
    res.status(500).json({ message: 'Error updating parent', error: error.message });
  }
};

const deleteParent = async (req, res) => {
  try {
    const parent = await Parent.findByPk(req.params.id);
    if (!parent) return res.status(404).json({ message: 'Parent not found' });
    await parent.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: 'Error deleting parent', error: error.message });
  }
};

module.exports = {
  createParent,
  getAllParents,
  getParentById,
  updateParent,
  deleteParent,
};