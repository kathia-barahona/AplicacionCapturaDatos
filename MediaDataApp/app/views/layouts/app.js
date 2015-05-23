(function() {
    var app = angular.module('entry',[]);
    app.controller('EntryController',function(){
        this.data = user;
    });
    app.controller('RegistryController',function(){
        this.value = 0;
        this.active = function(value){
            this.value = value;
        };
        this.isAllowed = function(){
            if (this.value===1) {
                return true;
            }
             return false;
        };
    });
    var user = [{
        name:'kathia'
    }];
})();
