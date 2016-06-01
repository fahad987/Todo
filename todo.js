//    angular.module('app',['ngMaterial'])
//      .controller('TodoController', function ($scope) {
//         
//     $scope.addTodo = function () {
//        
//     }
// })



/**
 * Created by s on 5/31/2016.
 */

//
// angular.module('Todo',["ngMaterial"])
//     .controller('ab',function ($scope) {
//         var self = this;
//         this.add = function () {
//           self.list.$add({text: self.users,false});
//         };
//
//       $scope.add = function(user){
//         console.log(user)
//       }
//      
//     });
// 

var app = angular.module("myApp", ["ngMaterial"]);
app.controller("myController", function ($scope) {


    $scope.arr = [
        // {incomingText: "pehla", isCheckOrNot: false},
        // {incomingText: "dusra", isCheckOrNot: false}
    ];
    $scope.todo = "";


    $scope.add = function (todo) {

        $scope.arr.push({incomingText:$scope.todo, done : false});
        console.log($scope.arr);
        $scope.todo = "";
    };

    $scope.remaining = function () {
        var count = 0;
        angular.forEach($scope.arr, function (text) {
            count += todo.done ? 0 : 1;
        });
        return count;
    };
    $scope.archive = function () {
        var oldarr = $scope.arr;
        $scope.arr = [];
        angular.forEach(oldarr,function (todo) {
            if(!todo.done)$scope.arr.push(todo)
        })
    }


});
