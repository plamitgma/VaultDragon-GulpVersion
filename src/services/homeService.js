(function() {
    'use strict';

    angular.module('main')
        .factory('homeService', homeFactory);

    homeFactory.$inject = ['$http', '$q'];

    function homeFactory($http, $q) {
        var service = {
            get: get,
            update: update
        };

        return service;

        function get(key, timestamp) {
            var path = '/object/' + key;
            if(timestamp) {
                path += "?timestamp=" + timestamp;
            }
            var deferred = $q.defer();
            $http.get(path)
                .success(function(data) {
                    deferred.resolve(data);
                })
                .error(function(err) {
                    deferred.reject(err);
                });

            return deferred.promise;
        }

        function update(key, value) {
            var path = '/object/';
            var deferred = $q.defer();
            var postData = {
                key: key,
                value: value
            };
            $http.post(path, postData)
                .success(function(data) {
                    deferred.resolve(data);
                })
                .error(function(err) {
                    deferred.reject(err);
                });

            return deferred.promise;
        }
    }
})();