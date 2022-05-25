const mysql = require('mysql2')


//******* CONNEXION DB *********//
class trackModel {
    connection = mysql.createConnection({
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    })


    //******* REQUETE GET SUR LA DB *********//
    async getTracks() {
        try {
            const resultTracks = await this.connection.promise().query('SELECT * FROM track')
            return resultTracks[0]
        }
        catch (error) {
            throw error
        }
    }



    async postTrack(createTrack) {
        try {
            const resultCreateTrack = await this.connection.promise().query('INSERT INTO  track set ?', [createTrack])
            return resultCreateTrack[0][0]
        }
        catch (error) {
            throw error
        }
    }

    async updateTrack(body, updateTrack) {
        try {
            const resultUpdateTrack = await this.connection.promise().query('UPDATE track set ? WHERE id = ?', [body, updateTrack])
            return resultUpdateTrack[0]
        }
        catch (error) {
            throw error
        }
    }

    async deleteTrack(resultDelete) {
        try {
            const resultDeleteTrack = await this.connection.promise().query('DELETE FROM track WHERE id = ?', [resultDelete])
            return resultDeleteTrack[0]
        }
        catch (error) {
            throw error
        }
    }


}


module.exports = new trackModel()