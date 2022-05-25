const express = require('express')
const trackController = require('./controllers/track.controller')
const router = express.Router()

router.get('/', trackController.getTracks) // lecture toutes les pistes
router.delete('/:id', trackController.deleteTrack)
router.put('/:id', trackController.updateTrack)
router.post('/', trackController.postTrack)


module.exports = router;