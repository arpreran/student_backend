const express = require('express');
const router = express.Router();
const {
  createResult,
  getAllResults,
  getResultById,
  updateResult,
  deleteResult
} = require('../controllers/resultController');

router.post('/', createResult);
router.get('/', getAllResults);
router.get('/:id', getResultById);
router.put('/:id', updateResult);
router.delete('/:id', deleteResult);

module.exports = router;