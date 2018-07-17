var app=angular.module("myApp", []);
app.controller("myctr", function($scope)
{
    $scope.users=[
        {
            name:"Rashmi",
            age :29,
            salary:100000,
            company:"Infosys"
        },
        {
            name:"Rani",
            age :25,
            salary:50000,
            company:"TCS"
        },
        {
            name:"Vani",
            age :30,
            salary:60000,
            company:"Wipro"
        }
    ]
})