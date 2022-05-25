const express = require('express')
const albumController = require('./controllers/album.controller')

const router = express.Router()

router.get('/', albumController.getAlbums)
router.get('/:id', albumController.getAlbum)
router.get('/:id/track', albumController.getAlbumTrack)
router.post('/', albumController.postAlbum)
router.put('/:id', albumController.updateAlbum)
router.delete('/:id', albumController.deleteAlbum)

module.exports = router;