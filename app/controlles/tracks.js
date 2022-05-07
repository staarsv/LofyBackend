const { httpError } = require('../helpers/handleError')
const userModel = require('../models/users')
const PORT = process.env.PORT || 3000
const URL_PUBLIC = process.env.URL_PUBLIC || '/'


//req es la peticion y res la respuesta
const getItems = async(req, res) => {
    try {
        const listAll = [{
                  "_id": 1,
                  "name": "LAKEY INSPIRE - Blue Boi",
                  "album": "LAKEY INSPIRED",
                  "cover": "https://images.unsplash.com/photo-1631044176346-804c33ade61c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1146&q=80",
                  "artist": {
                      "name": "LAKEY INSPIRED",
                      "nickname": "LAKEY INSPIRED",
                      "nationality": "US"
                  },
                  "duration": {
                      "start": 0,
                      "end": 145
                  },
                  "url": "http://localhost:3001/track.mp3"
              },
              {
                  "_id": 2,
                  "name": "Dj Quads - www is a thing",
                  "album": "Dj Quads",
                  "cover": "https://images.unsplash.com/photo-1547355253-ff0740f6e8c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80",
                  "artist": {
                      "name": "Dj Quads",
                      "nickname": "Dj Quads",
                      "nationality": "US"
                  },
                  "duration": {
                      "start": 0,
                      "end": 251
                  },
                  "url": "http://localhost:3001/track-1.mp3"
              },
              {
                  "_id": 3,
                  "name": "Pieces - After The Fall",
                  "album": "Pieces",
                  "cover": "https://images.unsplash.com/photo-1606056041654-f203e0351229?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
                  "artist": {
                      "name": "Pieces",
                      "nickname": "Pieces",
                      "nationality": "US"
                  },
                  "duration": {
                      "start": 0,
                      "end": 308
                  },
                  "url": "http://localhost:3001/track-2.mp3"
              },
              {
                  "_id": 4,
                  "name": "KaizanBlu - Space",
                  "album": "KaizanBlu",
                  "cover": "https://images.unsplash.com/photo-1541873676-a18131494184?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=718&q=80",
                  "artist": {
                      "name": "KaizanBlu",
                      "nickname": "KaizanBlu",
                      "nationality": "UK"
                  },
                  "duration": {
                      "start": 0,
                      "end": 250
                  },
                  "url": "http://localhost:3001/track-3.mp3"
              },
              {
                  "_id": 5,
                  "name": "KaizanBlu - Remember",
                  "album": "KaizanBlu",
                  "cover": "https://images.unsplash.com/photo-1621526782597-9d8d4df3a343?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
                  "artist": {
                      "name": "KaizanBlu",
                      "nickname": "KaizanBlu",
                      "nationality": "IT"
                  },
                  "duration": {
                      "start": 0,
                      "end": 227
                  },
                  "url": "http://localhost:3001/track-4.mp3"
              },
              {
                  "_id": 6,
                  "name": "After The Fall - Tears Of Gaia",
                  "album": "After The Fall",
                  "cover": "https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/143116110/original/1c14c1c66a2d4b8712a8c1314ef9d3b956717aa8.jpg",
                  "artist": {
                      "name": "After The Fall",
                      "nickname": "After The Fall",
                      "nationality": "US"
                  },
                  "duration": {
                      "start": 0,
                      "end": 245
                  },
                  "url": "http://localhost:3001/track-5.mp3"
              },
              {
                  "_id": 7,
                  "name": "After The Fall - Imagining",
                  "album": "After The Fall",
                  "cover": "https://cutewallpaper.org/21/lofi-background/Lofi-pictures-clipart-images-gallery-for-free-download-.jpg",
                  "artist": {
                      "name": "After The Fall",
                      "nickname": "After The Fall",
                      "nationality": "US"
                  },
                  "duration": {
                      "start": 0,
                      "end": 244
                  },
                  "url": "http://localhost:3001/track-6.mp3"
              },
              {
                  "_id": 8,
                  "name": "Greetings - Low Frequency",
                  "album": "Low Frequency",
                  "cover": "https://i1.sndcdn.com/artworks-MSFy8yhpuxL6YGLH-hIYosg-t500x500.jpg",
                  "artist": {
                      "name": " Low Frequency",
                      "nickname": " Low Frequency",
                      "nationality": "CO"
                  },
                  "duration": {
                      "start": 0,
                      "end": 220
                  },
                  "url": "http://localhost:3001/track-7.mp3"
              },
              {
                  "_id": 9,
                  "name": "Headache - FRKA2",
                  "album": "FRKA2",
                  "cover": "https://img.myloview.es/vinilos/vector-illustration-of-pixel-art-city-pixel-art-retro-futuristic-background-for-game-8-bit-pixel-sunset-city-700-199023269.jpg",
                  "artist": {
                      "name": "FRKA2",
                      "nickname": "FRKA2",
                      "nationality": "CO"
                  },
                  "duration": {
                      "start": 0,
                      "end": 217
                  },
                  "url": "http://localhost:3001/track-8.mp3"
              },
              {
                  "_id": 10,
                  "name": "Tears - Envy",
                  "album": "Envy",
                  "cover": "https://cdnb.artstation.com/p/assets/images/images/015/084/805/large/theophile-curto-city-purple.jpg?1546992493",
                  "artist": {
                      "name": "Envy",
                      "nickname": "Envy",
                      "nationality": "CO"
                  },
                  "duration": {
                      "start": 0,
                      "end": 237
                  },
                  "url": "http://localhost:3001/track-9.mp3"
              },
              {
                  "_id": 11,
                  "name": "Mirrorverse",
                  "album": "Envy",
                  "cover": "https://previews.123rf.com/images/miketea/miketea1603/miketea160300672/55118213-retro-pixel-art-template-background.jpg",
                  "artist": {
                      "name": "Envy",
                      "nickname": "Envy",
                      "nationality": "CO"
                  },
                  "duration": {
                      "start": 0,
                      "end": 427
                  },
                  "url": "http://localhost:3001/track-10.mp3"
              },
              {
                  "_id": 12,
                  "name": "Sweet Sad Afternoon - BubbleBeats",
                  "album": "BubbleBeats",
                  "cover": "https://static-prod.adweek.com/wp-content/uploads/2022/03/Messenger-Lo-Fi-Theme-Hero-1284x680.png",
                  "artist": {
                      "name": "BubbleBeats",
                      "nickname": "BubbleBeats",
                      "nationality": "CO"
                  },
                  "duration": {
                      "start": 0,
                      "end": 427
                  },
                  "url": "http://localhost:3001/track-11.mp3"
              },
              {
                  "_id": 13,
                  "name": "Solitude - Ridiman x oldboy",
                  "album": " Ridiman x oldboy",
                  "cover": "https://i.gyazo.com/45f33b463b8129181326899ea79c47d4.png",
                  "artist": {
                      "name": " Ridiman x oldboy",
                      "nickname": " Ridiman x oldboy",
                      "nationality": "CO"
                  },
                  "duration": {
                      "start": 0,
                      "end": 239
                  },
                  "url": "http://localhost:3001/track-12.mp3"
              },
              {
                  "_id": 14,
                  "name": "The End - Eva",
                  "album": "Eva",
                  "cover": "https://i1.sndcdn.com/artworks-irhaS1lWGK8v44nT-CAXFrg-t500x500.jpg",
                  "artist": {
                      "name": "Eva",
                      "nickname": "Eva",
                      "nationality": "CO"
                  },
                  "duration": {
                      "start": 0,
                      "end": 509
                  },
                  "url": "http://localhost:3001/track-13.mp3"
              },
              {
                  "_id": 15,
                  "name": "Summer Knigth - l33",
                  "album": "l33",
                  "cover": "https://splice-res.cloudinary.com/image/upload/f_auto,q_auto,w_auto/c_limit,w_450/v1616690949/1616690949.jpg",
                  "artist": {
                      "name": "l33",
                      "nickname": "l33",
                      "nationality": "CO"
                  },
                  "duration": {
                      "start": 0,
                      "end": 413
                  },
                  "url": "http://localhost:3001/track-14.mp3"
              },
              {
                  "_id": 16,
                  "name": "Can you hear me - l33",
                  "album": "l33",
                  "cover": "https://wallpaperaccess.com/full/6353230.png",
                  "artist": {
                      "name": "l33",
                      "nickname": "l33",
                      "nationality": "CO"
                  },
                  "duration": {
                      "start": 0,
                      "end": 354
                  },
                  "url": "http://localhost:3001/track-15.mp3"
              },
              {
                  "_id": 17,
                  "name": "s t a r s - Paryo",
                  "album": "Paryo",
                  "cover": "https://i.ytimg.com/vi/MFTjvdhWhg4/maxresdefault.jpg",
                  "artist": {
                      "name": "Paryo",
                      "nickname": "Paryo",
                      "nationality": "CO"
                  },
                  "duration": {
                      "start": 0,
                      "end": 308
                  },
                  "url": "http://localhost:3001/track-16.mp3"
              },
              {
                  "_id": 18,
                  "name": "Time - l33",
                  "album": "l33",
                  "cover": "https://i.ytimg.com/vi/2MMSc5qAIEg/maxresdefault.jpg",
                  "artist": {
                      "name": "l33",
                      "nickname": "l33",
                      "nationality": "CO"
                  },
                  "duration": {
                      "start": 0,
                      "end": 316
                  },
                  "url": "http://localhost:3001/track-17.mp3"
              },
              {
                  "_id": 19,
                  "name": "Forever - 9odlow",
                  "album": "9odlow",
                  "cover": "https://i1.sndcdn.com/artworks-ynrUKNwljVgqFqVJ-uHxtEw-t500x500.jpg",
                  "artist": {
                      "name": "9odlow",
                      "nickname": "9odlow",
                      "nationality": "CO"
                  },
                  "duration": {
                      "start": 0,
                      "end": 254
                  },
                  "url": "http://localhost:3001/track-18.mp3"
              },
              {
                  "_id": 20,
                  "name": "Wish I'd Stayed - Yusei",
                  "album": "Yusei",
                  "cover": "https://mir-s3-cdn-cf.behance.net/projects/404/7e3520114084301.Y3JvcCwxMDgwLDg0NCwwLDExNw.gif",
                  "artist": {
                      "name": "Yusei",
                      "nickname": "Yusei",
                      "nationality": "CO"
                  },
                  "duration": {
                      "start": 0,
                      "end": 243
                  },
                  "url": "http://localhost:3001/track-19.mp3"
                }
        ]
        res.send({ data: listAll }) //res es la RESPUESTA del servidor, por lo que devolveria la data de dentro del array listAll
    } catch (e) {
        httpError(res, e)
    }
}

const getItem = (req, res) => {

}

const createItem = async(req, res) => {
//del
}


const updateItem = (req, res) => {

}

const deleteItem = (req, res) => {

}

module.exports = { getItem, getItems, deleteItem, createItem, updateItem }