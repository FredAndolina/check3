const trackModel = require('../models/track.model')


class trackController {
    async getTracks(req, res) {
        try {
            const findTracks = await trackModel.getTracks()
            res.status(200).json(findTracks)
        }
        catch (error) {
            res.status(500).json({ error: error.message })
        }
    }

    async postTrack(req, res) {
        try {
            const createTrack = await trackModel.postTrack(req.body)
            res.status(201).json(createTrack) // 201 Indique que la demande a réussi et qu'une nouvelle ressource a été créée en conséquence.
        }
        catch (error) {
            res.status(500).json({ error: error.message })
        }
    }

    async updateTrack(req, res) {
        try {
            const body = req.body
            const updateTrack = await trackModel.updateTrack(body, req.params.id)
            res.status(201).json(updateTrack) // 201 Indique que la demande a réussi et qu'une nouvelle ressource a été créée en conséquence.
        }
        catch (error) {
            res.status(500).json({ error: error.message })
        }
    }

    async deleteTrack(req, res) {
        try {
            const resultDelete = await trackModel.deleteTrack(req.params.id)
            res.status(204).send('Votre chanson a été supprimée') // 204 Le serveur a répondu à la requête mais n'a pas besoin de renvoyer un corps de réponse. Le serveur peut renvoyer les méta-informations mises à jour.
        }
        catch (error) {
            res.status(500).json({ error: error.message })
        }


    }
}
module.exports = new trackController();