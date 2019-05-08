angular
    .module("listaTelefonica")
    .factory("contactsApi", function($http, config) {
        const _getContacts = () => {
            const url = config.baseUrl + "/contacts";

            return $http({
                method: "get",
                url: url
            });
        };
        const _sendContacts = (contact) => {
            const url = config.baseUrl + "/contacts/add";

            return $http({
                method: "post",
                url: url,
                data: contact
            });
        };

        const _deleteContact = (contact) => {
            contact.forEach((value) => {
                const url = config.baseUrl + "/contacts/" + value._id;

                return $http({
                    method: "delete",
                    url: url,
                    data: value
                });
            });
        };

        return {
            getContacts: _getContacts,
            sendContacts: _sendContacts,
            deleteContact: _deleteContact
        };
    });
