'use strict';

/**
* @ngdoc service
* @name hobexAssessmentApp.customerService
* @description
* # customerService
* Service in the hobexAssessmentApp.
*/
angular.module('hobexAssessmentApp')
.service('customerService', function ($http) {
  // new customer
  this.newCustomer = function(c) {
    console.log("customerService: newCustomer()");
    $http({
      method : "POST",
      url : "http://assessment.hobex.tld/api/customers",
      data: c
    }).then(function mySuccess(response) {
      // flash success, clear form
    }, function myError(response) {
      // flash error
    });
  };
  // new contact
  this.newContact = function(c) {
    console.log("customerService: newContact()");
    $http({
      method : "POST",
      url : "http://assessment.hobex.tld/api/customers/" + c.CustomerID + "/addcontact",
      data: c
    }).then(function mySuccess(response) {
      // flash success, clear form
    }, function myError(response) {
      // flash error
    });
  };
});
