/**
 * Created by Wilber on 12/09/2016.
 */
angular.module("ToDoList", ["LocalStorageModule"])
.controller("ToDoController", function($scope, localStorageService){
    if(localStorageService.get("angular-todolist")){
        $scope.todo=localStorageService.get("angular-todolist");
}
else
{
    $scope.todo = [];
}
    /*
        descripcion: xxx
        fecha '02-03-2016
     */

    $scope.addAct=function(){
        $scope.todo.push($scope.newAct);
        $scope.newAct={};
        localStorageService.set($scope.todo);
    }
});