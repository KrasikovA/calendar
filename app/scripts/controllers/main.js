'use strict';

/**
 * @ngdoc function
 * @name calendarApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the calendarApp
 */
angular.module('calendarApp')
  .controller('MainCtrl', function () {
    var kDatesOne = moment().recur("2016-04-25T08:00:00.196+0600","2017-04-25T08:00:00.196+0600" ).every(4).days(),
  		kDatesTwo = moment().recur("2016-04-26T08:00:00.196+0600","2017-04-25T08:00:00.196+0600" ).every(4).days(),
  		lDates = moment().recur("2016-04-26T08:00:00.196+0600","2017-04-25T08:00:00.196+0600" ).every(3).days()
  		self = this;
    this.calendarView = 'month';
    this.calendarDate = new Date();
    this.events = [];

    function addToCalendar(dates,name,type){
    	dates.forEach(function(date){
    		self.events.push({
			    title: name, 
			    type: type, 
			    startsAt: date.toDate(),
          editable: false,
          deletable: false,
	  		})
    	})
    }

    addToCalendar(kDatesOne.all(),'Костян','info');
    addToCalendar(kDatesTwo.all(),'Костян','info');

    addToCalendar(lDates.all(),'Леха','warning');
  });
