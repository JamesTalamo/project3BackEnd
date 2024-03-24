const bodyParser = require('body-parser')

const express = require('express')
const app = express()

app.use(express.json())
app.use(bodyParser.json())


app.use('/api', require('./router/api'))

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`listening to PORT ${PORT}`))