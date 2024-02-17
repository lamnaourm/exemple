import express from 'express'
import cors from 'cors'

const app = express() 
app.use(express.json())
app.use(cors())

const livres = [
    { id: 1, titre: 'Reminders of Him: A Novel', prix: 90.97, url: 'https://m.media-amazon.com/images/I/71rdsaOMvVL._SY522_.jpg' },
    { id: 2, titre: 'Ugly Love: A Novel', prix: 102.5, url: 'https://m.media-amazon.com/images/I/71E8VNPC1dL._SY522_.jpg' },
    { id: 3, titre: 'Where the Crawdads Sing', prix: 78.96, url: 'https://m.media-amazon.com/images/I/41KaqVvSGoL.jpg' },
    { id: 4, titre: 'November 9: A Novel', prix: 123.55, url: 'https://m.media-amazon.com/images/I/51ohVcmZMpL.jpg' },
    { id: 5, titre: 'The Return of the Gods', prix: 27.90, url: 'https://m.media-amazon.com/images/I/51vBXYM3VoL.jpg' },
    { id: 6, titre: 'I Love You to the Moon and Back', prix: 55.85, url: 'https://m.media-amazon.com/images/I/51rW2153DLL.jpg' },
    { id: 7, titre: 'All Good People Here: A Novel', prix: 90.34, url: 'https://m.media-amazon.com/images/I/41E1SK2D3JL.jpg' },
    { id: 8, titre: 'The Great Reset: And the War for the World', prix: 100.4, url: 'https://m.media-amazon.com/images/I/41HTZMz9BNL.jpg' },
    { id: 9, titre: 'Good Inside: A Guide to Becoming the Parent', prix: 106.5, url: 'https://m.media-amazon.com/images/I/41eo9TFVvYL.jpg' },
    { id: 10, titre: 'The Butcher and The Wren: A Novel', prix: 34.78, url: 'https://m.media-amazon.com/images/I/410IBmKrs-L.jpg' }
  ]


app.get('/home', (req, res)=> {
    console.log(req.body)
    res.status(202).json(livres)
})

app.get('/home/:id', (req, res)=> {
    const id = req.params.id
    res.status(202).send('ID : ' + id)
})

app.post('/home', (req, res) => {
    res.status(202).send('POST Home reussie')
})

app.put('/home', (req, res) => {
    res.status(210).send('PUT Home reussie')
})

app.delete('/home', (req, res) => {
    res.status(220).send('DELETE Home reussie')
})

app.listen(3000, (err) => {
    if(!err)
        console.log('Server Started')
    else
        console.log('Server not Started')
})
