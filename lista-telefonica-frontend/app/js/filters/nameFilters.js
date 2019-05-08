angular.module("listaTelefonica").filter("name", function() {
    return (input) => {
        const nameList = input.split(" ");

        const nameListFormat = nameList.map((name) => {
            if (/(da|de)/.test(name)) return name;
            return (
                name.charAt(0).toUpperCase() + name.substring(1).toLowerCase()
            );
        });

        return nameListFormat.join(" ");
    };
});

angular.module("listaTelefonica").filter("ellipsis", function() {
    return (input, size) => {
        if (input.length <= size) return input;
        const output = input.substring(0, size) + "...";
        return output;
    };
});
