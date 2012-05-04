if (Meteor.is_client) {
	
  Meteor.startup(function () {
		$('#dp1').datepicker({
			format: 'dd-mm-yyyy',
			autoclose: true
		});
  });
	
  Template.main.user = function () {
    return "Zuhair";
  };

  Template.main.today = function () {
    return moment().format('DD-MM-YYYY');
  };

  Template.main.events = {
    'change #dp1' : function (event) {
    	console.log("Something changed");
		$('#dp1').datepicker('hide');
    }
  };

}

if (Meteor.is_server) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}