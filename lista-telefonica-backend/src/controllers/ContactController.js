const Contacts = require("../models/Contact");

class ContactController {
    constructor() {}

    async create(req, res) {
        const user = await Contacts.create(req.body);

        console.log(user);

        return res.json(user);
    }

    async view(req, res) {
        const contacts = await Contacts.find().sort({ name: 1 });

        return res.json(contacts);
    }

    async remove(req, res) {
        const contacts = await Contacts.deleteOne({ _id: req.params.id });

        return res.json(contacts);
    }

    async update(req, res) {
        const contacts = await Contacts.update(
            { _id: req.params.id },
            {
                $set: {
                    name: req.body.name,
                    phone: req.body.phone
                }
            }
        );

        return res.json(contacts);
    }
}

module.exports = new ContactController();
