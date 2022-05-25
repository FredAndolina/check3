const albumModel = require('../models/album.model')

class albumController {
    async getAlbums(req, res) {
        try {
            const resultAlbums = await albumModel.getAlbums()
            res.status(200).json(resultAlbums)
        }
        catch (error) {
            res.status(500).json({ error: error.message })
        }
    }


    async getAlbum(req, res) {
        try {
            const resultAlbum = await albumModel.getAlbum(req.params.id)
            res.status(200).json(resultAlbum) // Indique que la demande a été acceptée.
        }
        catch (error) {
            res.status(500).json({ error: error.message }) // Le serveur a rencontré une condition inattendue qui l'a empêché de répondre à la requête. 
        }
    }


    async getAlbumTrack(req, res) {
        try {
            const result = await albumModel.getAlbumTrack(req.params.id)
            res.status(200).json(result)
        }
        catch (error) {
            res.status(500).json({ error: error.message })
        }
    }

    async postAlbum(req, res) {
        try {
            const createAlbum = await albumModel.postAlbum(req.body)
            res.status(201).json(createAlbum) // 201 Indique que la demande a réussi et qu'une nouvelle ressource a été créée en conséquence.
        }
        catch (error) {
            res.status(500).json({ error: error.message })
        }
    }

    async updateAlbum(req, res) {
        try {
            const body = req.body
            const resultUpdate = await albumModel.updateAlbum(body, req.params.id)
            res.status(204).json(resultUpdate) // 204 Le serveur a répondu à la requête mais n'a pas besoin de renvoyer un corps de réponse. Le serveur peut renvoyer les méta-informations mises à jour.
        }
        catch (error) {
            res.status(500).json({ error: error.message })
        }
    }

    async deleteAlbum(req, res) {
        try {
            const resultDelete = await albumModel.deleteAlbum(req.params.id)
            res.status(204).send('Votre album a été supprimée') // 204 Le serveur a répondu à la requête mais n'a pas besoin de renvoyer un corps de réponse. Le serveur peut renvoyer les méta-informations mises à jour.
        }
        catch (error) {
            res.status(500).json({ error: error.message })
        }
    }



}
module.exports = new albumController();