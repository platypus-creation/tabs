(function() {
    'use strict';
    var app = angular.module('platypus.tabs', []);

    app.directive('tabs', function($location, $sce) {
       return {
           restrict: 'E',
           transclude: true,
           template:
               '<ul class="nav nav-tabs">' +
                   '<li ng-repeat="pane in panes" ng-class="{active: pane.selected}" class="{{ pane.tabClass }}" ng-hide="pane.hidden">' +
                       '<a href="" ng-click="selectTab(pane)" title="{{ pane.title | striptags }}" ng-bind-html="pane.title"></a>' +
                   '</li>' +
               '</ul>' +
               '<div class="tab-content" ng-transclude></div>',
           scope: {},
           controller: function($scope, $element) {
               $scope.panes = [];

               $scope.selectTab = function(pane) {
                   if (!pane.selected){
                       angular.forEach($scope.panes, function(p) {
                           p.selected = false;
                       });
                       pane.selected = true;
                       $location.hash(String(pane.title).replace(/<.*>/g, '').trim());
                   }
               };

               this.addPane = function(pane) {
                   $scope.panes.push(pane);
                   if ($scope.panes.length == 1 || $location.hash() == String(pane.title).replace(/<.*>/g, '').trim()) {
                       angular.forEach($scope.panes, function(p) {
                           p.selected = false;
                       });
                       pane.selected = true;
                   }
               };
           }
       };
    });
   
    app.directive('pane', function($sce) {
        return {
            require: '^tabs',
            restrict: 'E',
            transclude: true,
            template: '<div class="tab-pane" ng-class="{active: struct.selected}"><div ng-if="struct.selected" ng-transclude></div></div>',
            scope: true,
            link: function(scope, element, attrs, tabsCtrl){
                scope.struct = {
                    title: $sce.trustAsHtml(attrs.title),
                    hidden: ('ngShow' in attrs && !scope.$eval(attrs.ngShow)) || ('ngHide' in attrs && scope.$eval(attrs.ngHide)),
                    tabClass: attrs.class,
                };
                // cleaning pane element after first rendering
                setTimeout(function(){
                    element.removeAttr('title');
                    element.removeAttr('class');
                }, 0);
                
                // register itself
                tabsCtrl.addPane(scope.struct);
                
                // keeps title in sync
                attrs.$observe('title', function(nv){
                    scope.struct.title = $sce.trustAsHtml(attrs.title);
                });
            }
        };
    });

    app.filter('striptags', function() {
        return function(text) {
            return String(text).replace(/<[^>]+>/gm, '');
        };
    });
})();