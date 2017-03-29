(function() {
    angular.module('main.home', ['ngRoute'])
        .controller('homeCtrl', homeCtrl);

    homeCtrl.$inject = ['$scope', 'homeService'];

    function homeCtrl($scope, homeService) {
        var vm = this;
        vm.get = get;
        vm.update = update;

        function get() {
            if (vm.key)
                homeService.get(vm.key, vm.timestamp).then(function(data) {
                    vm.result = data ? data.value : null;
                })
        }

        function update(key, value) {
            vm.isUpdate = true;
            if (vm.postKey && vm.postValue)
                homeService.update(vm.postKey, vm.postValue).then(function(response) {
                vm.isUpdate = false;
                    vm.updateText = "Updated";
                }, function (err){
                vm.isUpdate = false;
                    vm.updateText = "Update";
                })
        }
    }
})();