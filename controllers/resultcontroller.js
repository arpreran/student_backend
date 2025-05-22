const Result = require('../models/Result');

const createResult = async (req, res) => {
  try {
    const result = await Result.create(req.body);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ message: 'Error creating result', error: error.message });
  }
};

const getAllResults = async (req, res) => {
  try {
    const results = await Result.findAll();
    res.status(200).json(results);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching results', error: error.message });
  }
};

const getResultById = async (req, res) => {
  try {
    const result = await Result.findByPk(req.params.id);
    if (!result) return res.status(404).json({ message: 'Result not found' });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching result', error: error.message });
  }
};

const updateResult = async (req, res) => {
  try {
    const result = await Result.findByPk(req.params.id);
    if (!result) return res.status(404).json({ message: 'Result not found' });
    await result.update(req.body);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: 'Error updating result', error: error.message });
  }
};

const deleteResult = async (req, res) => {
  try {
    const result = await Result.findByPk(req.params.id);
    if (!result) return res.status(404).json({ message: 'Result not found' });
    await result.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: 'Error deleting result', error: error.message });
  }
};

module.exports = {
  createResult,
  getAllResults,
  getResultById,
  updateResult,
  deleteResult,
};