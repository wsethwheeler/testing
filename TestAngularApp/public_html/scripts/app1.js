//Wrap app in a closure... good habit to get into
(function () {
    var app = angular.module('store', []);

    //Creating a controller... always name them "<Something>Controller"
    //Give it an anonymous inner function
    app.controller('StoreController', function(){
        this.products = gems;
    });
    
    var gems = [
        {
            name: 'Dodecahedron',
            price: 2.95,
            description: 'It\'s super rad!',
            canPurchase: true,
            soldOut: false
        },
        {
            name: 'Pentagonal Gem',
            price: 5.95,
            description: 'Coolio.',
            canPurchase: false,
            soldOut: false
        },
        {
            name: 'POWER Gem',
            price: 12,
            description: 'Powerful stuff...',
            canPurchase: true,
            soldOut: false
        }
    ];
})();