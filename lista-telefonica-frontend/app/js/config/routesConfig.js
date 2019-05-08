angular.module("listaTelefonica").config(function($routeProvider) {
    $routeProvider.when("/contatos", {
        templateUrl: "view/contact.html"
    });
});
