/**
 * Created by Wilber on 12/09/2016.
 */
var app = angular.module('myApp', []);
app.controller('AlumnosController', function ($scope) {
    $scope.alumnos=[
        {nombre: "Wilber Donayres Olayunca", telefono: "997150173", curso:"Estadistica"},
        {nombre: "Brigitte Donayres Ponce", telefono: "997119996", curso:"Matematica"},
        {nombre: "Nilda Ponce Condori", telefono: "97150588", curso:"Financiera"}
    ];
    $scope.Save=function(){
        $scope.alumnos.push({nombre:$scope.nuevoAlumno.nombre, telefono:$scope.nuevoAlumno.telefono, curso:$scope.nuevoAlumno.curso});
        $scope.formVisibility=false;
        console.log($scope.formVisibility)
    };

    $scope.formVisibility=false;
    $scope.ShowForm=function(){
        $scope.formVisibility=true;
        console.log($scope.formVisibility)
    }
});