const {Inquiry} = require('../util/models')

module.exports = {
    createEmail:async (req,res)=> {
        try {
            await Inquiry.create(req.body)
            res.status(200).send('success')
        }
        catch(err) {
            res.status(200).send(err)
        }
    }
}