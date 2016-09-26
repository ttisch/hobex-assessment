'use strict';

/**
 * @ngdoc function
 * @name hobexAssessmentApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the hobexAssessmentApp
 */
angular.module('hobexAssessmentApp')
  .controller('MainCtrl', function ($scope, customerService) {

    $scope.newCust = {};
    $scope.newCont = {};

    // new customer
    this.newCustomer = function() {
      customerService.newCustomer($scope.newCust);
    };

    // new contact
    this.newContact = function() {
      customerService.newContact($scope.newCont);
    };
  });
