/**
 * Created by Wilber on 12/09/2016.
 */
var app=angular.module("MyFirstApp",[])
app.controller("FirstController", function($scope,$http){
    $scope.nombre="Wilber Donayres Olayunca";
    $scope.nuevoComentario={};
    $scope.newPost={};
    $scope.comentarios=[
        {
            comentario: "Buen tutorial", username: "codigofacilito"
        },
        {
            comentario: "Regular tutorial", username: "wilber"
        }
    ];
    $scope.agregarComentario=function(){
        $scope.comentarios.push($scope.nuevoComentario);
    };
    $http.get("http://jsonplaceholder.typicode.com/posts")
        .success(function(data) {
            console.log(data);
            $scope.posts=data;
        })
        .error(function(err){
            console.log(error);
        });

    $scope.addPost=function(){
        $http.get("http://jsonplaceholder.typicode.com/posts",{
            title: $scope.newPost.title,
            body: $scope.newPost.body,
            userId: 1
            .sucess(function(data, status, headers, config){
                $scope.posts.push($scope.newPost);
                $scope.newPost={};
            })
        })
            .error(function(error,status,headers, config){
                console.log(error);
            });
    }
});