const app = angular.module("listaTelefonica", ["ngRoute"]);

app.controller("listaTelefonicaCtrl", function($scope, contactsApi) {
    $scope.app = "Lista Telefônica";

    $scope.contatcts = [];

    $scope.operators = [
        {
            name: "OI",
            code: 31,
            category: "Celular"
        },
        {
            name: "Vivo",
            code: 37,
            category: "Celular"
        },
        {
            name: "Tim",
            code: 12,
            category: "Fixo"
        },
        {
            name: "Claro",
            code: 81,
            category: "Fixo"
        }
    ];

    const loadContacts = () => {
        contactsApi.getContacts().then(
            (response) => {
                data = response.data;
                $scope.contatcts = data;
            },
            (error) => {
                console.log(error, "can not get data.");
                $scope.error = "Não foi possível carregar os dados!";
            }
        );
    };

    $scope.addContact = (contatct) => {
        console.log(contatct);

        contactsApi.sendContacts(contatct).then(
            (response) => {
                delete $scope.contatct;
                $scope.contactForm.$setPristine();
                loadContacts();
            },
            (error) => {
                console.log(error, "can not get data.");
            }
        );
    };

    $scope.removeContact = (contatcts) => {
        const contact = contatcts.filter((contatct) => {
            if (contatct.selected) return contatct;
        });

        contactsApi.deleteContact(contact);

        delete $scope.contatct;
        $scope.contactForm.$setPristine();
        return loadContacts();
    };

    $scope.isContactSelected = (contatcts) => {
        return contatcts.some((contatct) => {
            return contatct.selected;
        });
    };

    $scope.orderBy = (value) => {
        $scope.criteryOrdenation = value;
        $scope.directionOrdenation = !$scope.directionOrdenation;
    };

    loadContacts();
});
