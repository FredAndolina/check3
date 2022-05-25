require("dotenv").config();
const express = require("express");
const app = express();

app.use(express.json());

const port = process.env.PORT || 8000

const albumRouter = require('./albums/album.routes')
const trackRouter = require('./tracks/track.routes')

app.use('/api/albums', albumRouter)
app.use('/api/tracks', trackRouter)

app.listen(port, (err) => {
    if (err) {
        console.error("Something bad happened");
    } else {
        console.log(`Server is listening on ${port}`);
    }
});









