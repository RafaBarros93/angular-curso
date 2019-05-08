const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        phone: {
            type: String,
            required: true
        },
        operators: {
            name: String,
            code: String,
            category: String
        }
    },
    { timestamps: { createdAt: "created_at", updatedAt: "updatedAt_at" } }
);

const Contact = mongoose.model("Contacts", ContactSchema);

module.exports = Contact;
