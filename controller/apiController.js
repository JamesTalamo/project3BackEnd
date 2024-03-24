const fs = require('fs').promises
const path = require('path')

const database = {
    inside :require('../database/database'),
    setInside : function (data) {this.inside = data}
}

const get = (req,res) => {
    res.send(database.inside)
}

const add = async (req, res) => {
    const {user} = req.body
    if(!user) {
        res.status(401).send("user and pwd required!")
    }

    const news = {"name" : user}

    database.setInside([...database.inside, news])

    await fs.writeFile(path.join(__dirname,'..','database','database.json'), JSON.stringify(database.inside))

    res.status(200).send("added!")
    
}

module.exports = {
    get,
    add
}