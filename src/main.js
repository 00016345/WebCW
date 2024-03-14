import { router } from './routes/index.js';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import path from 'path';

const PORT = 3000
const app = express()

app.set('view engine', 'ejs')
app.set('views', path.join(process.cwd(), 'src', 'views'))
app.use(express.static(path.join(process.cwd(), 'src', 'public')))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())
app.use('/wiut', router)

app.use('/*', (_, res) => {
    return res.json({
        message: 'Error with routing'
    })
})

app.listen(PORT, () => console.log(`Running on ${PORT}`))