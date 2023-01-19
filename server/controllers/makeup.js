const {Makeup, Photo} = require('../util/models')

module.exports = {
    

    getAllMakeup: async(req, res) => {
        try{
       let makeup = await Makeup.findAll({ 
            include: [Photo]
        })
        res.status(200).send(makeup)
    }
    catch (err){
        res.status(400).send(err)
    }
},

}