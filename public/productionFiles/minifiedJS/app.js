var app=angular.module("personalSite",["ngRoute"]);app.config(["$routeProvider",function(e){e.when("/home",{templateUrl:"productionFiles/html/home/homeTmpl.html",controller:"homeCtrl"}).when("/about",{templateUrl:"productionFiles/html/about/aboutTmpl.html"}).otherwise("/home")}]);