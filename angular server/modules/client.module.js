var Client = require('../models/client.');

var clientModule = { 
    save: (objToSave) => {
     
        var newClient = new Client(objToSave);
        return newClient.save();
    },
    update: (id, objToUpdate) => {
        if (id) {
            return Client.findByIdAndUpdate(id, objToUpdate)
        } else {
            return {
                msg: "no id specified"
            }
        }
    },
    delete: (id) => {
        if (id) {
            return Client.remove({
                _id: id
            });
        } else {``
            return {
                msg: "no id specified"
            };
        }
    },
    get: (id) => {
        if (id)
            return Client.find({
                _id: id
            });
        else
            return Client.find();
    }
}

module.exports = clientModule;